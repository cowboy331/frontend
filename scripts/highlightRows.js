function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows=document.getElementsByTagName("tr");
    for (var i=0; i<rows.length; i++) {
        rows[i].onmouseover=function() {
            this.style.fontWeight="bold";
        }
        rows[i].onmouseout=function(){
            this.style.fontWeight="normal";
        }
    }
}
function addClass(element, value){
    if(!element.className) {
        element.className=value;
    }else {
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=newClassName;
    }
}
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers=document.getElementsByTagName("h1")
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem=getNextElement(headers[i].nextSibling);
        addClass(elem, "intro");
    }
}
function styleElementSiblings(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var elems=document.getElementsByTagName(tag);
    var elem;
    for (var i=0; i<elems.length; i++) {
        elem=getNextElement(headers[i].nextSibling);
        addClass(elem, "intro");
    }
}
addLoadEvent(function(){
    styleElementSiblings("h1", "intro");
});