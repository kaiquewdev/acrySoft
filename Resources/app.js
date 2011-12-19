//Main Window
//Default background color: #412447
//Default header color: #262426
Titanium.UI.setBackgroundColor('#412447');
Ti.include('functions.js');

var win = Ti.UI.createWindow({
    title:  'AcrySof',
    font:	{fontSize: 20},
    url:    'main.js',
    backgroundColor: '#412447',
    translucent: false
});

var head = makeDefaultHeader('AcrySof');

//Topo
win.add(head);
win.open();
