//declare global variables
var theTable = "misc.dentist";
var theColumns = ["gid", "postcode", "address1", "address2"];

function toggleSQLDentist() {
  //get the button id
  var simpleMarker = document.getElementById("sqldentistBtn");

  //added check to change appearence of toggled button to change css class
  //so user knows which layer is on
  if (simpleMarker.classList.contains("card-button")) {
    simpleMarker.classList.remove("card-button");
    simpleMarker.classList.add("card-button-on");
  } else {
    simpleMarker.classList.remove("card-button-on");
    simpleMarker.classList.add("card-button");
  }

  $(document).ready(function () {
    //alert user that code is below
    document.getElementById("displaymessage").innerHTML =
      "Below is the SQL code for the dentist!";

    //check if the output is already displayed
    var output = $("body").find(".sql-output");
    if (output.length) {
      //if it is, hide or show it based on its current visibility
      if (output.is(":visible")) {
        output.hide();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        output.show();
        //window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    } else {
      //ff it isn't, fetch it with AJAX
      $.ajax({
        url: "assets/php/php_sql3code.php",
        data: {
          table: theTable,
          fields: theColumns,
        },
      }).done(function (data) {
        $("body").append(data);
      });
    }
  });
}
