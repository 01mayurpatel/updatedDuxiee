var copyTag;
var checkTag;
var text1;
var text2;
var toggleLeft;
var toggleRight;
var buttonL2;
var buttonL1;
var func;
document.addEventListener("DOMContentLoaded", function() {
    copyTag = document.querySelector('.copy-tag');
    checkTag = document.querySelector('.check-tag');
    
    toggleLeft = document.querySelector('.toggle-left');
    toggleRight = document.querySelector('.toggle-right');
    buttonL2 = document.querySelectorAll('.button-l2');
    buttonL1 = document.querySelectorAll('.button-l1');

    

    
});
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');

var str = `@stub.function(
    schedule=modal.Period(days=1),
    retries=3,
  timeout=600,
)
def perform_heavy_computation():
...`;

function func () {
    navigator.clipboard.writeText(str).then(function () {
        checkTag.style.visibility = 'visible';
        copyTag.style.visibility = 'hidden';
        console.log(str)
    }).catch(function (err) {
        // Handle clipboard write error
        console.error('Clipboard write failed: ', err);
    });
}
// Define togRight in the global scope
function togRight() {
    toggleLeft.style.border = 'none';
    toggleLeft.style.background = 'none';
    toggleLeft.style.color = 'white';

    toggleRight.style.border = '1px solid rgba(53, 255, 53, 0.749)';
    toggleRight.style.background = 'rgba(53, 255, 53, 0.068)';
    toggleRight.style.color = 'rgba(53, 255, 53, 0.749)';

    for (var i = 0; i < buttonL1.length; i++) {
        buttonL1[i].style.visibility = 'hidden';
        buttonL2[i].style.visibility='visible'
    }
}
function togLeft() {
    toggleRight.style.border = 'none';
    toggleRight.style.background = 'none';
    toggleRight.style.color = 'white';

    toggleLeft.style.border = '1px solid rgba(53, 255, 53, 0.749)';
    toggleLeft.style.background = 'rgba(53, 255, 53, 0.068)';
    toggleLeft.style.color = 'rgba(53, 255, 53, 0.749)';

    for (var i = 0; i < buttonL2.length; i++) {
        buttonL2[i].style.visibility = 'hidden';
        buttonL1[i].style.visibility='visible';
    }
}
