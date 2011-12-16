//App

//Group of tabs
var tabGroup = Ti.UI.createTabGroup();

//Main Window
var main = Ti.UI.createWindow({
    title:  'AcrySof',
    font:	{fontSize: 20},
    url:    'main.js',
    translucent: false
});

//Tab for app
var mainTab = Ti.UI.createTab({
    title:  'AcrySof',
    window: main
});

//Add's
tabGroup.addTab(mainTab);
tabGroup.open();
