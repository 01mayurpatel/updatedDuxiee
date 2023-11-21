var copyTag;
var checkTag;
var text1;
var text2;
var toggleLeft;
var toggleRight;
var buttonL2;
var buttonL1;

function togRight() {
    toggleLeft.style.border = 'none';
    toggleLeft.style.background = 'none';
    toggleLeft.style.color = 'white';

    toggleRight.style.border = '1px solid rgba(53, 255, 53, 0.749)';
    toggleRight.style.background = 'rgba(53, 255, 53, 0.068)';
    toggleRight.style.color = 'rgba(53, 255, 53, 0.749';

    for (var i = 0; i < buttonL1.length; i++) {
        buttonL1[i].style.visibility = 'hidden';
        buttonL2[i].style.visibility = 'visible';
    }
}

function togLeft() {
    toggleRight.style.border = 'none';
    toggleRight.style.background = 'none';
    toggleRight.style.color = 'white';

    toggleLeft.style.border = '1px solid rgba(53, 255, 53, 0.749)';
    toggleLeft.style.background = 'rgba(53, 255, 53, 0.068)';
    toggleLeft.style.color = 'rgba(53, 255, 53, 0.749';

    for (var i = 0; i < buttonL1.length; i++) {
        buttonL2[i].style.visibility = 'hidden';
        buttonL1[i].style.visibility = 'visible';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    copyTag = document.querySelector('.copy-tag');
    checkTag = document.querySelector('.check-tag');

    toggleLeft = document.querySelector('.toggle-left');
    toggleRight = document.querySelector('.toggle-right');
    buttonL1 = document.getElementsByClassName('button-l1');
    buttonL2 = document.getElementsByClassName('button-l2');
});
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');
var str = text1.textContent + "\n" + text2.textContent;
function func() {
    navigator.clipboard.writeText(str).then(function () {
        checkTag.style.visibility = 'visible';
        copyTag.style.visibility = 'hidden';
        console.log(str);
    }).catch(function (err) {
        // Handle clipboard write error
        console.error('Clipboard write failed: ', err);
    });
}

// For Table

//Row 1

var tableT1 = document.getElementById('table-t1');
var tableT1S = document.getElementById('table-t1-s');
var tableT1T = document.getElementById('table-t1-t');

tableT1S.style.fontWeight="600"
var i = 0.0;
const timer = setInterval(function(){
    
    const t1 = setInterval(function(){
        tableT1T.innerHTML=i;
        i = i + 0.1;
        i = Number(i.toPrecision(2))
        if(i<=0.5){
            if(window.innerWidth<610){
                tableT1S.innerHTML="pending"
            }else{
                tableT1S.innerHTML="... pending"
            }
            tableT1S.style.backgroundColor="rgba(255, 0, 0, 0.306)"
            
            
        }
        if(i>0.5 && i<1.8){
            if(window.innerWidth<610){
                tableT1S.innerHTML="processing"
            }else{
                tableT1S.innerHTML="... processing"
            }
            tableT1S.style.backgroundColor="rgba(255, 242, 0, 0.306)"
            
        }
        
        if (i === 1.9) {
            if(window.innerWidth<610){
                tableT1S.innerHTML="Successfull"
            }else{
                tableT1S.innerHTML="✓ Successfull"
            }
            tableT1S.style.backgroundColor="rgba(0, 255, 76, 0.306)"
            i=0.0;
            clearInterval(t1); // Use clearInterval, not closeInterval
        }



    }, 100)
    
}, 3000);


// Row 2

//Row 1

var tableT2 = document.getElementById('table-t2');
var tableT2S = document.getElementById('table-t2-s');
var tableT2T = document.getElementById('table-t2-t');

tableT2S.style.fontWeight="600"
var i = 0.0;
const timer2 = setInterval(function(){
    
    const t2 = setInterval(function(){
        tableT2T.innerHTML=i;
        i = i + 0.1;
        i = Number(i.toPrecision(2))
        if(i<=0.5){
            if(window.innerWidth<610){
                tableT2S.innerHTML="pending"
            }else{
                tableT2S.innerHTML="... pending"
            }
            tableT2S.style.backgroundColor="rgba(255, 0, 0, 0.306)"
            
            
        }
        if(i>0.5 && i<1.8){
            if(window.innerWidth<610){
                tableT2S.innerHTML="processing"
            }else{
                tableT2S.innerHTML="o processing"
            }
            tableT2S.style.backgroundColor="rgba(255, 242, 0, 0.306)"
            
        }
        
        if (i === 1.9) {
            if(window.innerWidth<610){
                tableT2S.innerHTML="Successfull"
            }else{
                tableT2S.innerHTML="✓ Successfull"
            }
            tableT2S.style.backgroundColor="rgba(0, 255, 76, 0.306)"
            i=0.0;
            clearInterval(t2); // Use clearInterval, not closeInterval
        }



    }, 100)
    
},5000);

// ROW 3


var tableT3 = document.getElementById('table-t3');
var tableT3S = document.getElementById('table-t3-s');
var tableT3T = document.getElementById('table-t3-t');


var i = 0.0;
const timer3 = setInterval(function(){
    
    const t3 = setInterval(function(){
        tableT3T.innerHTML=i;
        i = i + 0.1;
        i = Number(i.toPrecision(2))
        if(i<=0.5){
            if(window.innerWidth<610){
                tableT3S.innerHTML="pending"
            }else{
                tableT3S.innerHTML="o pending"
            }
            tableT3S.style.backgroundColor="rgba(255, 0, 0, 0.306)"
            
            
        }
        if(i>0.5 && i<1.8){
            if(window.innerWidth<610){
                tableT3S.innerHTML="processing"
            }else{
                tableT3S.innerHTML="o processing"
            }
            tableT3S.style.backgroundColor="rgba(255, 242, 0, 0.306)"
            
            
        }
        
        if (i === 1.9) {
            
            if(window.innerWidth<610){
                tableT3S.innerHTML="Successfull"
            }else{
                tableT3S.innerHTML="✓ Successfull"
            }
            tableT3S.style.backgroundColor="rgba(0, 255, 76, 0.306)"
            i=0.0;
            clearInterval(t3); // Use clearInterval, not closeInterval
        }



    }, 100)
    
}, 10000);



var exec = document.getElementById('exec');
if(window.innerWidth<610){
    exec.innerHTML="Exe...";
}else{
    exec.innerHTML="Execution"
}