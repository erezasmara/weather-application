// java script file for client server , not a belong to node.js express server web
console.log('hello from java script file client side!')

//fetch is api call from client side can not be use from node (got the express and request library)
// simple api call -> http://puzzle.mead.io/puzzle



const weatherForm = document.querySelector('form') // select the form tag on submit
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageBox = document.querySelector('.forecast')
const imgForecast = document.querySelector('#forecastImage')


weatherForm.addEventListener('submit',(e) =>{  // on submit form do the next line code.
    e.preventDefault()

    const address = search.value //extract the the value to variable

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageBox.style.borderStyle = 'none'
    imgForecast.src = ''

    fetch('http://localhost:3000/weather?address='+address).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            messageOne.textContent = data.error  // display on browser with id tag
        }else{
            messageBox.style.borderStyle = 'dotted'
            messageOne.textContent = 'Location: ' + data.location
            messageTwo.textContent = 'Forecast: ' +  data.forecast
            imgForecast.src = data.forecastImage

        }
    })

})
})

