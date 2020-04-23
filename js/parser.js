    var data = {
        dirs: [
            "SMC Paisley 3 floor",
            "SMC Paisley 4 floor",
            "SMC Paisley roof",
        ]
    }

    Handlebars.registerHelper("addone", function(item) {
        return item + 1;
    });

    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    document.getElementById('container')
        .innerHTML = template(data);