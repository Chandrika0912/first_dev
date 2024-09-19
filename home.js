$(document).ready(function() {
    // var dataArray='';
    $("#accordionExample").hide();
    $("#accordionExample1").hide();
    $("#accordionExample2").hide();
    $("#accordionExample3").hide();
    $("#accordionExample4").hide();
    $('#btnusercreation').click(function() {
        setActiveButton('#btnusercreation');
        // Toggle the accordion (show/hide)
        $("#accordionExample").show();
        $("#accordionExample1").hide();
        $("#accordionExample2").hide();
        $("#accordionExample3").hide();
        $("#accordionExample4").hide();
        $('#collapseOne').collapse('show');        
    });
    $('#btnareacreation').click(function() {
        setActiveButton('#btnareacreation');
        // Toggle the accordion (show/hide)
        $("#accordionExample1").show();
        $("#accordionExample2").hide();
        $("#accordionExample3").hide();
        $("#accordionExample4").hide();
        $("#accordionExample").hide();
        $('#collapseOnearea').collapse('show');
    });
    $('#btncustomtables').click(function() {
        setActiveButton('#btncustomtables');
        // Toggle the accordion (show/hide)
        $("#accordionExample2").show();
        $("#accordionExample3").hide();
        $("#accordionExample4").hide();
        $("#accordionExample").hide();
        $("#accordionExample1").hide();
        $('#collapseOnecustomtables').collapse('show');
    });
    $('#btnsqlquery').click(function() {
        setActiveButton('#btnsqlquery');
        // Toggle the accordion (show/hide)
        $("#accordionExample3").show();
        $("#accordionExample").hide();
        $("#accordionExample1").hide();
        $("#accordionExample2").hide();
        $("#accordionExample4").hide();
        $('#collapseOnesqlquery').collapse('show');
    });
    $('#btnmobileappversions').click(function() {
        setActiveButton('#btnmobileappversions');
        // Toggle the accordion (show/hide)
        $("#accordionExample4").show();
        $("#accordionExample").hide();
        $("#accordionExample1").hide();
        $("#accordionExample2").hide();
        $("#accordionExample3").hide();
        $('#collapseOnemobileappversions').collapse('show');
    });
    $('#btnSubmit').on('click', function() {
        let formData={
            userID: $('#name').val(),
        userName: $('#UserName').val(),
        roleName: $('select').eq(0).val(),
        companyCode: $('select').eq(1).val(),
        division: $('select').eq(2).val(),
        subDivision: $('select').eq(3).val(),
        password: $('#password').val(),
        email: $('#Email').val(),
        phoneNumber: $('#Number').val(),
        address: $('#text').val()
        }
         dataArray = [formData];
        console.log(dataArray);
        populateTable() 
  });
  $('#btnClear').on('click', function() {
    let formData = {
        userID: $('#name').val(),
        userName: $('#UserName').val(),
        roleName: $('select').eq(0).val(),
        companyCode: $('select').eq(1).val(),
        division: $('select').eq(2).val(),
        subDivision: $('select').eq(3).val(),
        password: $('#password').val(),
        email: $('#Email').val(),
        phoneNumber: $('#Number').val(),
        address: $('#text').val()
    };
    console.log(formData);
    // Clear the form inputs
    $('#name').val('').prop('disabled', false);
    $('#UserName').val('');
    $('select').eq(0).val('');
    $('select').eq(1).val('');
    $('select').eq(2).val('');
    $('select').eq(3).val('');
    $('#password').val('');
    $('#Email').val('');
    $('#Number').val('');
    $('#text').val('');

    populateTable();
 });     
  var dataArrObj=[
    {
        "userID": "123",
        "userName": "jhkjhk",
        "roleName": "Assistant Engineer",
        "companyCode": "R16",
        "division": "West Division",
        "subDivision": "west zone",
        "password": "jhkjhk",
        "email": "jhkjh@dgh",
        "phoneNumber": "4564543654364",
        "address": "khjkjhk jkjhk"
    },
    {
        "userID": "23",
         "userName": "jhkjhk",
        "roleName": "Assistant Engineer",
        "companyCode": "R16",
        "division": "West Division",
        "subDivision": "west zone",
        "password": "jhkjhk",
        "email": "jhkjh@dgh",
        "phoneNumber": "4564543654364",
        "address": "khjkjhk jkjhk"
    },
    {
        "userID": "45",
        "userName": "jhkjhk",
        "roleName": "Assistant Engineer",
        "companyCode": "R16",
        "division": "West Division",
        "subDivision": "west zone",
        "password": "jhkjhk",
        "email": "jhkjh@dgh",
        "phoneNumber": "4564543654364",
        "address": "khjkjhk jkjhk"
    },
    {
        "userID": "45",
        "userName": "jhkjhk",
        "roleName": "Assistant Engineer",
        "companyCode": "R16",
        "division": "West Division",
        "subDivision": "west zone",
        "password": "jhkjhk",
        "email": "jhkjh@dgh",
        "phoneNumber": "4564543654364",
        "address": "khjkjhk jkjhk"
    }
 ]
 function populateTable() {
    const tbody = $('#data-table tbody');
    tbody.empty();
    dataArrObj.forEach((user, index) => {
        const row = `
            <tr data-index="${index}">
                <td>${user.userID}</td>
                <td>${user.userName}</td>
                <td>${user.roleName}</td>
                <td>${user.companyCode}</td>
                <td>${user.division}</td>
                <td>${user.subDivision}</td>
                <td>${user.password}</td>
                <td>${user.email}</td>
                <td>${user.phoneNumber}</td>
                 <td>${user.address}</td>
                <td><button class="edit-btn">Edit</button></td>
            </tr>`;
        tbody.append(row);
    });
 }
 function editUser(index) {
    const user = dataArrObj[index];
    $('#name').val(user.userID).prop('disabled', true);
    $('#UserName').val(user.userName);
    $('#roleName').val(user.roleName);
    $('#companyCode').val(user.companyCode);
    $('#division').val(user.division);
    $('#subDivision').val(user.subDivision);
    $('#password').val(user.password);
    $('#Email').val(user.email);
    $('#Number').val(user.phoneNumber);
    $('#text').val(user.address);
 }
  function populateTable() {
    var $tbody = $('#data-table tbody');
    $tbody.empty(); // Clear existing rows
    dataArrObj.forEach(function(item, index) {
        var row = '<tr data-index="' + index + '">' +
                    '<td>' + item.userID + '</td>' +
                    '<td>' + item.userName + '</td>' +
                    '<td>' + item.roleName + '</td>' +
                    '<td>' + item.companyCode + '</td>' +
                    '<td>' + item.division + '</td>' +
                    '<td>' + item.subDivision + '</td>' +
                    '<td>' + item.email + '</td>' +
                    '<td>' + item.phoneNumber + '</td>' +
                    '<td>' + item.address + '</td>' +
                    '<td><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>' +
                  '</tr>';
        $tbody.append(row);
    });
       // Data for dropdowns
       var arrList = [ { "Id": 1, "Name": "West Division" },
        { "Id": 2, "Name": "East Division" },
        { "Id": 3, "Name": "North Division" }, { "Id": 4, "Name": "South Division" }];
        var arrSubList = [[{ "Id": '1', "Name": "Select Sub Division","name":"Select Subcluster"},{"Id": 2, "Name": "West zone","name":"West cluster" }],
        [{"Id": '1', "Name": "Select Sub Division","name":"Select Subcluster"},{"Id": 2, "Name": "East zone","name":"East cluster"}],
        [{"Id": '1', "Name": "Select Sub Division","name":"Select Subcluster"},{"Id": 2, "Name": "North zone","name":"North cluster"}],
        [{"Id": '1', "Name": "Select Sub Division","name":"Select Subcluster"},{"Id": 2, "Name": "South zone","name":"South cluster"}]]
        // var arrPopLation=[[{"Id":1,"PopL":"20L"},{"Id":2,"PopL":"25L"},{"Id":3,"PopL":"35L"}]];
        for (var i = 0; i < arrList.length; i++) {
         $("#Division").append('<option value="' + arrList[i].Id + '">' + arrList[i].Name + '</option>');
        }
        var SubDivision;
        $("#Division").change(function () {
         $("#SubDivision").empty();
         var selectedValue = parseFloat($("#Division").val());
         subvalues = '';
         if (selectedValue == 1) {
         subvalues = arrSubList[0];
         }
         else if (selectedValue == 2) {
         subvalues = arrSubList[1];
         }
         else if (selectedValue == 3) {
         subvalues = arrSubList[2];
         }
         else if (selectedValue == 4) {
           subvalues = arrSubList[3];
           }
         for (var i = 0; i < subvalues.length; i++) {
         $("#SubDivision").append('<option value="' + subvalues[i].Id + '">' + subvalues[i].Name + '</option>');
         //$("#ddlPopulation").append('<option value="' + subvalues[i].Id + '">' + subvalues[i].PopL + '</option>');
         }
         $("#SubDivision").val('1').trigger('change');
        });
        $("#SubDivision").change(function () {
         $("#Subcluster").empty();
         for (var i = 0; i < subvalues.length; i++) {
         $("#Subcluster").append('<option value="' + subvalues[i].Id + '">' + subvalues[i].name + '</option>');
         }
        });
        // $('#txtvalue').keyup(function () {
        //  this.value = this.value.match(/^\d+\.?\d{0,2}/);
        // });
        function deleteRow(index) {
            dataArrObj.splice(index, 1);
            populateTable(); 
        }
        $('#data-table').on('click', '.delete-btn', function() {
            var index = $(this).closest('tr').data('index');
            if (confirm('Are you sure you want to delete this item?')) {
                deleteRow(index);
            }
        });
 }
 function addRow(item) {
    dataArrObj.push(item);
    populateTable();
 }
 function editRow(index, updatedItem) {
    dataArrObj[index] = updatedItem;
    populateTable();
 }
// Initial table population
populateTable();
// Handle Edit and Delete

$('#data-table').on('click', '.edit-btn', function() {
    var index = $(this).closest('tr').data('index');
    editUser(index);
 });
 });

    function setActiveButton(buttonId) {
        // Remove 'active' class from all buttons
        $('.creation').removeClass('active'); // Adjust selector to match all buttons you want to control
        // Add 'active' class to the clicked button
        $(buttonId).addClass('active');
    }
