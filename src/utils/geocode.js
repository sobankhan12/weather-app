const request=require("request")
const geoCode=(address,callback)=>{
    const geoUrl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic29iYW4xMiIsImEiOiJja244cTNrd2UwY2o2Mm9wZHc1cm9peWhkIn0.8uDmgITGCs7Gqs5Z2YPlfA&limit=1`
    request({url:geoUrl,json:true},(err,{body}={})=>{

        if(err){
            callback("Unable to connect geo service",undefined)
        }else if(!body.features.length){
            // console.log("here is not comming");
                     callback("Unable to find location. Try another search",undefined)
        }else{
            // console.log("here is coming");
                // const data1=res.body
                const latitude=body.features[0].center[1];
                const longitude=body.features[0].center[0];
                // console.log(latitude,longitude);
                callback(undefined,{
                    longitude:longitude,
                    latitude:latitude,
                    location:body.features[0].place_name
                })
        }
    })
}
module.exports=geoCode