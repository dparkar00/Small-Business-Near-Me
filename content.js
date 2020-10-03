console.log(document);
console.log('ajdklfsjkld', window.location);
if (window.location.href.indexOf('target.com/c/fresh-flowers') > -1) {
    console.log('in here');
}

var elem = document.createElement("div");
elem.appendChild(document.createTextNode("Hello there!"));
document.body.appendChild(elem);
