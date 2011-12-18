//Main Window
//Default background color: #412447
//Default header color: #262426
var header = Ti.UI.createView({
	backgroundColor:'#262426',
	width: 'auto',
	height: 65,
	top:0,
	left:0
});

var headerTitle = Ti.UI.createLabel({
	text: 'AcrySof',
	width: 'auto',
	height: 'auto',
	color: '#96720C',
	textAlign: 'center',
	font: {fontSize: 20}
});

header.add(headerTitle);

var win = Ti.UI.createWindow({
    title:  'AcrySof',
    font:	{fontSize: 20},
    url:    'main.js',
    backgroundColor: '#412447',
    translucent: false
});

//Topo
win.add(header);
win.open();
