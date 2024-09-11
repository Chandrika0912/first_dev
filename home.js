$(document).ready(function() {
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
});

    function setActiveButton(buttonId) {
        // Remove 'active' class from all buttons
        $('.creation').removeClass('active'); // Adjust selector to match all buttons you want to control
        // Add 'active' class to the clicked button
        $(buttonId).addClass('active');
    }
    // $('#btnusercreation').on('submit', function(event) {
    //     event.preventDefault();
    //     const UserID = $('#UserID').val();
    //     const UserName = $('#UserName').val();
    //     const user = {
    //       UserID: '123',
    //       UserName: 'Chandu'
    //     };
    //     if (username === user.username && password === user.password) {
    //     } 
    //     else {
    //       alert('Invalid username or password');
    //     }
    //   });

    

    


