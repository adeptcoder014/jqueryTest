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

  //   $("#myForm").submit(function (event) {
  //     event.preventDefault();

  //     var formData = $(this).serializeArray(); // Serialize form data as an array
  //     let sNo = 0;

  //     // Push each form field object to the formDataArray
  //     const name = $("#name").val();
  //     const employeeId = $("#postId").val();
  //     const employeeType = $("#empType").val();
  //     const mobile = $("#mobile").val();
  //     const dob = $("#dob").val();
  //     const gender = $("#gender").val();
  //     const instaId = $("#insta").val();
  //     var id = Math.floor(Math.random() * 1000000);

  //     var formData = {
  //       name: $("#name").val(),
  //       mobile: $("#mobile").val(),
  //       employeeId: $("#postId").val(),
  //       employeeType: $("#empType").val(),
  //       gender: $("#gender").val(),
  //       dob: $("#dob").val(),
  //       instaId: $("#insta").val(), // Corrected selector
  //       id: Math.floor(Math.random() * 1000000),
  //     };

  //     let formDataArray = [];
  //     formDataArray.push(formData);

  //     $.each(formDataArray, function (index, data) {
  //     //   var row = $("<tr>");
  //       var row = $("<tr>").attr("id", data.id);

  //       row.append($("<td>").text(data.id));

  //       row.append($("<td>").text(data.name));
  //       row.append($("<td>").text(data.mobile));
  //       row.append($("<td>").text(data.gender));
  //       row.append($("<td>").text(data.dob));
  //       row.append($("<td>").text(data.instaId));
  //       // Edit button
  //       var editBtn = $("<button>").text("Edit");

  //       editBtn.click(function () {
  //         // Fill the form fields with the data of this row
  //         $("#name").val(data.name);
  //         $("#mobile").val(data.mobile);
  //         $("#gender").val(data.gender);
  //         $("#dob").val(data.dob);
  //         $("#instaId").val(data.instaId);

  //         // Change the button text to "Save"
  //         editBtn.text("Save");

  //         // Update the row with the new data when the "Save" button is clicked
  //         editBtn.click(function () {
  //           $("#" + data.id)
  //             .children("td:nth-child(2)")
  //             .text($("#name").val());
  //           $("#" + data.id)
  //             .children("td:nth-child(3)")
  //             .text($("#mobile").val());
  //           $("#" + data.id)
  //             .children("td:nth-child(4)")
  //             .text($("#gender").val());
  //           $("#" + data.id)
  //             .children("td:nth-child(5)")
  //             .text($("#dob").val());
  //           $("#" + data.id)
  //             .children("td:nth-child(6)")
  //             .text($("#instaId").val());

  //           // Change the button text back to "Edit"
  //           editBtn.text("Edit");
  //         });
  //       });
  //       row.append($("<td>").append(editBtn));

  //       row.append($("<td>").text("Delete"));

  //       $("#myTable tbody").append(row);
  //     });

  //     $("#name").val("");
  //     $("#mobile").val("");
  //     $("#gender").val("male");
  //     $("#dob").val("");
  //     $("#insta").val("");
  //   });

//   $("#myForm").submit(function (event) {
//     event.preventDefault();

//     var formData = $(this).serializeArray(); // Serialize form data as an array

//     var formData = {
//       name: $("#name").val(),
//       mobile: $("#mobile").val(),
//       employeeId: $("#postId").val(),
//       employeeType: $("#empType").val(),
//       gender: $("#gender").val(),
//       dob: $("#dob").val(),
//       instaId: $("#insta").val(),
//       id: Math.floor(Math.random() * 1000000),
//     };

//     let formDataArray = [];
//     formDataArray.push(formData);
//     localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

//     var storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];
//     console.log("-------------------------", storedData);

//     $.each(storedData, function (index, data) {
//       var row = $("<tr>").attr("id", data.id);

//       row.append($("<td>").text(data.id));
//       row.append($("<td>").text(data.name));
//       row.append($("<td>").text(data.mobile));
//       row.append($("<td>").text(data.gender));
//       row.append($("<td>").text(data.dob));
//       row.append($("<td>").text(data.instaId));

//       // Edit button
//       var editBtn = $("<button>").text("Edit");

//       editBtn.click(function () {
//         // Fill the form fields with the data of this row
//         $("#name").val(data.name);
//         $("#mobile").val(data.mobile);
//         $("#gender").val(data.gender);
//         $("#dob").val(data.dob);
//         $("#insta").val(data.instaId);

//         // Change the button text to "Save"
//         editBtn.text("Save");

//         // Update the row with the new data when the "Save" button is clicked
//         editBtn.click(function () {
//           $("#" + data.id)
//             .children("td:nth-child(2)")
//             .text($("#name").val());
//           $("#" + data.id)
//             .children("td:nth-child(3)")
//             .text($("#mobile").val());
//           $("#" + data.id)
//             .children("td:nth-child(4)")
//             .text($("#gender").val());
//           $("#" + data.id)
//             .children("td:nth-child(5)")
//             .text($("#dob").val());
//           $("#" + data.id)
//             .children("td:nth-child(6)")
//             .text($("#insta").val());

//           // Change the button text back to "Edit"
//           editBtn.text("Edit");

//           // Update the data object with the new values
//           data.name = $("#name").val();
//           data.mobile = $("#mobile").val();
//           data.gender = $("#gender").val();
//           data.dob = $("#dob").val();
//           data.instaId = $("#insta").val();
//         });
//       });

//       row.append($("<td>").append(editBtn));

//       row.append($("<td>").text("Delete"));

//       $("#myTable tbody").append(row);
//     });

//     $("#name").val("");
//     $("#mobile").val("");
//     $("#gender").val("male");
//     $("#dob").val("");
//     $("#insta").val("");

//   });




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
  
    $.each(formDataArray, function (index, data) {
      var row = $("<tr>").attr("id", data.id);
  
      row.append($("<td>").text(data.id));
      row.append($("<td>").text(data.name));
      row.append($("<td>").text(data.mobile));
      row.append($("<td>").text(data.gender));
      row.append($("<td>").text(data.dob));
      row.append($("<td>").text(data.instaId));
  
      // Edit button
      var editBtn = $("<button>").text("Edit");
  
      editBtn.click(function () {
        // Fill the form fields with the data of this row
        $("#name").val(data.name);
        $("#mobile").val(data.mobile);
        $("#gender").val(data.gender);
        $("#dob").val(data.dob);
        $("#insta").val(data.instaId);
  
        // Change the button text to "Save"
        editBtn.text("Save");
  
        // Update the row with the new data when the "Save" button is clicked
        editBtn.click(function () {
          $("#" + data.id)
            .children("td:nth-child(2)")
            .text($("#name").val());
          $("#" + data.id)
            .children("td:nth-child(3)")
            .text($("#mobile").val());
          $("#" + data.id)
            .children("td:nth-child(4)")
            .text($("#gender").val());
          $("#" + data.id)
            .children("td:nth-child(5)")
            .text($("#dob").val());
          $("#" + data.id)
            .children("td:nth-child(6)")
            .text($("#insta").val());
  
          // Change the button text back to "Edit"
          editBtn.text("Edit");
  
          // Update the data object with the new values
          data.name = $("#name").val();
          data.mobile = $("#mobile").val();
          data.gender = $("#gender").val();
          data.dob = $("#dob").val();
          data.instaId = $("#insta").val();
  
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
  
    console.log("-------------------------",formData);
  });
  
});
