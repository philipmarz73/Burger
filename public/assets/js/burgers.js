$(function() {
    $(".change-devour").on("click", function(event) {
      event.preventDefault()
      const id = $(this).data("id");
      
  
      var newDevourState = {
        devoured: true
      };
      console.log("clicked");
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          // console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
      }

      console.log(newBurger);
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  