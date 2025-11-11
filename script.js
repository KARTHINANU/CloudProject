
var API_ENDPOINT = "https://v02n0c1x46.execute-api.eu-north-1.amazonaws.com/prod";


const WEATHER_API_KEY = "6eca9a26a0eeb81bcbf065dd7f8b12e1";


document.getElementById("destination").addEventListener("blur", function() {
    const city = document.getElementById("destination").value.trim();
    if (!city) {
        document.getElementById("weatherInfo").innerHTML = "";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"6eca9a26a0eeb81bcbf065dd7f8b12e1"}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const desc = data.weather[0].description;
                document.getElementById("weatherInfo").innerHTML =
                    `🌤️ Weather in ${city}: ${temp}°C, ${desc}`;
            } else {
                document.getElementById("weatherInfo").innerHTML = "⚠️ City not found.";
            }
        })
        .catch(() => {
            document.getElementById("weatherInfo").innerHTML = "⚠️ Unable to fetch weather data.";
        });
});


document.getElementById("savepassenger").onclick = function() {
    var inputData = {
        "passengerid": $('#passengerid').val(),
        "name": $('#name').val(),
        "source": $('#source').val(),
        "destination": $('#destination').val()
    };

    if (!inputData.name || !inputData.source || !inputData.destination) {
        alert("Please fill all fields before saving!");
        return;
    }

    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            document.getElementById("passengersaved").innerHTML = " Passenger Data Saved Successfully!";
        },
        error: function() {
            alert("Error saving passenger data.");
        }
    });
};


document.getElementById("getpassengers").onclick = function() {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            $('#passengerTable tbody').empty();

            
            if (typeof response === "string") {
                response = JSON.parse(response);
            }

            jQuery.each(response, function(i, data) {
                $("#passengerTable tbody").append(
                    "<tr><td>" + data['passengerid'] + "</td>" +
                    "<td>" + data['name'] + "</td>" +
                    "<td>" + data['source'] + "</td>" +
                    "<td>" + data['destination'] + "</td></tr>"
                );
            });
        },
        error: function() {
            alert("Error retrieving passenger data.");
        }
    });
};
