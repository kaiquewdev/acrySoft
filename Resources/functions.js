//Functions

//Create a view, as a line
function makeLineThumb() {
	var	lineThumbs = Ti.UI.createView({
			top: 0,
			left: 0,
			height: 128,
			width:'auto'
	});
	
	return lineThumbs;
};

//Invoke the image in a view
function makeImgThumb() {
	return Ti.UI.createImageView({
		url: arguments[0], 
		top: arguments[1]
	});
};

//Create a title in the thumbnail
function makeTitleThumb(title) {
	var viewHead = Ti.UI.createView({
		width: 'auto',
		height: 20,
		backgroundColor: '#262426',
		top: 0,
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

//Create a default header for application
function makeDefaultHeader(title) {
	var header = Ti.UI.createView({
		backgroundColor:'#262426',
		width: 'auto',
		height: 65,
		top:0,
		left:0
	}), headerTitle = Ti.UI.createLabel({
		text: title,
		width: 'auto',
		height: 'auto',
		color: '#96720C',
		textAlign: 'center',
		font: {fontSize: 20}
	});
	
	if(typeof title !== 'undefined') {
		header.add(headerTitle);
		
		return header;
	}

};
