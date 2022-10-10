// mood='happy';
// age=33;

// alert(mood);
// alert(age);

// var count=1;
// while (count<11) {
    //     alert(count);
    //     count++;
    // }
    
function addLoadEvent() {
    var oldload=window.onload;
    if (typeof window.onload!='function') {
        window.onload=func;
    }
    else {
        window.onload=function(){
            oldload();
            func();
        }
    }
}
    
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement) {
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if(!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description= document.createElement("p");
    description.setAttribute("id","description");
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this)? false:true;
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    // var source=whichpic.getAttribute('href');
    var source=whichpic.href;
    var placeholder=document.getElementById('placeholder');
    if(placeholder.nodeName!="IMG") return false;
    // placeholder.setAttribute('src',source);
    placeholder.src=source;
    if (document.getElementById("description")) {
        // var text=whichpic.getAttribute("title");
        var text=whichpic.title;
        var description=document.getElementById("description");
        // if(description.firstChild.nodeValue==3) {
        //     description.firstChild.nodeValue=text;
        // }
        description.firstChild.nodeValue=text;
    }
    return false;
}


// alert(description.nodeValue)
function countBodyChildren() {
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length); 
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);


window.onload=function() {
    var para=document.createElement("p");
    var txt1=document.createTextNode("This is ");
    var emphasis=document.createElement("em");
    var txt2=document.createTextNode("my");
    var txt3=document.createTextNode(" content.");
    para.appendChild(txt1);
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
}