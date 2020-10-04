console.log(document);
console.log(window.location);

var keywords = ['fresh-flowers', 'grocery', 'furniture', 'shoes', 'movies-music-books', 'beauty'];
keywords.forEach(term => {
    if (window.location.href.indexOf('target.com/c/'+term) > -1) {
        console.log('in here');
        var elem = document.createElement("div");
        var mainC = document.getElementById("root");
        elem.appendChild(document.createTextNode("Hello there!"));
        
        elem.style.color="#F0FFFF";
        document.body.insertBefore(elem, mainC);
    }
});

