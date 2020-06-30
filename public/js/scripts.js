cards = document.querySelectorAll('.card')
sections = document.querySelectorAll('section')
collapsesIng = document.querySelector('.recipe__content-ingredients .collapse')
collapsesSte = document.querySelector('.recipe__content-step .collapse')
collapsesAdd = document.querySelector('.recipe__content-addInfo .collapse')
collIng = document.querySelector('.recipe__content-ingredients ul')
collSte = document.querySelector('.recipe__content-step ul')
collAdd = document.querySelector('.recipe__content-addInfo ul')

for (let card of cards) {
    card.addEventListener("click", function () {

        recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${recipeId}`

    })
}



collapsesIng.innerText = 'Esconder'
collapsesSte.innerText = 'Esconder'
collapsesAdd.innerText = 'Esconder'

collapsesIng.addEventListener("click", function () {
    if (collapsesIng.innerText == 'Esconder') {
        collIng.style.display = 'none'
        collapsesIng.innerText = 'Mostrar'
    } else {
        collIng.style.display = 'block'
        collapsesIng.innerText = 'Esconder'
    }
})


collapsesSte.addEventListener("click", function () {
    if (collapsesSte.innerText == 'Esconder') {
        collSte.style.display = 'none'
        collapsesSte.innerText = 'Mostrar'
    } else {
        collSte.style.display = 'block'
        collapsesSte.innerText = 'Esconder'
    }
})

collapsesAdd.addEventListener("click", function () {
    if (collapsesAdd.innerText == 'Esconder') {
        collAdd.style.display = 'none'
        collapsesAdd.innerText = 'Mostrar'
    } else {
        collAdd.style.display = 'block'
        collapsesAdd.innerText = 'Esconder'
    }
})