//Canavas setup
const canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');


class Star{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.dx = dx; //velocity horizonal
        
        this.y = y;
        this.dy = dy //velocity vertical

        this.radius = radius;
    }
    draw(){ //draw 'star' on canvas
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.stroke();
    }
    move(){ //update x/y possition on new framerate 
        this.x += this.dx;
        this.y += this.dy;
        this.draw()
    }
}

function CreateStars(){
    let StarArray = []

    for(let i =0; i < 100;i++){
        let radius = Math.random()*10+1;

        let x = (Math.random()+ radius)*window.innerWidth;
        let y = (Math.random()+ radius)*window.innerHeight;
        let dx = Math.random()
        let dy = Math.random()
        StarArray.push(new Star(x,y,dx,dy,radius))
    }

    console.log(StarArray);
}

CreateStars();