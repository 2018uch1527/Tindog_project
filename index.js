
$(".Expander").click(function(){
    var x= $(this).attr("name");
    x="."+x;
    if($(this).text()=="+")
     $(this).text("-");
     else
       $(this).text("+");
     $(x).toggle();
});
