//main.js
Ti.include('functions.js');

var win = Ti.UI.currentWindow;

var mainFrame = Ti.UI.createView({
	top:60,
	left: 0,
	width: 'auto',
	height: 'auto'
});
win.add(mainFrame);

//Make a firts thumb
var	thumbTitle1 = new makeTitleThumb('Catarata'),	
	thumbImg1 = new makeImgThumb('img/model-1.jpg', -100),
	line1 = new makeLineThumb();
	
line1.addEventListener('click', function() {
	win.close();
	
	var catarata = Ti.UI.createWindow({
		url: 'simulations/catarata.js',
		title: 'Catarata'
	});
	
	catarata.open();
});


line1.add(thumbImg1);
line1.add(thumbTitle1);
mainFrame.add(line1);
