let persona = document.querySelector('#persona')
let square = document.querySelector('#square')

function pular(){
    if(persona.classList != 'animar'){
        persona.classList.add('animar')
    }

    setTimeout(function(){
        persona.classList.remove('animar')
    }, 500)
}

var colision = setInterval( function(){

    var topPersona = parseInt(
        window.getComputedStyle(persona).getPropertyValue('top')
    )
    var squarel = parseInt(
        window.getComputedStyle(square).getPropertyValue('left')
    )

    if(squarel < 20 && squarel > 0 && topPersona >=130){
        square.style.animation = 'none'
        square.style.display = 'none'
        alert('Você perdeu!')
    }
}, 10)