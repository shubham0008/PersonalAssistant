 $(document).ready(function(){
   
    $("button").click(function(){
        $("#welcome").hide(1000);
    //    $( "#progressbar" ).css({ "background-color", "yellow" });
    });


$("button").on('click',function(){
 	var id = $('#username');
 	var key = $('#password');

 var userDetail ={id: id.val() ,key: key.val()};

 	 $.ajax({
        type: 'POST',
        url: '/logina',
        data: userDetail,
        success: function(data){
        //do something with the data via front-end framework
        alert("success");
        
        }
      });

      return false;



});

// $("button").on('click',(function(){
//         
//     });




});
