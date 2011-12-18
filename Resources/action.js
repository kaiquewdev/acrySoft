//Action
function makeItem(vURL) {
	var view, imgv;
	
	view = Ti.UI.createView({
		borderRadius: 0,
		width: 'auto',
		height: 'auto'
	});
	
	imgv = Ti.UI.createImageView({url: vURL});
	
	view.add(imgv);
	
	if(typeof vURL !== 'undefined') {
		return view;	
	}
}; 

var win = Ti.UI.currentWindow,
	visualization = new makeItem(win.imgSet.url);

win.add(visualization);
win.open();
