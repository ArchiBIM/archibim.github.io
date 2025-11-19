    Handlebars.registerHelper("addone", function(item) {
        return item + 1;
    });

    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    document.getElementById('container')
        .innerHTML = template(data);

    let group = document.getElementsByClassName('group');
    [].forEach.call(group, element => {
        let client = element.querySelector('div');
        client.addEventListener("click", function() {
            let links = element.getElementsByTagName('a');
            [].forEach.call(links, link => {
                let visible = link.style.display;
                if (visible === "block") {
                    link.style.display = "none";
                } else {
                    link.style.display = "block";
                }
            });
        }, { capture: true });
    });