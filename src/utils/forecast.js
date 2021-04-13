const request=require("request")
const forecast=(latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=2ae39ce702e48fabf05ffccabc1d7a1b&query=${latitude},${longitude}`
    request({url,json:true},(err,{body}={})=>{
        if (err){
            callback("Unable to connect map service",undefined)
        }else if(body.error){
            callback("Unable to find location .Try another search",undefined)
        }else{
            
             city=`it is currently ${body.current.temperature} degree and feels like ${body.current.feelslike} degree`;
            callback(undefined,city)
        }
    })
   
}
module.exports=forecast