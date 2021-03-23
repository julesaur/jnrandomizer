//wish you were here with me

let owl = [{
    name: "owlena",
    color: "pink"
    }, {
    name: "seer",
    color: "violet"
    }, {
    name: "hammy",
    color: "cream"
    }, {
    name: "waves",
    color: "turquoise"
    }, {
    name: "moon",
    color: "opal"
    }, {
    name: "gem",
    color: "sea green"
    }];

    let randomIndex;
    let animating = false;
    let avo = [];
    let imageCounter = 0;

    function preload(){

      for (let i = 0; i <=9; i++){
        avo[i] = loadImage(`assets/avo_${i}.jpg`);
      }
    }

    function setup() {
      createCanvas(600, 600);
      background(220);
      textSize(32);
      imageMode(CENTER);
      frameRate(8);

      text("click to randomize", 50, 50);
      console.log(avo);

     }

    function draw() {
      if(animating == true){
        clear();
        image(avo[imageCounter], width/2, height/2);

        if (imageCounter < avo.length -1) {
        imageCounter++;
        console.log(imageCounter);
      } else {
        imageCounter = 0;
      }
      }
    }


    function randomizer(){
      animating = false;
        if (owl[0]){

        // background(random(212, 180, 209));
        clear();
        randomIndex = int(random(owl.length));
        image(random(avo), width/2, height/2);
        text(`owl[randomIndex].name}'s theme color is ${owl[randomIndex].color}`, width/2, height - 100);
        owl.splice(randomIndex, 1);
      } else {
        background(random(212, 180, 209));
        text("nothing left!", 50, 50)
      }
    }

    function mousePressed() {
      animating = true;
      setTimeout(randomizer, 2000);


    }
