//Functions

function makeLineThumb() {
	var	lineThumbs = Ti.UI.createView({
			top: 0,
			left: 0,
			height: 138,
			width:'auto'
	});
	
	return lineThumbs;
};

function makeImgThumb() {
	return Ti.UI.createImageView({
		url: arguments[0],
		height: 128
	});
};

function makeTitleThumb(title) {
	var viewHead = Ti.UI.createView({
		width: 'auto',
		height: 20,
		backgroundColor: '#262426',
		top: 5,
		left: 0,
		opacity: 0.7
	}), labelTitleHead = Ti.UI.createLabel({
		text: title,
		height: 'auto',
		width: 'auto',
		color: '#96720C',
		font: {fontSize: 14},
		textAlign: 'left'
	});
	
	viewHead.add(labelTitleHead);
	
	return viewHead;
};
