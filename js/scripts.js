$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();
    const question4 = $("#question4").val();
    const breakfast = $("#breakfast").val().trim();

    $("#other, #centrist").addClass("hidden");
    
    politicalMeter(question1, question2, question3, question4, breakfast);


  });
});


function politicalMeter(quest1, quest2, quest3, quest4, bfast) {
  if (quest4 === "Far left" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Far Right");
    $(".food").text(bfast);
  } else if (quest4 === "Left" && quest3 === "bus" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Poor Republican");
    $(".food").text(bfast);
  } else if (quest4 === "Left" && quest3 !== "bus" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Republican");
    $(".food").text(bfast);
  } else if (quest4 === "Centrist" && bfast !== "") {
    $("#centrist").removeClass("hidden");
    $(".food").text(bfast);
  } else if (quest4 === "Right" && quest2 === "Babies" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Socialist");
    $(".food").text(bfast);
  } else if (quest4 === "Right" && quest2 === "Puppies" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Liberal");
    $(".food").text(bfast);
  } else if (quest4 === "Far Right" && quest3 === "Red" && bfast !== "" || quest4 === "Far Right" && quest2 === "Puppies" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Communist");
    $(".food").text(bfast);
  } else if (quest4 === "Far Right" && bfast !== "") {
    $("#other").removeClass("hidden");
    $(".political").text("Tankie");
    $(".food").text(bfast);
  } else {
    alert("Missing Entry");
  }



} 