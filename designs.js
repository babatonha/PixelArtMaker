//select color input

//select size input

var height;
var width;
var background;

//When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
	event.preventDefault();
	height = $('#inputHeight').val();//
	width = $('#inputWidth').val();
	makeGrid(height, width);
})

function makeGrid (x, y){ //parameters to hold height and width
	$('tr').remove(); //to remove previous grid created
	for (var i = 1; i <= x; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for(var j = 1; j <=y; j++){
			$('#table' + i).append('<td></td>');
		}
	}
	//to add cell color
	$('td').click(function addColor() {
		background = $('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		} else {
			$(this).attr('style', 'background-color:' + background);
		}
	})
}








/*to make the document ready
$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid){
		//to make the table clear by clicking submit
		//$('table tr').remove();
		// variables for with and height of the canvas
		var rows = $('#inputHeight').val();
		var cols = $('#inputWidth').val();

		// to make input number of rows
			for (var i = 1; i <= rows; i++) {
				$('table').append('<tr></tr>');
				  //to make input of columns
				  for (var j = 1; j <= cols; j++) {
				  	$('tr:last').append('<td></td>'); 
				  	//to add class for each td
				  	$('td').attr("class". 'cells');
				   }
			}
			grid.preventDefault();

			$('.cells').click(function(event){
				var paint = $('#colorPicker').val();
				$(event.target).css('background-color', paint);
			});
	});
});
*/






/*
// Select color input
var colorInput = $('#colorPicker').val();
// Select size input
var height = $('inputHeight').val();
var width  = $('inputWeight').val();

// When size is submitted by the user, call makeGrid()

function makeGrid(){
	
			$('.gridForm').submit(function(e) {
				e.preventDefault();
				$('#pixels').html('');
				
				x=$('#gridHeight').val(); // value of height
				y=$('#gridWidth').val();  // value of width

				for(i=0; x>i;x--){
					$('#pixels').append('<tr><td></td></tr>');
				}

				for(j=1; y>j ;y--){
					$('tr').append('<td></td>');
				} 	
			});


	
}
	
makeGrid();

// Your code goes here!

//to add color to a specific grid
  $('table').on('click', "td", function() {
  $( this ).toggleClass("color");
});


*/