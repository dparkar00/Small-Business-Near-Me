console.log(document);
console.log(window.location);
if (window.location.href.indexOf('target.com/c/fresh-flowers') > -1) {
    console.log('in here');
    var elem = document.createElement("div");
    var mainC = document.getElementById("root");
    elem.appendChild(document.createTextNode("Hello there!"));
    document.body.insertBefore(elem, mainC);
}

