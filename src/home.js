window.addEventListener("load", function(){
    let images = [];
    images[0] = "/src/assets/product01.PNG";
    images[1] = "/src/assets/product02.PNG";
    images[2] = "/src/assets/product03.PNG";
    images[3] = "/src/assets/product04.PNG";
    images[4] = "/src/assets/product05.PNG";
    images[5] = "/src/assets/product06.PNG";
    images[6] = "/src/assets/product07.PNG";
    function changeImage(){
        let time = 5000;
        let i = 1;
        setInterval(function(){
            document.slider.src = images[i];
            i++;
            
            if(i === images.length){
                i = 0;
            }
        }, time);
    }
    changeImage();
    function changeImage2(){
        let time = 5000;
        let i = 0;
        setInterval(function(){
            document.slider2.src = images[i];
            i++;
    
            if(i === images.length){
                i = 0;
            }
        }, time);
    }
    changeImage2();
    function changeImage3(){
        let time = 5000;
        let i = 2;
        setInterval(function(){
            document.slider3.src = images[i];
            i++;
    
            if(i === images.length){
                i = 0;
            }
        }, time);
    }
    changeImage3();
})