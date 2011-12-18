//main.js
function makeThumb(top, left, bottom, right, imgUrl) {
	var thumbFrame = Ti.UI.createView({
		borderRadius: 2,
		width: 128,
		height: 128,
		backgroundColor: '#262426',
		borderWidth: 1,
		borderColor: '#96720C'		
	});
	
	if (typeof top !== 'undefined') {
		thumbFrame.top = top;
	} if (typeof left !== 'undefined') {
		thumbFrame.left = left;
	} if (typeof right !== 'undefined') {
		thumbFrame.right = right;
	} if (typeof bottom !== 'undefined') {
		thumbFrame.bottom = bottom;
	}
	
	return thumbFrame;
};

function makeLineThumb() {
	var	args = arguments, 
		lineThumbs = Ti.UI.createView({
			top: 0,
			left: 0,
			height: 138,
			width:'auto',
			background: '#000'
	});
	
	if(args.length > 0) {
		for(var i=0; i < args.length; i++) {
			lineThumbs.add(args[i]);
		}
	}
	
	return lineThumbs;
};

var win = Ti.UI.currentWindow;

var mainFrame = Ti.UI.createView({
	top:65,
	left: 0,
	width: 'auto',
	height: 'auto'
});
win.add(mainFrame);

var	thumb1 = makeThumb(top=5, left=20),
	line1 = makeLineThumb(thumb1);

mainFrame.add(line1);
