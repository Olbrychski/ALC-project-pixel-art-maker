
$('document').ready(function() {
$('#sizePicker').submit(function makeGrid(grid) {
	$('table tr').remove(); //prevents forming another table once you click submit
	var rows = $('#inputHeight').val();
	var cols = $('#inputWidth').val();

    //forms the grid
	for(var i = 1; i<=rows ;i++) {
		$('table').append('<tr></tr>');
		for(j = 1; j<=cols ; j++) {
			$("tr:last").append('<td></td>');
			$('td').attr("class" , 'cells');

		}
	}
	grid.preventDefault(); //prevent grid from disappearing
    
    //inputs color on clicking cell
	$('.cells').click(function(event) {
		var paint = $('#colorPicker').val();
		$(event.target).css('background-color' , paint);
	});

 });
});

 






