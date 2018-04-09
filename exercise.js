var init = function(){

    // setup canvas
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    //a canvas is a place where you can draw to the screen 

    // generate 10 random points
    var length = 10;
    var points = [];
    for(var i=0; i<length; i++){
        var x = random();
        //he wrote a function random 
        var y = random();   
        circle(context,x,y,'blue');
        points.push({x:x,y:y});
    }

    // calculate centroid 
    var centroid = calculateCentroid(points);
    circle(context, centroid.x, centroid.y, 'red');
    var coordinates = 'x:' + centroid.x + ', y:' + centroid.y;
    document.getElementById('centroid').innerHTML = coordinates;
};


var calculateCentroid = function(points){
    //wil recieve an array of points 
    var sumX = 0; 
    var sumY = 0; 
    points.forEach(function(element){
        sumX += element.x;
        sumY += element.y; 
    }); 
    var CX = sumX/points.length;
    var CY = sumY/points.length;
    return {x: Math.floor(CX), y:Math.floor(CY)};
    //why can we just type x: here  
    // return centroid with the following format
    // return {x:10, y:30};  
};
/*
unsupervised learning means no training 

*/



function circle(context,x,y,fillStyle) {
    context.fillStyle = fillStyle;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
}

function random(){
    var value = Math.random()*650;
    return Math.floor(value);
}

var exercise = {};
exercise.calculateCentroid = calculateCentroid;