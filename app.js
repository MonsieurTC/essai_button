var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var btn2 = document.getElementById('myBtn2');
var span = document.getElementsByClassName('close')[0];

var modal_amenagement = document.getElementById('myModal_amenagement');
var btn_amenagement = document.getElementById('myBtn_amenagement');
var btn2_amenagement = document.getElementById('myBtn2_amenagement');
var span_amenagement = document.getElementsByClassName('close_amenagement')[0];


// Modal jardiner
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

// modal amenagement
btn_amenagement.onclick = function() {
    modal_amenagement.style.display = "block";
}

btn2_amenagement.onclick = function() {
    modal_amenagement.style.display = "block";
}

span_amenagement.onclick = function() {
    modal_amenagement.style.display = "none";
}

window.onclick = function() {
    if(event.target == modal_amenagement) {
        modal_amenagement.style.display = "none";
    }
}