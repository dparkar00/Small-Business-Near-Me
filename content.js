console.log(document);
console.log(window.location);

var keywords = ['fresh-flowers', 'grocery', 'furniture', 'shoes', 'movies-music-books', 'beauty'];
keywords.forEach(term => {
    if (window.location.href.indexOf('target.com/c/'+term) > -1) {
        console.log('in here');
        var elem = document.createElement("div");
        var mainC = document.getElementById("root");
        let words = 'Are you looking for ' + term + '?\nHere are some small businesses near you!\n';
        var link = document.createAttribute("href");
        link.value = ('https://www.yelp.com/search?find_desc=' + term);
        elem.appendChild(document.createTextNode(words));
        document.body.insertBefore(elem, mainC);
        document.body.append(link, mainC);
    }
});

