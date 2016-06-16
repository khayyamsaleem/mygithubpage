var person = {
    first: 'Khayyam',
    last: 'Saleem',
    dob: '12/12/1997'
};

var template = "<h1>{{first}} {{last}}</h1><br><br><p>{{dob}}</p>";

var html = Mustache.to_html(template, person);
$('#test').html(html);

$( "form" ).submit(function( event ) {
    if ( $( "input:first" ).val() === "12" && 
         $( "input:second" ).val() === "12" &&
         $( "input:third" ).val() === "1997" ) {
         $ ( "bday" ).text("That is your birthday!").show();
         return;
    }

    $( "bday" ).text( "Nah" ).show().fadeOut( 1000 );
    event.preventDefault();
});




