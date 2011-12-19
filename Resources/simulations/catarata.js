//Catarata
Titanium.UI.setBackgroundColor('#412447');
Ti.include('../functions.js');

var catarata = Ti.UI.currentWindow;
catarata.title = 'AcrySof';

var head = makeDefaultHeader('Catarata'),
	mainFrame = Ti.UI.createView({
	top:60,
	left: 0,
	width: 'auto',
	height: 'auto',
});
catarata.add(head);

var beforeFrameImg = Ti.UI.createView({
	width:'auto',
	height:'auto',
	opacity: 1.0,
	visible: true
}), beforeImg = Ti.UI.createImageView({url: '../img/model-before-1.jpg', width: 520, height: 380});

beforeFrameImg.add(beforeImg);
mainFrame.add(beforeFrameImg);
beforeFrameImg.show();

var afterFrameImg = Ti.UI.createView({
	width:'auto',
	height:'auto',
	opacity: 0.0,
	visible: false
}), afterImg = Ti.UI.createImageView({url: '../img/model-1.jpg', width: 520, height: 380});

afterFrameImg.add(afterImg);
mainFrame.add(afterFrameImg);
afterFrameImg.hide();

var runFrameButton = Ti.UI.createView({
	width: 'auto',
	height: 60,
	backgroundColor: '#000',
	bottom:0,
	left:0,
	opacity: 0.7,
	zIndex: 100
}), runButton = Titanium.UI.createButton({title:'Visualizar sem Catarata', top: 12});

runFrameButton.add(runButton);
mainFrame.add(runFrameButton);

var crossFade = runButton.addEventListener('click', function() {
	beforeFrameImg.animate({opacity: 0.0, duration: 1500}, function() {
		afterFrameImg.show();
		afterFrameImg.animate({opacity: 1.0, duration: 2000}, function() {
			beforeFrameImg.hide();
			runButton.removeEventListener('click', crossFade);
		});
	});
});

catarata.add(mainFrame);
catarata.open();
