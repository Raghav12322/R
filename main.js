canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var last_position_x,last_position_y;
color = "black";
width_of_line=2;
radius=2;


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{

    color=document.getElementById("color").value;

    width_of_line=document.getElementById("width").value;

    radius=document.getElementById("radius").value;

    mouseEvent="mouseDown";

}


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
   current_position_mouse_X = e.clientX-canvas.offsetLeft;
   current_position_mouse_Y = e.clientY-canvas.offsetTop;

   if(mouseEvent=="mouseDown")
   {
    
    console.log("last position of XandY cordinate = ");
    console.log("X = " + last_position_x + "Y = " + last_position_y);

   ctx.moveTo(last_position_x,last_position_y) ;

   console.log("current position of X and Y cordinates = ");
   console.log("X = " + current_position_mouse_X + "Y = " + current_position_mouse_Y);
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width_of_line;
   ctx.arc(current_position_mouse_X,current_position_mouse_Y,radius,0,2*Math.PI);
   ctx.stroke();
   }
   last_position_x = current_position_mouse_X;
   last_position_y = current_position_mouse_Y; 
}
