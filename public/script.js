window.onload = () => {

    let squares = document.getElementsByClassName("likeId")
    console.log(squares)

    squares.forEach( (square) => {

        let id = square.getAttribute("id")
        // console.log(id)
        document.getElementById(id).addEventListener("click", () => {onButtonClick(id)});

    })
}

async function onButtonClick(id){

    let params = new URLSearchParams({_id:id})

    // console.log(id)

    const response = await fetch("/like?" + params)

    // console.log(document.getElementById(id).textContent)

    let likes = document.getElementById(id+"-text").textContent

    document.getElementById(id+"-text").textContent = parseInt(likes) + 1

    console.log(parseInt(likes))

    // console.log(squares)
}
