var second=00;
var first=00;
var screensec=document.getElementById('second');
var screenfirst=document.getElementById('first');
var start=document.getElementById('start');
var stopp=document.getElementById('pause');
var reset=document.getElementById('reset');
var Interval;
start.addEventListener('click',()=>{
clearInterval(Interval);
Interval=setInterval(timestart,10);
})
stopp.addEventListener('click',()=>{
    clearInterval(Interval);

})
reset.addEventListener('click',()=>{
    clearInterval(Interval);
    first=0;
    second=0;
    screenfirst.innerHTML="0"+first;
    screensec.innerHTML="0"+second;
})
var timestart=function(){
    first++;
    if(first<=9)
    {
        screenfirst.innerHTML="0"+first;
    }
    if(first>9)
    {
        screenfirst.innerHTML=first;
    }
    if(first>99)
    {
        second++;
        screensec.innerHTML="0"+second;
        first=0;
        screenfirst.innerHTML="0"+first;
    }
    if(second>9)
    {
        screensec.innerHTML=second;
    }

}