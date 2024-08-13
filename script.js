var i = 0;
// will be called automatically after page opens
// function is used to change images 
setInterval(function(){
    const imagesArr = ["./images/apple-1.png","./images/apple-2.png", "./images/apple-3.png", "./images/apple-4.png"]
    const imageObject = document.getElementById('images')
    imageObject.style.opacity = 0;
    
    console.log("Opqacity: 0")
    
    setTimeout(function(){
        imageObject.src = imagesArr[i]
        imageObject.style.opacity = 1;
        console.log("Opqacity: 1")
        if(i < 3){
            i += 1
        }
        else{
            i = 0
        }
    },1000)
    console.log(i)
},3000)