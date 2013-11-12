window.onload=onLoad;
var canvas;
var ctx;
var width;
var height;
var shiftX;
var shiftY;
var scaleX;
var scaleY;
var xResolution;
var yResolution;


function onLoad(){
	canvas=document.getElementById('graph');
	ctx=canvas.getContext('2d');
	width=canvas.getAttributeNode("width").value;
	height=canvas.getAttributeNode("height").value;
	shiftX=width/2;
	shiftY=height/2;
	scaleX=(width/2)/Math.PI;
	scaleY=-(height/2);
	xResolution=Math.PI/(width/2);
	yResolution=1/(height/2);
	sinChecked=document.getElementById('graph');
	prepareGraph();
	document.getElementById("sin").onclick=drawSelectedGraph;
	document.getElementById("cos").onclick=drawSelectedGraph;
	document.getElementById("tan").onclick=drawSelectedGraph;
}

function drawSelectedGraph(){
	prepareGraph();
	if(document.getElementById("sin").checked)drawSin();
	if(document.getElementById("cos").checked)drawCos();
	if(document.getElementById("tan").checked)drawTan();
}
function drawLine(x1,y1,x2,y2){
	var canvasx1=(x1*scaleX)+shiftX;
	var canvasy1=(y1*scaleY)+shiftY;
	var canvasx2=(x2*scaleX)+shiftX;
	var canvasy2=(y2*scaleY)+shiftY;
	ctx.lineWidth=2;
	ctx.beginPath();
	ctx.moveTo(canvasx1,canvasy1);
	ctx.lineTo(canvasx2,canvasy2);
	ctx.stroke();
}
function prepareGraph(){
	ctx.clearRect(0,0, width, height);
	ctx.strokeStyle='gray';
	drawLine(0,1,0,-1);
	drawLine(-Math.PI, 0, Math.PI, 0);
}
function drawSin(){
	var x1=-Math.PI;
	var y1=Math.sin(x1);
	while(x1<=Math.PI){
		x2=x1+xResolution;
		y2=Math.sin(x2);
		ctx.strokeStyle='red';
		drawLine(x1,y1,x2,y2);
		x1=x2;
		y1=y2;
	}
}

function drawCos(){
	var x1=-Math.PI;
	var y1=Math.cos(x1);
	while(x1<=Math.PI){
		x2=x1+xResolution;
		y2=Math.cos(x2);
		ctx.strokeStyle='blue';
		drawLine(x1,y1,x2,y2);
		x1=x2;
		y1=y2;
	}
}
function drawTan(){
	var x1=-Math.PI;
	var y1=Math.tan(x1);
	while(x1<=Math.PI){
		x2=x1+xResolution;
		y2=Math.tan(x2);
		ctx.strokeStyle='green';
		if(y1<=1 && y1>=-1&& y2<=1 && y2>=-1){
			drawLine(x1,y1,x2,y2);
		} 
		x1=x2;
		y1=y2;
	}
}