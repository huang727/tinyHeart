var fruitObj = function()
{
        this.alive = [] ; //bool
        this.x = [];
        this.y = [] ;
        this.l = [];
        this.spd = [];
        this.fruitType = [];
        this.fruit = new Image();//橘色果實
        this.blue = new Image();//藍色果實
}
fruitObj.prototype.num = 30 ;  //果實數量
fruitObj.prototype.init = function()//初始化
{
          for(var i = 0 ; i < this.num ; i++ )
          {
            this.alive[i] = false; //定義果實目前有無狀態
            this.x[i] = 0 ;
            this.y[i] = 0 ;
            this.l[i] = 0 ;
            this.spd [i] = Math.random ()* 0.017 + 0.003 ;
            this.fruitType[i] = 0 ;
            this.born(i);
          }
          this.fruit.src = "./src/fruit.png";   //引入圖片初始化
          this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function()
{

}
fruitObj.prototype.update = function () //檢測螢幕
 {
         var num = 0 ;
         for (var i = 0 ; i < this.num ; i++)
         {
                  if(this.alive[i])num++;
         }
  }
fruitObj.prototype.draw  = function()
{
             for (var i=0 ; i< this.num ; i++)
             {
                        //drawImage
                        //find an ane , grow , fly up
                  if (this.alive)
                  {
                       if(this.fruitType[i] =="blue")
                       {
                              var pic = this.blue
                       }
                       else
                       {
                              var pic = this.fruit
                       }
                        if(this.l[i] <= 10)
                        {
                            this.l[i] += this.spd[i] * deltaTime ; //果實成長
                        }else {
                          this.y[i] -= this.spd[i]*7 * deltaTime ;
                        }
                        //這裡我搞不定
                    ctx2.drawImage(pic , this.x[i]- this.l[i] *0.5 , this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
                      if(this.y[i] < 10 )
                      {
                            this.alive[i] = false;
                      }
                    }
              }
}
fruitObj.prototype.born = function(i)
{
             var aneID =Math.floor (Math.random()* ane.num);    //生出位子
             this.x[i] = ane.x[aneID];
             this.y[i] = canHeight - ane.len[aneID];
             this.l[i] = 0 ;
             this.alive[i] = true ;
             //果實顏色產生
             var ran = Math.random();
             if (ran < 0.3)
             {
             this.fruitType[i] ="blue";
             }
             else
             {
               this.fruitType[i] = "orange";
             }
}

 function fruitMonitor()//判斷機制
 {
        var num = 0 ;
        for (var i = 0 ; i < fruit.num ; i ++)
        {
           if(fruit.alive[i])num++;
        }
        if (num < 15 )
        {
             //semd fruits
             sendFruit();
             return ;
        }
function sendFruit()
{
           for (var i = 0 ; i < fruit.num ; i ++)
           {
                  if(!fruit.alive[i]) //! 表示 False
                  {
                          fruit.born(i); //對應
                          return;
                  }

           }
}


 }
