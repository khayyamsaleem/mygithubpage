var person = {
    first: '',
    last: '',
    dob: ''
};

var template = "<h1>{{first}} {{last}}</h1>";

var html = Mustache.to_html(template, person);
$('#test').html(html);

