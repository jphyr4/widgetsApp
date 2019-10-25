
$(document).ready(startApp);

function startApp(){
    var a = new API();
    $(".findButton").on("click", a.getValueFromInput);
}

class API{
    constructor(){
       this.getValueFromInput = this.getValueFromInput.bind(this);
    }

    getValueFromInput(){
        var cityName = $(".getValue").val();
        console.log(typeof cityName);
        this.getData(cityName);
    }

    getData(cityName){
        var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&APPID=3e5232bce94ee4b7b565b64182f6468c";
        var config = {
            type: "POST",
			dataType: "json",
			url: apiURL,
			success: (response) => {
                console.log(response);
            },
			error: (response) => {
				alert ("Request Fail");
			}

        }
        $.ajax(config)
    }
}

