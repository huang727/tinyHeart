var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane ;   //海草
var fruit; //果實

var mom ;

var mx ;
var my ;


document.body.onload = game;
function game()
{
      init();//初始化
      lastTime = Date.now();
      delaTime = 0;
      gameloop();
}

function init ()
{
//獲得 canvas context
can1 =  document.getElementById("canvas1");//fishes , dust  , UI , circle
ctx1 = can1.getContext('2d');
can2 =  document.getElementById("canvas2");//background ,  ane , fruits
ctx2 = can2.getContext('2d');

can1.addEventListener('mousemove',onMouseMove , false ); //監測滑鼠位子

bgPic.src = "./src/background.jpg";

canWidth = can1.width;
canHeight = can1.height;

ane= new aneObj();
ane.init();         //海草初始化

fruit = new fruitObj();
fruit.init();       //果實初始化

mom = new momObj();
mom.init();

mx = canWidth * 0.5 ;
my = canHeight * 0.5 ;
}
function gameloop()
{
  window.requestAnimFrame(gameloop);//setInterval , setTimeout
  var now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;

  drawBackground();     //繪製背景
  ane.draw();           //繪製海草
  fruit.draw();         //繪製果實
  fruitMonitor ();      //果實重製

  ctx1.clearRect(0,0,canWidth,canHeight);
  mom.draw();
}
function onMouseMove(e)
{
    if(e.offSetX || e.layerX)
    {
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}
