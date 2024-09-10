$(document).ready(function() {
    clickall();
});
function clickall(){
    $('#btnusercreation').click(function() {
        // Toggle the accordion (show/hide)
        $('#collapseOne').collapse('toggle');
    });
    $('#btnareacreation').click(function() {
        // Toggle the accordion (show/hide)
        $('#collapseOnearea').collapse('toggle');
    });
    $('#btncustomtables').click(function() {
        // Toggle the accordion (show/hide)
        $('#collapseOnecustomtables').collapse('toggle');
    });
    $('#btnsqlquery').click(function() {
        // Toggle the accordion (show/hide)
        $('#collapseOnesqlquery').collapse('toggle');
    });
    $('#btnmobileappversions').click(function() {
        // Toggle the accordion (show/hide)
        $('#collapseOnemobileappversions').collapse('toggle');
    });
}