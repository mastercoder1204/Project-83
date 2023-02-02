var startpositionofx,startpositionofy,lastpositionofx,lastpositionofy;
canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
color= "black";
linewidth=2;
canvas.addEventListener("touchstart", mytouch)
function mytouch(e){
    startpositionofx= e.touches[0].clientX - canvas.offsetLeft;
    startpositionofy= e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(lastpositionofx , lastpositionofy);
    ctx.lineTo(currentpositionx , currentpositiony);
    ctx.stroke();

    lastpositionofx = lastpositionofy;
    startpositionofx = startpositionofy;
    }
canvas.addEventListener("touchmove",mymove);
function mymove(e){
    currentpositionx=e.touches[0].clientX-canvas.offsetLeft;
    currentpositiony=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    
    console.log("X="+ startpositionofx+"Y"+ startpositionofy)
    ctx.moveTo(startpositionofx,startpositionofy);
    console.log("X=" + currentpositionx + "Y=" + currentpositiony)
    ctx.lineTo(currentpositionx,currentpositiony);
    ctx.stroke();
    startpositionofx=currentpositionx;
    startpositionofy=currentpositiony;
}
