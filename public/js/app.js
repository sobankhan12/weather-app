console.log('Client side javascript file is loaded!')
const weatherForm=document.querySelector("form");
const search=document.querySelector("input")
const messageOne=document.getElementById("message1")
const messageTwo=document.getElementById("message2")
const inputText=document.getElementById("inputValue")
weatherForm.addEventListener("submit",(e)=>{
    const location=search.value;
    // inputText.value=""
    // search.value=""
    e.preventDefault()
    // search.value=" "
    // console.log(location);
    fetch(`http://localhost:3000/weather?address=${location}`).then((res)=>{
        res.json().then((data)=>{
            if(data.error){
                console.log(data.error);
                messageOne.textContent=data.error
                messageTwo.textContent=""
            }else{
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })
})