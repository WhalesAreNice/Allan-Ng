function setup(){
    createCanvas(800,800);
    fill('#f9dd90');
    ellipse(300, 400, 560, 700);
    quad(325, 380, 275, 380, 240, 530, 360, 530);
    
    fill('white');
    ellipse(175, 350, 150, 75);
    ellipse(425, 350, 150, 75);
    fill('black');
    ellipse(175,350, 75, 75);
    ellipse(425, 350, 75, 75);
    fill('#f99884');
    arc(300, 610, 230, 110, 0, PI);
    arc(300, 610, 230, 90, PI, TWO_PI);
    fill("white");
    arc(300, 610, 210, 50, 0, TWO_PI);
    line(195, 610, 405, 610);
    
    
}