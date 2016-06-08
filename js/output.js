var view = {
    title: "Portfolio",
    date: function () {
        var today = new Date();
        return today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
        },
    name: "Khayyam Saleem",
    occupation: "developer"
};

var out = "This is my {{title}}.<br> Today is {{date}}.<br> My name is {{name}}.<br> I am a {{occupation}}.";

var output = Mustache.render(out, view);

document.getElementById("output").innerHTML = output;

var name = document.createElement("DIV");
document.body.appendChild(name);
document.body.div.setAttribute("id", "output");
var style = document.createElement("STYLE");
var outputStyle = document.createTextNode('#output {text-align: center; font-family: "Roboto", sans-serif; font-weight: normal; font-size: 1em; color: #000;}');
style.appendChild(outputStyle);
document.head.appendChild(style);
