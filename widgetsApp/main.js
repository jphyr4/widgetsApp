
$(document).ready(startApp);

function startApp(){
    var a = new API();
    a.getData();
}

class API{
    constructor(){
    }

    handleEvent(){
    }

    getData(){
        var config = {
            type: "POST",
			dataType: "json",
			url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3e5232bce94ee4b7b565b64182f6468c",
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
