(function() {
  var FontFaceObserver = require('fontfaceobserver');

  // Optimization for Repeat Views
  if(sessionStorage.foutFontsLoaded) {
    console.log('Font Family Roboto (regular meduum and light) already loaded => returning');
  	document.documentElement.className += " fonts-loaded";
  	return;
  }

  var fontA = new FontFaceObserver('Roboto');
  var fontB = new FontFaceObserver('Roboto-Light');
  var fontC = new FontFaceObserver('Roboto-Medium');

  Promise.all([fontA.load(), fontB.load(), fontC.load()]).then(function () {
    console.log('Font Family Roboto (regular meduum and light) have loaded');
    document.documentElement.className += " fonts-loaded";
    //Optimization for Repeat Views
    sessionStorage.foutFontsLoaded = true;
  });
})();
