$(function() {
    $(".change-sleep").on("click", function(event) {
      const id = $(this).data("id");
      const newSleep = $(this).data("newsleep");
  
      const newSleepState = {
        sleepy: newSleep
      };
  
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      const id = $(this).data("id");
  
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          location.reload();
        }
      );
    });
  });
  