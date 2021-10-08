
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather.js')


const app = express()

//define paths for express config
const publicDirPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and view location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirPath))

app.get('',(req, res) =>{
    res.render('index',{
        title:'Weather Application',
        name :'Erez Asmara'
    })

})

app.get('/about',(req,res) =>{
    res.render('about',{
        title:'About me',
        name:'Erez Asmara',
        jobTitle:'Junior Back-end Developer'
    })

})

app.get('/help',(req,res) =>{
    res.render('help',{
        title:'Help',
        helpText : 'this application done with node.js /express.js in the back-end , html/js/css/hbs for the front-end. for reviewing code visit git repository www.test.com',
        name:'Erez Asmara'
    })    
})


app.get('/weather',(req,res) =>{

    if(!req.query.address){
        return res.send({
            error : "you must provide address."
        })
    }
    weather.GetGeocode(req.query.address,(error,{lat,long,location}={})=>{
        if(error){
            return res.send({error})
        }

        weather.GetForecast(lat,long,(error,{forecast,forecastImage}={}) =>{

            if(error){
                return res.send({error})
            }

            res.send({
                forecast,
                location,
                address:req.query.address,
                forecastImage
            })

        })

    })
    
} )

app.get('/help/*',(req,res) =>{
    res.render('404',{
        title:'404',
        errorMessage:'the article not found!',
        name:'Erez Asmara'
    })
})


app.get('*',(req,res) =>{
    res.render('404',{
        title:'404',
        errorMessage : 'My 404 Page',
        name:'erez Asmara'
    })

})

app.listen(3000, () => {

    console.log('Server is up on port 3000.') // listen on localhost.
})

