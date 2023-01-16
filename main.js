

let form = document.querySelector("form")
let input = document.querySelector("input")
let image = document.querySelector("img")
let select = document.querySelector("select")

let refresh = document.querySelector(".delete")
// let imageDiv = document.querySelector(".image-div")


async function getQr(e) {
    e.preventDefault()

    let newText = input.value

    let size = select.value

    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${newText}`)

    let qrImgage = response.url

    image.setAttribute("src", qrImgage)



}

form.addEventListener("submit", getQr)


refresh.addEventListener("click", refreshQr)

function refreshQr(e) {
    form.reset()
    let imageSrc = "./c1b16047cac8e5c53c448ca2744ae77b.gif"
    image.setAttribute("src", imageSrc)
}