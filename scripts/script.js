$(function () {
  console.log("bring the wow");

  var $drag_counter = $("#event-drag"),
    counts = 0;

  // $("#resetGame").click(function () {
  //   console.log("clicked button");
  //   counts = 0;
  //   $("span.count").text(counts);
  //   $("#gameOutput").text("");
  // });
  // removed button as it is not needed for submission, commented because i still think its cool

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {

    var game_msg = "";

    if (new_count < 69) {
      game_msg = "Get to a nice number";
    } else if (new_count == 69) {
      game_msg = "Nice";
    } else {
      game_msg = "Too nice";
      $("img").attr(
        "src",
        "https://i.pinimg.com/236x/d0/8e/aa/d08eaa357b0fb8e59c7c46beeaed6c53--morgan-freeman-internet.jpg"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});
