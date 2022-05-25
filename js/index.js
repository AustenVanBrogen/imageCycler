//const { del } = require("express/lib/application");

let picArray = ['mario.png', 'link.png', 'donkeyKong.png'];
let picIndex = 0;
let firstTimeChanging = true;
let delayInterval = 3000;
let sliderDelayInterval = 2500;
let timer;
let sliderTimer;

let btnPressed = () => {
    changePic();
    if(firstTimeChanging)
    {
        firstTimeChanging = false;
        timer = setInterval(changePic, delayInterval);
        //sliderTimer = setInterval(changePos, sliderDelayInterval);
    }
    clearInterval(timer);
    timer = setInterval(changePic, delayInterval);
}

//increments picIndex, then if its passed the end of the picArray, set picIndex to 0.
//Change the image in index.html to be the new image in the array
async function  changePic() {
    (++picIndex === picArray.length) ? picIndex = 0 : picIndex = picIndex;
    curPic = picArray[picIndex];

    //Change this so that the new picture is the one that fades in
    await transition();
    document.getElementsByClassName("firstImg")[0].src=`images/${curPic}`;
    // document.getElementsByClassName("firstImg")[0].style.opacity -= 0.1;
    // if(document.getElementsByClassName("firstImg")[0].style.opacity <= 0)
    // {
    //     document.getElementsByClassName("firstImg")[0].style.opacity = 1;
    // }
}

function transition() {
    return new Promise(function (resolve, reject) 
    {
            // del is the value by which opacity is
            // decreased every interval
            let del = 0.01;

            let id = setInterval(fade, 10);

        function fade() 
        {
            document.getElementsByClassName("firstImg")[0].style.opacity -= del;

            if(document.getElementsByClassName("firstImg")[0].style.opacity <= 0)
            {
                //Temporary for testing
                document.getElementsByClassName("firstImg")[0].style.opacity = 1;

                clearInterval(id);
                resolve();
            }
        }
    });
}

