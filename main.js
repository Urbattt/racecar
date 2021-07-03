canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var roverheight=100 ;
var roverwidth=100;
var roverx=10;
var rovery=15;
var roverimage="car.png";

var roverheight2=100 ;
var roverwidth2=100;
var roverx2=10;
var rovery2=25;
var roverimage2="car2.jpg";

var backgroundimage="bakground.jpg";
// var randomnumber=Math.floor(Math.random()*5);
// var backgroundimage=images[randomnumber];
// console.log("random number is:"+randomnumber);

function add() {
    console.log("insideadd");
bg=new Image();//this will define the new variable bg of image type// 
bg.onLoad=uploadbg;//this will set a function on loading this variable//
bg.src=backgroundimage;
rover=new Image();//this will define the new variable bg of image type// 
rover.onLoad=uploadrover;//this will set a function on loading this variable//
rover.src=roverimage;

rover2=new Image();//this will define the new variable bg of image type// 
rover2.onLoad=uploadrover2;//this will set a function on loading this variable//
rover2.src=roverimage2;

}


function uploadbg(){
ctx.drawImage(bg,0,0,canvas.width,canvas.height)

}
function uploadrover(){
    ctx.drawImage(rover,roverx,rovery,roverwidth,roverheight);//this will draw the image on the canvas with position x and y and width and height//

    }

    function uploadrover2(){
        ctx.drawImage(rover2,roverx2,rovery2,roverwidth2,roverheight2);//this will draw the image on the canvas with position x and y and width and height//
    
        }
    
    window.addEventListener("keydown",mykeydown)
    function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
//these are ASCII code of the keyboard keys up down left right//
if(keypressed==38){
 console.log("up");   
 up();

}
if(keypressed==40){
 console.log("down");   
 down();
 
}
if(keypressed==37){
    console.log("left");   
    left();
    
   }
   if(keypressed==39){
    console.log("right");   
    right();
    
   }



   if(keypressed==65){
    console.log("a left");   
    aleft();
   
   }
   if(keypressed==68){
    console.log("d right");   
    dright();
    
   }
   if(keypressed==83){
       console.log("s down");   
       sdown();
       
      }
      if(keypressed==87){
       console.log("w up");   
       wup();
       
      }

    }

function up(){
if(rovery>=0){
rovery=rovery-10;//up direction is negative moving towards the top of the canvas where height is 0//
uploadbg();
uploadrover();
}

}

function down(){
    if(rovery<=450){
    rovery=rovery+10;//down direction is positive moving towards the end of the canvas where height is 450//
    uploadbg();
    uploadrover();
    }
    
    }

    function left(){
        if(roverx>=0){
        roverx=roverx-10;//left direction is negative it means to move begining of the canvas where width is 0//
        uploadbg();
        uploadrover();
        }
        
        }

        function right(){
            if(roverx<=450){
            roverx=roverx+10;//right direction is positive it means moving towards the end of the canvas which width 450//
            uploadbg();
            uploadrover();
            }
            
            }





            function wup(){
                if(rovery2>=0){
                rovery2=rovery2-10;//up direction is negative moving towards the top of the canvas where height is 0//
                uploadbg();
                uploadrover2();
                }
                
                }
                
                function sdown(){
                    if(rovery2<=450){
                    rovery2=rovery2+10;//down direction is positive moving towards the end of the canvas where height is 450//
                    uploadbg();
                    uploadrover2();
                    }
                    
                    }
                
                    function aleft(){
                        if(roverx2>=0){
                        roverx2=roverx2-10;//left direction is negative it means to move begining of the canvas where width is 0//
                        uploadbg();
                        uploadrover2();
                        }
                        
                        }
                
                        function dright(){
                            if(roverx2<=450){
                            roverx2=roverx2+10;//right direction is positive it means moving towards the end of the canvas which width 450//
                            uploadbg();
                            uploadrover2();
                            }
                            
                            }
