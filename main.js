canvas= document.getElementById("My_canvas");
ctx = canvas.getContext("2d");
marsimgsarray=["img1.jpg","img2.jpg","img3.jpg","mars.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);

rover_width = 100;
rover_height = 90;

background_image=marsimgsarray[randomnumber];
console.log("background image =" + background_image)
rover_image = "rover.png";
roverx = 10;
rovery = 10;
function add(){
    background_img=new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;
    rover_img=new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
    
}
function uploadBackground(){
 ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}
function uploadRover(){
 ctx.drawImage(rover_img,roverx,rovery,rover_width,rover_height);
 
}
window.addEventListener("keydown", my_keyDown);
function my_keyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == 38){
        up();
        console.log("up  ");

    }
    if (keyPressed == 40){
        down();
        console.log("down ");

    }if (keyPressed == 37){
        left();
        console.log("left ");

    }if (keyPressed == 39){
        right();
        console.log("right ");

    }
}
function up(){
    if(rovery >=0){
      rovery = rovery-10;
       console.log("when up arrow is pressed, X=" + roverx +" Y=" + rovery);
       uploadBackground();
       uploadRover();
    }

}
function down(){
    if(rovery <=500){
      rovery = rovery+10;
       console.log("when down arrow is pressed, X=" + roverx +" Y=" + rovery);
       uploadBackground();
       uploadRover();
    }
    
}function left(){
    if(roverx >=0){
      roverx = roverx-10;
       console.log("when left arrow is pressed, X=" + roverx +" Y=" + rovery);
       uploadBackground();
       uploadRover();
    }
    
}function right(){
    if(roverx <=700){
      roverx = roverx+10;
       console.log("when right arrow is pressed, X=" + roverx +" Y=" + rovery);
       uploadBackground();
       uploadRover();
    }
    
}






