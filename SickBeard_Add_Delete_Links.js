//
//	Adds a column with a 'Delete' link to the end of each row
//  on the main show grid on the front page of SickBeard.
//  
//	By: Chris Pettit (2011)
//	 	chris.pettit@zpdev.com
//


$("#showListTable tbody tr").each(function(){
var row = $(this);
	
	//Gets the link to the show and parses for show id and title.
	var lnk = $("td:nth(1) a", row);
	var id = lnk.attr('href').replace('/home/displayShow?show=','');
	var title = lnk.html();

	
	var c = $("<td />");
	var l = $("<a />");
	c.class = 'delcell';
	l.attr('href','/home/deleteShow?show=' + id);
	l.html('Delete');
	l.click(function(){
		return confirm('Are you sure you want to delete this show: \n '+ title +'?');
	});
	c.append(l);
	row.append(c);
});

//Make modifications to the Header and Footer of the table
$('#showListTable thead tr').append($('<th>Delete</th>'));
$('#showListTable tfoot th:nth(1)').attr('colspan','7');
