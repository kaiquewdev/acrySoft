//Action
var win = Ti.UI.currentWindow;

function showContent(cText) {
	var row = Ti.UI.createTableViewRow(),
		view = Ti.UI.createView({width: 'auto', height: 'auto'}),
		label = Ti.UI.createLabel({
			text: cText,
			width: 'auto',
			height: 'auto',
			textAlign: 'left',
			font: {fontSize:16}
		});
		
		view.add(label);
		row.add(view);
		
		if(typeof cText !== 'undefined') {
			return row;
		}
};

var table = Ti.UI.createTableView(),
	cT = new showContent('Title: ' + win.imgSet.title),
	cU = new showContent('URL: ' + win.imgSet.url);
	
table.setData([cT, cU]);
win.add(table);
win.open();
