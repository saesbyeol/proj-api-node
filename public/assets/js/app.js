// FUNCTIONS
function getDataFromAPI(city) {
    axios.get('/api/city/'+city)
    .then(function (response) {
       let info = response.data; 
       
       $("#txtAppend").text(info.summary+"\n\n");
       
       $("#txtAppend").append("Current temperature in "+city+" is "+info.temperature+" degrees Celsius");

       $("#displyData").slideDown(900);

       $("#getInformations button").attr("disabled", false);
       $("#getInformations button").html("Display");
    }).catch(function(error) {
        $("#alert").slideDown();
        $("#getInformations button").attr("disabled", false);
        $("#getInformations button").html("Display");
        $("#displyData").hide();
    });
}

// CALLBACKS
$(document).ready(function() {
    $("#displyData").hide();
    $("#alert").hide();
})

$(document).on("change", "#selectCity", function() {
    $("#getInformations button").attr("disabled", false);
    $("#alert").hide();
});

$(document).on("submit", "#getInformations", function(e) {
    e.preventDefault();
     
    $("#getInformations button").html("<i class='fas fa-spinner fa-spin'></i> Loading");
    $("#getInformations button").attr("disabled", true);
    getDataFromAPI($("#selectCity").val());

    return;
})