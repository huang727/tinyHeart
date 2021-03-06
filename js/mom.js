var momObj = function()
{
   this.x;
   this.y;
   this.angle; //角度
   this.bigEye  = new Image() ;
   this.bigBody = new Image() ;
   this.bigTail = new Image() ;
}
momObj.prototype.init = function()
{
  this.x = canWidth * 0.5 ;
  this.y = canHeight * 0.5 ;
  this.angle=0;
  this.bigEye.src = "./src/bigEye0.png";
  this.bigBody.src = "./src/bigSwim0.png";
  this.bigTail.src = "./src/bigTail0.png";
}


// function lerpAngle(a, b, t) {
//
// 	var d = b - a;
//
// 	if (d > Math.PI) d = d - 2 * Math.PI;//因为值域在【-π—π】,所以当角度差大于π是减去2π使得取值在值域之间，且视觉上在同一位置
//
// 	if (d < -Math.PI) d = d + 2 * Math.PI;//因为值域在【-π—π】,所以当角度差小于π是加上2π使得取值在值域之间，且视觉上在同一位置
//
// 	return a + d * t;
//
// }

momObj.prototype.draw = function()
{
          //lerp x,y
          this.x =  lerpDistance(mx , this.x , 0.99);
          this.y =  lerpDistance(my , this.y , 0.99);

          //delta angle
          //math.atan2(x.y)
          var deltaY = my - this.y;
          var deltaX = mx - this.x ;
          var beta = Math.atan2(deltaY,deltaX) + Math.PI;
          // console.log (this.angle)
          //lerp angle
          this.angle = lerpAngle (beta,this.angle,0.6) ;
          console.log(this.angle);

          ctx1.save();
          ctx1.translate(this.x ,this.y);
          //打錯字
          ctx1.rotate(this.angle);
          ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5 , -this.bigEye.height * 0.5);
          ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5 , -this.bigBody.height * 0.5);
          ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);

          ctx1.restore();
}
