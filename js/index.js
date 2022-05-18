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
let changePic = () => {
    (++picIndex === picArray.length) ? picIndex = 0 : picIndex = picIndex;
    curPic = picArray[picIndex];
    document.getElementById("theImage").src=`images/${curPic}`;
}

// let changePos = () => {
//     let imgStyle = document.getElementById("theImage").style;

//     if(imgStyle.left === "-20rem")
//     {
//         imgStyle.left = "20rem";
//     }
//     else
//     {
//         imgStyle.left = "-20rem";
//     }
// }

