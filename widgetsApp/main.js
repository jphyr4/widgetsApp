
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
        this.getData(cityName);
        $(".box").addClass("animate");
    }

    getData(cityName){
        var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&APPID=3e5232bce94ee4b7b565b64182f6468c";
        var config = {
            type: "POST",
			dataType: "json",
			url: apiURL,
			success: (response) => {
                console.log(response);
                this.updateElements(response);
            },
			error: (response) => {
				alert ("Request Fail");
			}

        }
        $.ajax(config)
    }

    updateElements(cityDOM){
      var title = cityDOM.name;
      var fehr = cityDOM.main.temp;
      var newWeather = cityDOM.weather[0].description;

      fehr = (fehr - 273.15) * 1.8 +32;

      $(".cityUpdate").text(title);
      $(".ferUpdate").text(fehr.toFixed(0));
      $(".description").text(newWeather);



    }
}



//api.openweathermap.org/data/2.5/weather?q=Los Angeles&APPID=3e5232bce94ee4b7b565b64182f6468c
