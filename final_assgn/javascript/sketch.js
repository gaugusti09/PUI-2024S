let img; //variable to hold image, my default is this little robot fella

function preload() {
  img = loadImage('final_assgn/assets/lil_guy.jpg'); //load image before sketch runs
}

// create a canvas in order to sketch the color layers
function setup() {
  pixelDensity(1);
  createCanvas(500, 500);
  
  //set up three color layers -- these are my personal favorite riso starter inks! they match roughly to CMYK 
  let cornflower = new Riso('cornflower');
  let sunflower = new Riso('sunflower');
  let fluopink = new Riso('fluorescentpink')

  background(255);
  clearRiso();
  
  //separate out color CMYK channels 
  let cs = extractCMYKChannel(img, "cyan");
  let ms = extractCMYKChannel(img, "magenta");
  let ys = extractCMYKChannel(img, "yellow");
  let bs = extractCMYKChannel(img, "black");

  cornflower.imageMode(CENTER);
  sunflower.imageMode(CENTER);
  fluopink.imageMode(CENTER);

  //place channels on different layers
  sunflower.image(ys, width / 2 -5, height / 2, img.width, img.height);
  cornflower.image(bs, width / 2 +1, height / 2, img.width, img.height);
  cornflower.image(cs, width / 2 +1, height / 2, img.width, img.height);
  fluopink.image(ms, width / 2, height / 2 -6, img.width, img.height);

  
  // YIPPEEE ~~~ <3 
  // need to add controls and an external interface but isnt that #neat :" -)
  drawRiso();
}


function draw() {

  
}
// to figure out:
// let users upload an image
// turning on/off ink colors