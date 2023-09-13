const express = require('express')

const app = express()

/** 
 * 
 * 
 * 
*/


app.get('/',(request,response)=>{
    response.send("Hello, world! from Jiménez Díaz Antonio")
})








//http://localhost:3000/
app.listen(3000, () =>{
    console.log('Listening on port 3000')
} )