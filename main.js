function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}

function setup(){
canvas=createCanvas(200,200);
canvas.center();
background("lightblue");
canvas.mouseReleased(classify_Canvas);
synt=window.SpeechSynthesis;
}

function draw(){
    stroke("darkblue");
    strokeWeight(10);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clear_me(){
    background("lightblue");
}

function classify_Canvas(){
classifier.classify(canvas, gotresults);
}

function gotresults(error, results){
if (error){
    console.log(error);
}
//console.log(results);
name1=results[0].label;
document.getElementById("answer").innerHTML= "Sketch is :"+ name1;
document.getElementById("confindent").innerHTML= "Confidence is :"+ (results[0].confidence*100).toFixed(2) +" % ";
speakthis=new SpeechSynthesisUtterance(name1);
console.log(name1);
synt.speak(speakthis);
}
