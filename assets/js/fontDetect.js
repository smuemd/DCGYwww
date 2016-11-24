(function() {

  var FontFaceObserver = require('fontfaceobserver');

  // Optimization for Repeat Views
  if( sessionStorage.criticalFoftDataUriFontsLoaded ) {
    console.log('Font Family Roboto (Subset, Regular, Medium & Light) already loaded.');
    document.documentElement.className += " fonts-stage1 fonts-loaded";
    return;
  }

  var robotoSubset = new FontFaceObserver('Roboto-subset');
  var robotoSubsetMedium = new FontFaceObserver('Roboto-subset', {weight: 500});

	Promise.all([robotoSubset.load(), robotoSubsetMedium.load()]).then(function () {
    console.log('Font Roboto (subset) has loaded');
		document.documentElement.className += " fonts-stage1";

    var roboto = new FontFaceObserver('Roboto');
    var robotoLight = new FontFaceObserver('Roboto-Light', {
      weight: 300
    });
    var RobotoMedium = new FontFaceObserver('Roboto-Medium', {
      weight: 500
    });

    Promise.all([roboto.load(), robotoLight.load(), RobotoMedium.load()], 3000).then(function () {
      console.log('Font Family Roboto (Regular, Medium & Light) have loaded');
      document.documentElement.className += " fonts-loaded";
      // Optimization for Repeat Views
			sessionStorage.criticalFoftDataUriFontsLoaded = true;
    }, function() {
      console.log('Font Roboto (Regular, Medium & Light) is not available after waiting 3 seconds.')
    });
  }, function() {
    console.log('Font Roboto (subset) is not available.')
  });
})();
