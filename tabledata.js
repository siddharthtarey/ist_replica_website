// this function dynamically creates table for populating the songs from the data source
function populateTable(tableData){
	
	var songs = new Array();
	// get the songs and populate it an array
	// each row in the array will have three songs
	for(var i=0,len=tableData.length;i<len;i=i+3){
		
		// if three songs are retrieved
		if(tableData[i+1] && tableData[i+2]){
			
			songs.push([tableData[i],tableData[i+1],tableData[i+2]]);
		}
		// if two or one song are retrieved from the data source.
		else{
			
			if(tableData[i+2]){
				songs.push([tableData[i],tableData[i+1],""]);
			}
			else{
				
				songs.push([tableData[i],"",""]);
				
			}
			
		}
		
	}
	// create a table for HTML
	var table = document.createElement("TABLE");
    // insert from bottom to up
	var row = table.insertRow(-1);
	var headerCell = document.createElement("th");
	headerCell.setAttribute('colspan',3);
	
	var songList = document.createTextNode('Song List');
	headerCell.appendChild(songList);
	row.appendChild(headerCell);
	
	// retrieve all the data and populate in the table.
	for (var i = 0,len=songs.length; i <len; i++) {
		var rowData = table.insertRow(-1);
		for(var j=0,len1 = songs[i].length; j<len1; j++){
			
			var cell = rowData.insertCell(-1);
			var songName = document.createTextNode(songs[i][j]);
			cell.appendChild(songName);
		}
		
	}
	
	return table;
	
}