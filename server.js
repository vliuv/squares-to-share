const express = require("express")
const parser = require("body-parser")
const multer = require("multer")

const encodedParser = parser.urlencoded({extended: true})
const uploadProcessor = multer({dest: "public/upload"})

const nedb = require("nedb")
const app = express()

const cookieParser = require("cookie-parser")
const expressSession = require("express-session")
const nedbSessionStore = require("nedb-session-store")
const bcrypt = require("bcrypt")

const nedbInitializedStore = nedbSessionStore(expressSession)
const sessionStore = new nedbInitializedStore({
    filename: "sessions.txt"
})

app.use(express.static("public"))
app.use(encodedParser)

app.use(cookieParser())
app.use(expressSession({
    store: sessionStore,
    cookie: {maxAge: 365 * 24 * 60 * 60 * 1000},
    secret: "supersecret123"
}))

app.set("view engine", "ejs")

let database = new nedb({
    filename: "database.txt",
    autoload: true
})

let admindatabase = new nedb({
    filename: "login.txt",
    autoload: true
})

//function for user authentication
function requiresAuth(req, res, next) {
    if(req.session.loggedInUser) {
        console.log("requires auth:" + req.path)
        next()
    } else {
        res.redirect("/login?error=true")
    }
}

//route for home page (default, most recent on top)
app.get("/", (req, res) => {

    let query = {}

    let sortQuery = {
        timestamp: -1
    }

    database.find(query).sort(sortQuery).exec((error, data)=>{
        res.render("home.ejs", {squares: data})
    })
})

//route for home page (most liked at top)
app.get("/popular", (req, res) => {

    let query = {}

    let sortQuery = {
        likes: -1
    }

    database.find(query).sort(sortQuery).exec((error, data)=>{
        res.render("home.ejs", {squares: data})
    })
})

//route for form
app.get("/share", (req, res) => {
    res.render("share.ejs")
})

//route for getting data from form
app.post("/upload", uploadProcessor.single("image"), (req, res) => {

    console.log(req.file)

    let now = new Date()

    let data = {
        image: "upload/" + req.file.filename,
        name: req.body.name,
        description: req.body.description,
        date: now.toLocaleString(),
        timestamp: now.getTime(),
        likes: 0
    }

    database.insert(data, (error, newData) => { 
        res.redirect("/")
    })

})

//route for create page
app.get("/create", (req, res) => {
    res.render("create.ejs")
})

//route for about page
app.get("/about", (req, res) => {
    res.render("about.ejs")
})

//route to get individual squares
app.get("/square/:id", (req, res) => {
    let id = req.params.id

    let query = {
        _id: id
    }

    database.findOne(query, (error, data)=>{ 
        res.render("square.ejs", {square: data})
    })
})

//route to like
app.get("/like", (req, res) => {
    let squareId = req.query._id

    squareId = squareId.replace("like-", "")

    // console.log(squareId)

    let query = {
        _id: squareId
    }

    let update = {
        $inc: {likes: 1}
    }

    database.update(query, update, {}, (error, numReplaced) => {
        console.log("updated likes")
        res.send("test")
    })
})

/* DISABLE ADMIN SETUP

//route for displaying admin setup page
app.get("/adminsetup", (req, res) => {
    res.render("adminsetup.ejs")
})

//route to set up admin login
app.post("/setup", (req, res) => {

    let hashedPassword = bcrypt.hashSync(req.body.password, 10)

    let data = {
        username: req.body.username,
        password: hashedPassword
    }

    admindatabase.insert(data, (error, insertedData)=> {
        console.log(insertedData)
        res.redirect("/adminlogin")
    })
})

*/

//route for admin login page
app.get("/adminlogin", (req, res) => {

    if(req.session.loggedInUser) {
        let query = {}

        let sortQuery = {
            timestamp: -1
        }
    
        database.find(query).sort(sortQuery).exec((error, data)=>{
            res.render("adminhome.ejs", {squares: data})
        })
    } else {
        res.render("adminlogin.ejs")
    }

})

//route to authenticate login
app.post("/authenticate", (req, res) => {
    
    let data = {
        username: req.body.username,
        password: req.body.password
    }

    let searchedQuery = {
        username: data.username,
    }

    console.log("attempt login")

    admindatabase.findOne(searchedQuery, (error, user) => {
        if(error || user == null) {
            res.redirect("/adminlogin")
        } else {
            let encPass = user.password
            console.log("found user")
            if(bcrypt.compareSync(data.password, encPass)){
                let session = req.session
                session.loggedInUser = data.username
                console.log("successful login")
                res.redirect("/adminhome")
            } else {
                res.redirect("/adminlogin")
            }
        }
    })
})

//route to log out (admin)
app.get("/logout", (req,res)=> {
    delete req.session.loggedInUser
    res.redirect("/")
})

//route for admin home page
app.get("/adminhome", requiresAuth, (req, res) => {
    let query = {}

    let sortQuery = {
        timestamp: -1
    }

    database.find(query).sort(sortQuery).exec((error, data)=>{
        res.render("adminhome.ejs", {squares: data})
    })
})

//route to delete posts (admin only)
app.post("/delete", requiresAuth, (req, res) => {
    let squareId = req.body.squareId

    let query = {
        _id: squareId
    }

    database.remove(query, (error, numRemoved) => {
        res.redirect("/adminhome")
    })
})

//route to get individual squares (admin version)
app.get("/adminsquare/:id", requiresAuth, (req, res) => {
    let id = req.params.id

    let query = {
        _id: id
    }

    database.findOne(query, (error, data)=>{ 
        res.render("adminsquare.ejs", {square: data})
    })
})

app.listen(7001, ()=> {
    console.log("server has started on port 7001")
})