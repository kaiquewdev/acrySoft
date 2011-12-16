function catalogItem(cTitle, cImgURL, cPath) {
		cPath = cPath || 'action.js';
		
	var itemViewSet	= {borderRadius: 10, backgroundColor: 'white', width: 'auto', height: 80},
		itemView	= Ti.UI.createView(itemViewSet),
		itemTitle	= Ti.UI.createTableViewSection({headerTitle: cTitle}),
		itemRow		= Ti.UI.createTableViewRow({path: cPath}),
		itemImg		= Ti.UI.createImageView({url: cImgURL});
		
		itemRow.add(itemView);
		itemTitle.add(itemRow);
		itemView.add(itemImg);
		
		itemRow.addEventListener('click', function(e) {
			var win = Ti.UI.createWindow({
				url: e.rowData.path,
				title: cTitle
			});
			
			var imgSet = {
				title: cTitle,
				url: cImgURL
			};
			
			win.imgSet = imgSet;
			Ti.UI.currentTab.open(win);
		});
		
		if(typeof cTitle !== 'undefined' && typeof cImgURL !== 'undefined') {
			return itemTitle;	
		}
};

//Main window
var win = Ti.UI.createWindow(),
	table = Ti.UI.createTableView(),
	nemo = new catalogItem('Nemo', 'img/nemo.jpg', 'action.js'),
	dori = new catalogItem('Dori', 'img/nemo.jpg');

//Set table
table.setData([nemo, dori]);

win.add(table);
win.open();
