$(function () {
  console.log("bring the wow");


// i have literally no idea how to use an action or anything in here
  counts = 0;

  $("#resetGame").dblclick(function () {
    console.log("double clicked button");
    counts = 0;

    $("span.count").text(counts);
    $("#gameOutput").text("");

    $("#draggable").fadeOut(30).animate({ left: 0 }).fadeIn(30);
  });

  $("#draggable").draggable({
    containment: "#doge-row",
    drag: function () {
      counts++;
      updateCounterStatus(counts);
    },
  });

  function updateCounterStatus(new_count) {


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

    console.table("About to update count", new_count);

    $("#gameOutput").text(game_msg);
    $("span.count").text(new_count);
  }
});

$("p").click(function(){
  $(this).hide();
});