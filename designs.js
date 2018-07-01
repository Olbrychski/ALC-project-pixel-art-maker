
var height, width, color;

//when size is submitted by the user ,call makeGrid()
$('#sizePicker').submit(function (event) {
   event.preventDefault();
   height = $('#inputHeight').val();
   width = $('#inputWeight').val();
   makeGrid(height , width);
    

});

 function makeGrid(x , y){
 	$('tr').remove(); //removes grid on clicking submit 
   //forms grid 
 	for (var i = 1; i<=x; i++){
 		$('#pixelCanvas').append('<tr id=row' + i + '></tr');
        for (var j = 1; j <= y; j++) {
           $('#row'+ i).append('<td></td>'); 
        	$('td').attr("class" ,'cells')
        	
        }
 	}
      //inputs color on clicking cell
 	$('.cells').click(function(event) {
		var paint = $('#colorPicker').val();
		$(event.target).css('background-color' , paint);
	});

 
 }






