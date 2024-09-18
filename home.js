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
       var arrList = [{ "Id": 'custom', "Name": "" }, { "Id": 1, "Name": "" },
        { "Id": 2, "Name": "" },
        { "Id": 3, "Name": "" }, { "Id": 4, "Name": "" }];
        var arrSubList = [[{ "Id": 'custom', "Name": "Select Division"},{"Id": 1, "Name": "West zone","PopL":"West cluster" }],
        [{"Id": 'custom', "Name": "Select Division"},{"Id": 1, "Name": "East zone","PopL":"East cluster"}],
        [{"Id": 'custom', "Name": "Select Division"},{"Id": 1, "Name": "North zone","PopL":"North cluster"}],
        [{"Id": 'custom', "Name": "Select Division"},{"Id": 1, "Name": "South zone","PopL":"South cluster"}]]
        // var arrPopLation=[[{"Id":1,"PopL":"20L"},{"Id":2,"PopL":"25L"},{"Id":3,"PopL":"35L"}]];
        for (var i = 0; i < arrList.length; i++) {
         $("#Division").append('<option value="' + arrList[i].Id + '">' + arrList[i].Name + '</option>');
        }
        var SubDivision;
        $("#Division").change(function () {
         $("#SubDivision").empty();
         var selectedValue = parseFloat($("#Division").val());
         SubDivision = '';
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
         $("#Subcluster").append('<option value="' + subvalues[i].Id + '">' + subvalues[i].PopL + '</option>');
         }
        });
        $('#txtvalue').keyup(function () {
         this.value = this.value.match(/^\d+\.?\d{0,2}/);
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
function deleteRow(index) {
    dataArrObj.splice(index, 1);
    populateTable();
}
// Initial table population
populateTable();
// Handle Edit and Delete
$('#data-table').on('click', '.edit-btn', function() {
    var index = $(this).closest('tr').data('index');
    var item = dataArrObj[index];
    // Logic to handle edit operation
    // For demo, just alerting item details
    alert('Edit: ' + JSON.stringify(item));
});
$('#data-table').on('click', '.delete-btn', function() {
    var index = $(this).closest('tr').data('index');
    if (confirm('Are you sure you want to delete this item?')) {
        deleteRow(index);
    }
});  
});
    function setActiveButton(buttonId) {
        // Remove 'active' class from all buttons
        $('.creation').removeClass('active'); // Adjust selector to match all buttons you want to control
        // Add 'active' class to the clicked button
        $(buttonId).addClass('active');
    }
