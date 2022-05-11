let picArray = ['mario.png', 'link.png', 'donkeyKong.png'];
picIndex = 0;

//increments picIndex, then if its passed the end of the picArray, set picIndex to 0.
//Change the image in index.html to be the new image in the array
function changePic(){
    (++picIndex === picArray.length) ? picIndex = 0 : picIndex = picIndex;
    curPic = picArray[picIndex];
    document.getElementById("theImage").src=`images/${curPic}`;
}