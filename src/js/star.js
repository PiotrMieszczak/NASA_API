import {ctx} from './canvas_setup.js';

var colorArray = [
    "#78BF82",
    "#A4D17C",
    "#CFD96C",
    "#EBD464",
    "#FFD970",
];

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
    }
    move(){ //update x/y possition on new framerate 

        if(this.x > window.innerWidth || this.x < 0){
            this.dx = -this.dx
        }
        
        this.x += this.dx;
        if(this.y > window.innerHeight || this.y < 0){
            this.dx = -this.dx
        }
        this.y += this.dy/2;
        
        this.draw()
    }
}
function CreateStars(number){
    let StarArray = [];
    
    for(let i =0; i < number;i++){
        let radius = Math.random()*10+1;

        let x = Math.random()*(window.innerWidth-radius*2)+radius;
        let y = Math.random()*(window.innerHeight-radius*2)+radius;
        let dx = (Math.random()-0.5)*0.8;
        let dy = (Math.random()-0.5)*0.8;
        
        StarArray.push(new Star(x,y,dx,dy,radius))
    }

    return StarArray;
    
}   

let stars = CreateStars(250);

export {stars};