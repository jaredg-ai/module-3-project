const favoriteColor = document.querySelector('#color')

function favColor(evt) {
    evt.preventDefault()


    alert('RED!')
}

favoriteColor.addEventListener('click', favColor)
//////////////////////////////////
const favoritePlace = document.querySelector('#place')

function favPlc(evt) {
    evt.preventDefault()


    alert('Tokyo!')
}

favoritePlace.addEventListener('click', favPlc)


///////////////////

const favoriteRitual = document.querySelector('#ritual')


function favRit(evt) {
    evt.preventDefault()


    alert('What?? Why is this button even here?')
}

favoriteRitual.addEventListener('click', favRit)

////come back to step 5////
