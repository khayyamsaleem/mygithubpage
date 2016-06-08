var view = {
    title: "Portfolio",
    date: function () {
        var today = new Date();
        return today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
        },
    name: "Khayyam Saleem",
    occupation: "developer"
};

var out = "This is my {{title}}. Today is {{date}}. My name is {{name}}. I am a {{occupation}}.";

var output = Mustache.render(out, view);

var outObj = document.getElementById("output")[0];
outObj.innerHTML = output;
