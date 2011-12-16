function catalogItem(cTitle, cImgURL) {
	var itemViewSet	= {borderRadius: 10, backgroundColor: 'white', width: 'auto', height: 120},
		itemView	= Ti.UI.createView(itemViewSet),
		itemTitle	= Titanium.UI.createTableViewSection({headerTitle: cTitle}),
		itemRow		= Titanium.UI.createTableViewRow({width:'100%'}),
		itemImg	= Ti.UI.createImageView({url: cImgURL});
		
		itemRow.add(itemView);
		itemTitle.add(itemRow);
		itemView.add(itemImg);
		
		if (typeof cTitle !== 'undefined' && typeof cImgURL !== 'undefined') {
			return itemTitle;	
		}
}

//Main window
var win = Ti.UI.createWindow(),
	table = Titanium.UI.createTableView(),
	nemo = new catalogItem('Nemo', 'img/nemo.jpg');

//Set table
table.setData([nemo]);

win.add(table);
win.open();
