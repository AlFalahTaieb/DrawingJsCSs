const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing=false;
let lastX=0;
let lasY=0;

function draw(e){
	// console.log(e);
	if(!isDrawing) return;
	ctx.beginPath();
	ctx.moveTo(lastX,lasY);
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	[lastX,lastY]=[e.offsetX,e.offsetY];
}


canvas.addEventListener('mousemove',()=>{
	isDrawing=true;
	[lastX,lasY]=[e.offsetX,e.offsetY];
}
});
canvas.addEventListener('mousedown',()=>isDrawing=true);
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);