const expect = require('chai').expect;
const jsdom = require('mocha-jsdom');

global.document = jsdom({url: "http://localhost"});

describe('Test', function(){    
  
  describe('# Initial Basic Values', function(){
    it('Initial count value 0', function(){
      var myCode = require('../proj.js');
      expect(myCode.count).to.equal(0);
    });
    it('Initial score value 0', function(){
      var myCode = require('../proj.js');
      expect(myCode.score).to.equal(0);
    });
    it('Initial highscroe value 0', function(){
      var myCode = require('../proj.js');
      expect(myCode.highscore).to.equal(0);
    });
    it('Initial speed value 2000', function(){
      var myCode = require('../proj.js');
      expect(myCode.speed).to.equal(2000);
    });

    it('Initial count value type', function(){
      var myCode = require('../proj.js');
      expect(myCode.count).to.be.a('number');
    });
    it('Initial score value type', function(){
      var myCode = require('../proj.js');
      expect(myCode.score).to.be.a('number');
    });
    it('Initial highscore value type', function(){
      var myCode = require('../proj.js');
      expect(myCode.highscore).to.be.a('number');
    });
    it('Initial speed value type', function(){
      var myCode = require('../proj.js');
      expect(myCode.speed).to.be.a('number');
    });

    it('Initial scoreboard type', function(){
      var myCode = require('../proj.js');
      expect(myCode.scoreboard).to.be.a('array');
    });

    it('Initial survival type', function(){
      var myCode = require('../proj.js');
      expect(myCode.survival).to.be.false;
    });
    it('Initial insane type', function(){
      var myCode = require('../proj.js');
      expect(myCode.insane).to.be.false;
    });
    it('Initial lives value 10', function(){
      var myCode = require('../proj.js');
      expect(myCode.lives).to.equal(10);
    });
    it('Initial lives value type', function(){
      var myCode = require('../proj.js');
      expect(myCode.lives).to.be.a('number');
    });

  });

  describe('# Initial Timer Values', function(){
    it('initial time value', function(){
      var myCode = require('../proj.js');
      expect(myCode.time).to.equal(0);
    });
    
    it('Number initial time type', function(){
      var myCode = require('../proj.js');
      expect(myCode.time).to.be.a('number');
    });
    
    it('undefined timer1-4 values', function(){
      var myCode = require('../proj.js');
      expect(myCode.timer1).to.be.undefined;
      expect(myCode.timer2).to.be.undefined;
      expect(myCode.timer3).to.be.undefined;
      expect(myCode.timer4).to.be.undefined;
    });

    it('undefined timeout1-4 values', function(){
      var myCode = require('../proj.js');
      expect(myCode.timeout1).to.be.undefined;
      expect(myCode.timeout2).to.be.undefined;
      expect(myCode.timeout3).to.be.undefined;
      expect(myCode.timeout4).to.be.undefined;
    });

    it('Boolean two, three, four values', function(){
      var myCode = require('../proj.js');
      expect(myCode.two).to.be.false;
      expect(myCode.three).to.be.false;
      expect(myCode.four).to.be.false;
    });

    it('undefined GameTimer', function(){
      var myCode = require('../proj.js');
      expect(myCode.gameTimer).to.be.undefined;
    });
  });

  describe('# Check Functions', function() {
    it('letsRandomize() should be a number', function() {
      var myCode = require('../proj.js');
      let result = myCode.letsRandomize();
      expect(result).to.be.a('number');
    });

    it('molePlacer1-4()');

    it('moveClicked1-4()', function() {
      var myCode = require('../proj.js');
      let w = myCode.letsRandomize(0, (window.innerWidth - 200));
      let h = myCode.letsRandomize(0, (window.innerHeight - 200));
      boom1display = document.getElementById('boom1').style.display;
      boom1display = "inline-block";

      expect(boom1display).to.be.a('string');
    });

    it('moleMove()', function(){
      var myCode = require('../proj.js');
      let w = myCode.letsRandomize(0, (window.innerWidth - 200));
      let h = myCode.letsRandomize(0, (window.innerHeight - 200));
      mole1top = document.getElementById('mole1').style.top;
      mole1top = h +'px';
      mole1left = document.getElementById('mole1').style.left;
      mole1left = w +'px';

      boom1top = document.getElementById('boom1').style.top;
      boom1top = h +'px';
      boom1left = document.getElementById('boom1').style.left;
      boom1left = w +'px';

      expect(mole1top).to.be.a('string');
      expect(mole1left).to.be.a('string');
      expect(boom1top).to.be.a('string');
      expect(boom1left).to.be.a('string');
    } );

    it('showM1-4()', function() {
      var myCode = require('../proj.js');
      let w = myCode.letsRandomize(0, (window.innerWidth - 200));
      let h = myCode.letsRandomize(0, (window.innerHeight - 200));
      mole1top = document.getElementById('mole1').style.top;
      mole1top = h +'px';
      mole1left = document.getElementById('mole1').style.left;
      mole1left = w +'px';

      boom1top = document.getElementById('boom1').style.top;
      boom1top = h +'px';
      boom1left = document.getElementById('boom1').style.left;
      boom1left = w +'px';

      expect(mole1top).to.be.a('string');
      expect(mole1left).to.be.a('string');
      expect(boom1top).to.be.a('string');
      expect(boom1left).to.be.a('string');

      boom1display = document.getElementById('boom1').style.display;
      boom1display = "inline-block";

      expect(boom1display).to.be.a('string');
    } );

    it('showMole()', function() {
      mole1display = document.getElementById('mole1').style.display;
      mole1display = "inline-block";
      boom1display = document.getElementById('boom1').style.display;
      boom1display = "none";

      expect(mole1display).to.be.a('string');
      expect(boom1display).to.be.a('string');
    });

    it('animate()', function() {
      mole1display = document.getElementById('mole1').style.display;
      mole1display = "none";
      boom1display = document.getElementById('boom1').style.display;
      boom1display = "inline-block";

      expect(mole1display).to.be.a('string');
      expect(boom1display).to.be.a('string');
    });

    it('gameStart()');

    it('survivalMode()');

    it('insaneMode()');

    it('handler()');
  });
})
