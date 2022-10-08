// mood='happy';
// age=33;

// alert(mood);
// alert(age);

// var count=1;
// while (count<11) {
//     alert(count);
//     count++;
// }

function showPic(whichpic) {
    var source=whichpic.getAttribute('href');
    var placeholder=document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
    // alert(description.nodeValue)
    }
    
function countBodyChildren() {
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length); 
}
    
    window.onload=countBodyChildren;
    // window.onload=showPic;
    