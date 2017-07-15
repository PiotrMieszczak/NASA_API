import {ctx} from './canvas_setup.js';

const colorArray = [
    "#78BF82",
    "#A4D17C",
    "#CFD96C",
    "#EBD464",
    "#FFD970",
];
const colorStrokeArray = [
    "#E7E9E7",
    "#90057E",
    "#D0D0DA",
    "#FFD970",
    "#F2EDF1"
];

const maxRadius = 5;
const minRadius = 2;
let mouse={
    x: undefined,
    y: undefined,
}
window.addEventListener('mousemove', (e)=>{ //getting mouse coordinates
    mouse.x = e.x;
    mouse.y = e.y
})

class Star{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.dx = dx; //velocity horizonal
        this.y = y;
        this.dy = dy //velocity vertical
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    }
    draw(){ //draw 'star' on canvas
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fillStyle= this.color;
        ctx.fill();
        ctx.strokeStyle = this.styleColor;
        ctx.stroke();
    }
    move(){ //update x/y possition on new framerate 

        //bouce from the edges
        if(this.x > window.innerWidth || this.x < 0){
            this.dx = -this.dx
        }
        this.x += this.dx;
        if(this.y > window.innerHeight || this.y < 0){
            this.dx = -this.dx
        }
        this.y += this.dy/2;
        //interactivity with mouse - every particle in distance of 30px gets bigger
         if(mouse.x - this.x < 50 && mouse.x - this.x > -50
         && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius += 0.5;}
            }else if(this.radius > minRadius){
            this.radius -= 0.5;
        }
        this.draw()
    }
}
function CreateStars(number){
    let StarArray = [];
    for(let i =0; i < number;i++){
        let radius = Math.random()*2;
        let x = Math.random()*(window.innerWidth-radius*2)+radius;
        let y = Math.random()*(window.innerHeight-radius*2)+radius;
        let dx = (Math.random()-0.5)*0.9;
        let dy = (Math.random()-0.5)*0.9;
        StarArray.push(new Star(x,y,dx,dy,radius))
    }
    return StarArray; 
}   

let stars = CreateStars(1500);
export {stars};



