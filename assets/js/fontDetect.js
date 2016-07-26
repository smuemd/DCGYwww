(function() {
  var FontFaceObserver = require('fontfaceobserver');

  // Optimization for Repeat Views
  if(sessionStorage.foutFontsLoaded) {
    console.log('Font Family Roboto (Regular, Medium & Light) already loaded => returning');
  	document.documentElement.className += " fonts-loaded";
  	return;
  }

  var roboto = new FontFaceObserver('Roboto');
  var robotoLight = new FontFaceObserver('Roboto', { weight: 300 });
  var RobotoMedium = new FontFaceObserver('Roboto', { weight: 500 });

  Promise.all([
    roboto.load(),
    robotoLight.load(),
    RobotoMedium.load()
  ], 3000).then(function () {
    console.log('Font Family Roboto (Regular, Medium & Light) have loaded');
    document.documentElement.className += " fonts-loaded";
    //Optimization for Repeat Views
    sessionStorage.foutFontsLoaded = true;
  }, function () {
    console.log('Font Roboto (Regular, Medium & Light) is not available after waiting 3 seconds');
  });
})();
