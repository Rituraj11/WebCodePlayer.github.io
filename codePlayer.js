//updateOutput function gives the css panel and js panel values to the output panel to display the instant outputs.
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val()+ "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

/* As we cant't run the js in iframe because of the security reasons ,"eval" function evaluates the js in js panel and displays results in ifram output panel by .contentWindow function.*/    
   document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    
}

/* This toggleButton hover function gives the nav buttons hover effects.
    Hover function conatins two events i.e HandlerIn and HandlerOut.
    here HandlerIn as addClass and HandlerOut as removeClass.
    As the name addClass and removeClass suggests it adds and removes class as "highlightedButton" without specifing with any html tag or element */
$(".toggleButton").hover(function(){
     $(this).addClass("highlightedButton"); 
},function(){
     $(this).removeClass("highlightedButton");
});


// here .click function defines the behaviors on clicking the toggleButtons. 
//"this" gives the result of the current object or event we working with.  
 $(".toggleButton").click(function(){
     $(this).toggleClass("active");
     $(this).removeClass("highlightedButton");
   
/* panelId holds the toggleButton ID (eg:html/css/javascript) concatinated with "Panel", which gives value (eg: htmlPanel/cssPanel/javascriptPanel), which is our text fields of html,css or javascript. */
     var panelId =  $(this).attr("id") + "Panel";
     
/*toggleClass acts as if the class is initially displayed then it hides this class or if it initially hidden then it displays it.
   Here # is concatinated with value of above variable and toggleClass properties occurs to thaa id.*/
     $("#" + panelId).toggleClass("hidden");
 
/* to know how many panels we working with , we took the variable and substact the value with 4 which will give number of panels    we working with at that moment.*/    
     var numberOfActivePanel = 4 - $(".hidden").length;
  
/* Here we are dividing the window width to the number of panels we working with, to resize the window accordingly to the number of panels.*/ 
     $(".panel").width(($(window).width() / numberOfActivePanel) - 5);
 });   

/* Here the window height is substracted with the header height for panels to gets its full height */
$(".panel").height($(window).height() - $("#header").height());

$(".panel").width(($(window).width() / 2) - 4);
updateOutput();

/*Here this function ".on('change keyup paste')" gives the instant output functionality */
$("textarea").on('change keyup paste',function(){
    
    updateOutput();
});