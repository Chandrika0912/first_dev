function appendToDisplay(value) {
    $('#display').val(function(index, currentValue) {
        return currentValue + value;
    });
}

function calculate() {
    let display = $('#display');
    try {
        display.val(eval(display.val()));
    } catch (e) {
        display.val('Error');
    }
}
function clearDisplay() {
    $('#display').val('');
}