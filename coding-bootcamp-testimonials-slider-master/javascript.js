var test = document.getElement


function btn_click(message){
    var content = document.getElementById("content1");
    var cssClass = content.getAttribute('class')
    var setNewClass = 'slide-out'

    content.style.animation = "tostart 3s linear forwards"
    content.style.display = 'none';
}

