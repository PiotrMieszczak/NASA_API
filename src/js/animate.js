import {ctx} from './canvas_setup.js';
import {stars} from './star.js';

console.log(stars);

function animate() { //animation loop
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); //clean up canvas on every new frame

     for(var i=0; i < stars.length; i++){
         stars[i].move();
    }
}

// animate();

export {animate};