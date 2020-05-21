$(function() {

    $(".devour-button").on("click", function(event) {

      var id = $(this).data("id");
      let newStatus = { 
        devoured: true 
      };
       // Send the PUT request.  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus    
      })
      .then(function() {
          console.log("changed status to devoured");
           // Reload the page to get the updated list
          location.reload();
        }
      );


    });
  
    $("#submit").on("click", function(event) {
     
      console.log("submit clicked");
      
      let newName = $("#burgeradd").val().trim();
      let newBurger = { name: newName };
      
      console.log(newBurger);
     // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      })
      .then(function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });