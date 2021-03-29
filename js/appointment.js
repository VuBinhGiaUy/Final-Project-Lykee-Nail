var $actionBtn = $(".submit-btn");
var results = {};

$actionBtn.on("click", function() {
    $('.booking-form input').each(function() {
      results[this.id]= this.value
    });
  
    var json = JSON.stringify(results);
    console.log(json);
  });