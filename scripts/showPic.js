// mood='happy';
// age=33;

// alert(mood);
// alert(age);

// var count=1;
// while (count<11) {
//     alert(count);
//     count++;
// }

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
    var source=whichpic.getAttribute('href');
    var placeholder=document.getElementById('placeholder');
    if(placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute('src',source);
    if (document.getElementById("description")){
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("description");
        if(description.firstChild.nodeValue==3){
            description.firstChild.nodeValue=text;
        }
    }
    return true;
}


// alert(description.nodeValue)
function countBodyChildren() {
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length); 
}



window.onload=countBodyChildren;
    // window.onload=showPic;
    