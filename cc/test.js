var Chav = {    
    firstName : "Chav",        
    lastName : "Whatever",
    description : "Chav works at ZEFR! He leads our engineering team in building ZEFR software.",    
    selector : ".add-Chav"
}

var Charlie = {
    firstName : "Charlie",   
    lastName : "Jones",    
    description : "Chav works at ZEFR! He is a claimer on our RightsID publishing team",  
    selector : ".add-Charlie"
}

var Jason = {
    firstName : "Jason",
    lastName : "Nothing",
    description: "Jason is on our Influencer team. He is helps put together projects for our clients on YouTube.",
    selector : ".add-Jason"
 }

var team = [Chav, Charlie, Jason];

for (var i of team) {
    $(i.selector).on("click", () => {
        $(this).fadeOut("slow");
    });
}
