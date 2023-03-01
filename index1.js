$(document).ready(function () {
  $("#toggleInput").change(function () {
    if ($(this).is(":checked")) {
      $("#inputField").show();
    } else {
      $("#inputField").hide();
    }
  });

  $("#getId").click(function () {
    var randomId = Math.floor(Math.random() * 1000000);
    $("#postId").val(randomId);
  });

  $("#mobile").blur(function () {
    var mobileValue = $(this).val();
    if (mobileValue.length < 10) {
      $("#mobileError").show();
    } else {
      $("#mobileError").hide();
    }
  });

  // const localStorageData = localStorage.getItem("formDataArray");
  // const data = JSON.parse(localStorageData);

  // $.each(data, function (index, data) {
  //   var row = $("<tr>").attr("id", data.id);

  //   row.append($("<td>").text(data.id));
  //   row.append($("<td>").text(data.name));
  //   row.append($("<td>").text(data.mobile));
  //   row.append($("<td>").text(data.gender));
  //   row.append($("<td>").text(data.dob));
  //   row.append($("<td>").text(data.instaId));
  //   row.append($("<td>").append("editBtn"));

  //   row.append($("<td>").text("Delete"));

  //   $("#myTable tbody").append(row);

  // });

  // const mappedData = data.map((x) => x);
  // console.log(mappedData);

  $("#myForm").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serializeArray(); // Serialize form data as an array

    var formData = {
      name: $("#name").val(),
      mobile: $("#mobile").val(),
      employeeId: $("#postId").val(),
      employeeType: $("#empType").val(),
      gender: $("#gender").val(),
      dob: $("#dob").val(),
      instaId: $("#insta").val(),
      id: Math.floor(Math.random() * 1000000),
    };

    let formDataArray = [];
    formDataArray.push(formData);

    let existingData = localStorage.getItem("formDataArray");

    if (existingData) {
      formDataArray = JSON.parse(existingData);
      formDataArray.push(formData);
    }

    // Store the data in local storage
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

    console.log(formDataArray);
    $.each(formDataArray, function (index, data) {
      var row = $("<tr>").attr("id", data.id);
      var editBtn = $("<button>").text("Edit");

      row.append($("<td>").text(data.id));
      row.append($("<td>").text(data.name));
      row.append($("<td>").text(data.mobile));
      row.append($("<td>").text(data.gender));
      row.append($("<td>").text(data.dob));
      row.append($("<td>").text(data.instaId));
      // Edit button
      editBtn.click(function () {
        // Fill the form fields with the data of this row
        $("#name").val(data.name);
        $("#mobile").val(data.mobile);
        $("#gender").val(data.gender);
        $("#dob").val(data.dob);
        $("#insta").val(data.instaId);

        // Change the button text to "Save"
        editBtn.text("Save");
        let inputName = "";
        $("#name").change(function () {
          inputName = $(this).val();

          // Update the data object with the new value
          // data.name = inputName;
          // // Update the table cell with the new value
          // $("#" + data.id)
          //   .children("td:nth-child(2)")
          //   .text(inputName);
          // // Store the updated data in local storage
          // localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
        });
        // Update the row with the new data when the "Save" button is clicked
       console.log("|||---------",inputName)
        editBtn.click(function () {
          data.name = inputName;
          $("#" + data.id)
            .children("td:nth-child(2)")
            .text(inputName);
          // $("#" + data.id)
          //   .children("td:nth-child(3)")
          //   .text($("#mobile").val());
          // $("#" + data.id)
          //   .children("td:nth-child(4)")
          //   .text($("#gender").val());
          // $("#" + data.id)
          //   .children("td:nth-child(5)")
          //   .text($("#dob").val());
          // $("#" + data.id)
          //   .children("td:nth-child(6)")
          //   .text($("#insta").val());

          // Change the button text back to "Edit"

          // Update the data object with the new values

          editBtn.text("Edit");
          // Store the updated data in local storage
          localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
        });
      });
      row.append($("<td>").append(editBtn));
      row.append($("<td>").text("Delete"));

      $("#myTable tbody").append(row);
    });

    $("#name").val("");
    $("#mobile").val("");
    $("#gender").val("male");
    $("#dob").val("");
    $("#insta").val("");

    // console.log("-------------------------", formData);
  });
});
