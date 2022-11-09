function prepareSlideshow() {
    // var slideshow = document.createElement("div");
    // slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/topics.gif");
    preview.setAttribute("alt", "building blocks of web design");
    preview.setAttribute("id", "preview");
    // slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    // insertAfter(preview, list);
    list.lastChild.insertBefore(preview);
 }

addLoadEvent(prepareSlideshow);
// addLoadEvent(moveElement);