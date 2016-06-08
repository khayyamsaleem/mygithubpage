var view = {
    title: "Portfolio",
    date: function () {
        var today = new Date();
        return "<p>" + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + "</p>";
        },
    name: "Khayyam Saleem",
    occupation: "developer"
};

var out = "This is my {{title}}. Today is {{date}}. My name is {{name}}. I am a {{occupation}}.";

var output = Mustache.render(out, view);

document.getElementById("output").innerHTML = output;
