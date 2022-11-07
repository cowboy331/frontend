function positionMessagekk() {
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement("message",200,100,10);
}

// window.onload=positionMessagekk;
addLoadEvent(positionMessagekk);
addLoadEvent(moveElement);