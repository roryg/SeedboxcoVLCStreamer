/**
 * Store the values for each input in localStorage
 */
function saveOptions() {
    var inputs = document.getElementsByTagName('input');
    var status = document.getElementById("status");

    for (var i = 0; i < inputs.length; i++) {
        var key = inputs[i].id;
        var value = inputs[i].value;

        localStorage[key] = value;

        status.innerHTML = "Options Saved!";

        setTimeout(function() {
            status.innerHTML = "";
        }, 750);
    }
}

/**
 *Restore the options saved in localStorage or use the data-default value if none is available
 */
function restoreOptions() {
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        var key = inputs[i].id;
        
        inputs[i].value = ( ! localStorage[key] ? inputs[i].dataset.default : localStorage[key]);
    }
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);