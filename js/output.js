var view = {
    title: "Portfolio",
    date: function () {
        var today = new Date();
        return today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
        },
    name: "Khayyam Saleem",
    occupation: "developer"
};

var out = "<div>My name is {{name}}.</div><div>I am a {{occupation}}.</div><div>This is my {{title}}.</div><div>Today is {{date}}.</div>";

var output = Mustache.render(out, view);

document.getElementById("output").innerHTML = output;

var style = document.createElement("STYLE");
var outputStyle = document.createTextNode('#output {text-align: center; font-family: "Roboto", sans-serif; font-weight: normal; font-size: 1em; color: #000;}');
style.appendChild(outputStyle);
document.head.appendChild(style);
