$(document).ready(function () {
  //================ TOGGLE_INSTA_FIELD_OPTION ===================================================

  $("#toggleInput").change(function () {
    if ($(this).is(":checked")) {
      $("#inputField").show();
    } else {
      $("#inputField").hide();
    }
  });
  //================ GET_PROPER_EMPLOYEE_ID(based on the records size) ===================================================
  $("#getId").click(function () {
    let emp = localStorage.getItem("formDataArray");

    let length = JSON.parse(emp).length;
    console.log(length);
    var id = length + 1;
    $("#postId").val(id);
  });
  //================ MOBILE_NUMBER_VALIDATION ===================================================

  $("#mobile").blur(function () {
    var mobileValue = $(this).val();
    if (mobileValue.length < 10 || mobileValue.length > 10) {
      $("#mobileError").show();
    } else {
      $("#mobileError").hide();
    }
  });
  //================ MAPPING AND DISPLAYING THE ENTERED DATA ===================================================

  let emp = localStorage.getItem("formDataArray");

  $.each(JSON.parse(emp), function (index, data) {
    var row = $("<tr>").attr("id", data.id);
    var editBtn = $("<button>").text("Edit");
    var deleteBtn = $("<button>").text("Delete");
    row.append($("<td>").text("TYPE1"));

    row.append($("<td>").text(data.id));

    row.append($("<td>").text(data.name));
    row.append($("<td>").text(data.mobile));
    row.append($("<td>").text(data.gender));
    row.append($("<td>").text(data.dob));
    row.append($("<td>").text(data.instaId));

    row.append($("<td>").append(editBtn).addClass("editBtn"));
    row.append($("<td>").append(deleteBtn).addClass("deleteBtn"));

    $("#myTable tbody").append(row);

    editBtn.click(function () {
      if (editBtn.text() === "Edit") {
        editBtn.text("Save");

        $("#name").val(data.name);

        $("#mobile").val(data.mobile);
        $("#gender").val(data.gender);
        $("#dob").val(data.dob);
        $("#insta").val(data.instaId);
        $("#name").on("input", function () {
          data.name = $(this).val();
        });
        $("#mobile").on("input", function () {
          data.mobile = $(this).val();
        });
        $("#gender").on("input", function () {
          data.gender = $("input[name='gender']:checked").val();
        });
        $("#dob").on("input", function () {
          data.dob = $(this).val();
        });
        $("#insta").on("input", function () {
          data.insta = $(this).val();
        });
      } else {
        editBtn.text("Edit");
        // console.log(emp)
        data.name = $("#name").val();

        emp = JSON.stringify(
          JSON.parse(emp).map(function (item) {
            return item.id == data.id ? data : item;
          })
        );

        // Update the data in localStorage
        localStorage.setItem("formDataArray", emp);
      }
    });
    deleteBtn.click(function () {
      $(this).closest("tr").remove(); // remove the row from the table
      // update the data in localStorage
      var formDataArray = JSON.parse(localStorage.getItem("formDataArray"));
      var newData = formDataArray.filter(function (obj) {
        return obj.id !== data.id;
      });
      localStorage.setItem("formDataArray", JSON.stringify(newData));
    });

    //============= VALIDATION ===================
    var name = $("#name").val();
    var email = $("#email").val();

    // Validate form
    // if (!name || !email) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    // =======================================
  });

  //======== TABLE_SEARCH_FUNCTIONALITY (using name as a search parameter)====================================
  $("#searchInput").on("input", function () {
    var searchValue = $(this).val().toLowerCase();

    $("#myTable tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
    });
  });

  //================ FORM_SUBMISSION ===================================================
  $("#myForm").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serializeArray();

    var formData = {
      name: $("#name").val(),
      mobile: $("#mobile").val(),
      employeeId: $("#postId").val(),
      employeeType: $("#empType").val(),
      gender: $("input[name='gender']:checked").val(),
      dob: $("#dob").val(),
      instaId: $("#insta").val(),
      id: Math.floor(Math.random() * 1000000),
    };
    // Validate form
    if (!formData.name || !formData.dob || !formData.gender) {
      return alert("Please fill in all fields");
    }

    let formDataArray = [];
    formDataArray.push(formData);

    let existingData = localStorage.getItem("formDataArray");

    if (existingData) {
      formDataArray = JSON.parse(existingData);
      formDataArray.push(formData);
      //--------------UNIQUE_ENRIES_USING_MOBILE ---------------------
      var mobile = $("#mobile").val();
      if (existingData.includes(mobile)) {
        return alert("Already entered for this person");
      } else {
        window.location.reload();
      }
    }

    // Store the data in local storage
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

    // clear the form
    $("#name").val("");
    $("#mobile").val("");
    $("#gender").val("male");
    $("#dob").val("");
    $("#insta").val("");
  });
});
