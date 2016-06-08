var view = {
    title: "Portfolio",
    date: function () {
        var today = new Date();
        return today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
        },
    name: "Khayyam Saleem educating in fartfart 101 ",
    occupation: "professional tooter"
};

var out = "This is my {{title}}. Today is {{date}}. My name is farty {{name}}. I am a {{occupation}} actually i am a pro farter.";

var output = Mustache.render(out, view);

document.getElementById("output").innerHTML = output;
