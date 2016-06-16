var person = {
    first: 'Khayyam',
    last: 'Saleem',
    dob: '12/12/1997'
};

var template = "<h1>{{first}} {{last}}</h1><br><br><p>{{dob}}</p>";

var html = Mustache.to_html(template, person);
$('#test').html(html);

