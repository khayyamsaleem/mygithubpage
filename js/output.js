var view = {
    title: "Khayyam",
    calc: function () {
        return 2 + 4;
    }
};

var output = Mustache.render("{{title}} spends {{calc}}", view);

document.getElementById("output").innerHTML = output;
