const modalOverlay = document.querySelector('.modal__overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add("active")
        const idReceitas = card.getAttribute("id");
        const tituloReceitas = card.querySelector(".card__title").innerText
        const autorReceitas = card.querySelector(".card__author").innerText
        modalOverlay.querySelector("img").src = `/source/img/${idReceitas}.png`
        modalOverlay.querySelector("h3").innerText = `${tituloReceitas}`
        modalOverlay.querySelector("p").innerText = `${autorReceitas}`

    })
}

document.querySelector(".modal__close").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("h3").innerText = ""
    modalOverlay.querySelector("p").innerText = ""
})