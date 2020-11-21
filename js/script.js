$(document).ready(function(){
    var x = "x";
    var o = "o";
    var turns = 0;
    // Cell variables
    var cell1 = $('#cell1');
    var cell2 = $('#cell2');
    var cell3 = $('#cell3');
    var cell4 = $('#cell4');
    var cell5 = $('#cell5');
    var cell6 = $('#cell6');
    var cell7 = $('#cell7');
    var cell8 = $('#cell8');
    var cell9 = $('#cell9');

    $('#board li').on('click', function(){
        if(cell1.hasClass('o') && cell2.hasClass('o') && cell3.hasClass('o') ||
            cell4.hasClass('o') && cell5.hasClass('o') && cell6.hasClass('o') ||
            cell7.hasClass('o') && cell8.hasClass('o') && cell9.hasClass('o') ||
            cell1.hasClass('o') && cell4.hasClass('o') && cell7.hasClass('o') ||
            cell2.hasClass('o') && cell5.hasClass('o') && cell8.hasClass('o') ||
            cell3.hasClass('o') && cell6.hasClass('o') && cell9.hasClass('o') ||
            cell1.hasClass('o') && cell5.hasClass('o') && cell9.hasClass('o') ||
            cell3.hasClass('o') && cell5.hasClass('o') && cell7.hasClass('o')
        ){
            alert('Winner: O');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        } else if(cell1.hasClass('x') && cell2.hasClass('x') && cell3.hasClass('x') ||
            cell4.hasClass('x') && cell5.hasClass('x') && cell6.hasClass('x') ||
            cell7.hasClass('x') && cell8.hasClass('x') && cell9.hasClass('x') ||
            cell1.hasClass('x') && cell4.hasClass('x') && cell7.hasClass('x') ||
            cell2.hasClass('x') && cell5.hasClass('x') && cell8.hasClass('x') ||
            cell3.hasClass('x') && cell6.hasClass('x') && cell9.hasClass('x') ||
            cell1.hasClass('x') && cell5.hasClass('x') && cell9.hasClass('x') ||
            cell3.hasClass('x') && cell5.hasClass('x') && cell7.hasClass('x')
        ){
            alert('Winner: X');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('s');
        } else if(turns == 9){
            alert('Tie Game');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('s');
            turns = 0;
        } else if($(this).hasClass('disable')){
            alert('This spot is already filled');
        } else if(turns%2 == 0){
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if(cell1.hasClass('o') && cell2.hasClass('o') && cell3.hasClass('o') ||
                cell4.hasClass('o') && cell5.hasClass('o') && cell6.hasClass('o') ||
                cell7.hasClass('o') && cell8.hasClass('o') && cell9.hasClass('o') ||
                cell1.hasClass('o') && cell4.hasClass('o') && cell7.hasClass('o') ||
                cell2.hasClass('o') && cell5.hasClass('o') && cell8.hasClass('o') ||
                cell3.hasClass('o') && cell6.hasClass('o') && cell9.hasClass('o') ||
                cell1.hasClass('o') && cell5.hasClass('o') && cell9.hasClass('o') ||
                cell3.hasClass('o') && cell5.hasClass('o') && cell7.hasClass('o')
            ){
                alert('Winner: O');
                turns = 0;
            }
        } else {
            turns++;
            $(this).text(x);
            $(this).addClass('disable s');
            if(cell1.hasClass('x') && cell2.hasClass('x') && cell3.hasClass('x') ||
                cell4.hasClass('x') && cell5.hasClass('x') && cell6.hasClass('x') ||
                cell7.hasClass('x') && cell8.hasClass('x') && cell9.hasClass('x') ||
                cell1.hasClass('x') && cell4.hasClass('x') && cell7.hasClass('x') ||
                cell2.hasClass('x') && cell5.hasClass('x') && cell8.hasClass('x') ||
                cell3.hasClass('x') && cell6.hasClass('x') && cell9.hasClass('x') ||
                cell1.hasClass('x') && cell5.hasClass('x') && cell9.hasClass('x') ||
                cell3.hasClass('x') && cell5.hasClass('x') && cell7.hasClass('x')
            ){
                alert('Winner: X');
                turns = 0;
            }
        }
    });
    // Reset Handler
    $("#reset").click(function(){
        $("#board li").text("+");
        $("#board li").removeClass('disable');
        $("#board li").removeClass('o');
        $("#board li").removeClass('s');
        turns = 0;
    });
});