//porpad ID 723846

function vypis(udaje) {
    console.log(udaje);
}

$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily",
    {id: "723846", units: 'metric', APPID: "8641355d0bdfa52a49f4e9a42560adf0"},
    vypis);
//
// var tmpl = " <strong>Aktuálne počasie</strong><br>" +
//     "<p>Teplota: {{main.temp}}°C</p> " +
//     "<p>Tlak: {{main.pressure}}</p> " +
//     "<p>Oblačnosť: {{clouds.all}}% </p>" +
//     "<p>Vlhkosť: {{main.humidity}}</p>";

function spracuj(udaje) {
    $("#dnesnepocasie").html(Mustache.render(actualWeather, udaje));
}
var udaje = jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather",
    {id: "723846", units: 'metric', APPID: "8641355d0bdfa52a49f4e9a42560adf0"},
    spracuj);


function predpoved(getPredpoved) {

    $("#predpoved").html(Mustache.render(tableForecast, getPredpoved));
}
var getPredpoved = jQuery.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily",
    {id: "723846", units: 'metric', APPID: "8641355d0bdfa52a49f4e9a42560adf0"},
    predpoved);


var tableForecast = "<p><strong>Predpoveď počasia pre Poprad na nasledujúcich 7 dni</strong></p>" +
    "<table class=\"table\"><tbody><tr class=\"text-primary\"><th>Deň</th><th>Teplota</th><th>Tlak</th><th>Oblačnosť</th><th>Vlhkosť</th></tr>" +
    "<tr><td>Zajtra</td><td> {{list.0.temp.eve}} °C</td><td> {{list.0.pressure}} hPa</td><td> {{list.0.clouds}}%</td><td> {{list.0.humidity}} %</td></tr>" +
    "<tr><td>Pozajtra</td><td>{{list.1.temp.eve}}°C</td><td> {{list.1.pressure}} hPa</td><td> {{list.1.clouds}}%</td><td> {{list.1.humidity}} %</td></tr>" +
    "<tr><td>o 3 dni</td><td>{{list.2.temp.eve}}°C</td><td> {{list.2.pressure}} hPa</td><td> {{list.2.clouds}}%</td><td> {{list.2.humidity}} %</td></tr>" +
    "<tr><td>o 4 dni</td><td>{{list.3.temp.eve}}°C</td><td> {{list.3.pressure}} hPa</td><td> {{list.3.clouds}}%</td><td> {{list.3.humidity}} %</td></tr>" +
    "<tr><td>o 5 dni</td><td>{{list.4.temp.eve}}°C</td><td> {{list.4.pressure}} hPa</td><td> {{list.4.clouds}}%</td><td> {{list.4.humidity}} %</td></tr>" +
    "<tr><td>o 6 dni</td><td>{{list.5.temp.eve}}°C</td><td> {{list.5.pressure}} hPa</td><td> {{list.5.clouds}}%</td><td> {{list.5.humidity}} %</td></tr>" +
    "<tr><td>o 7 dni</td><td>{{list.6.temp.eve}}°C</td><td> {{list.6.pressure}} hPa</td><td> {{list.6.clouds}}%</td><td> {{list.6.humidity}} %</td></tr>" +
    "</tbody></table>" +
    "<br></div>";

var actualWeather = "<strong>Aktuálne počasie</strong><table class=\"table\"><tbody>" +
    "<tr><th class=\"text-primary\">Teplota</th><td>{{main.temp}}°C</td></tr>" +
    "<tr><th class=\"text-primary\">Tlak</th><td>{{main.pressure}} hPa</td></tr>" +
    "<tr><th class=\"text-primary\">Oblačnosť</th><td>{{clouds.all}} %</td></tr>" +
    "<tr><th class=\"text-primary\">Vlhkosť</th><td>{{main.humidity}} %</td></tr>" +
    "</tbody></table>" +
    "<br></div>";

