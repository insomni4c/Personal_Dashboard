class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.clouds = document.getElementById('w-clouds');
    //this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {

  //

    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = Math.round(weather.main.temp - 273.15) + '\xB0 C';
    this.icon.setAttribute('id', weather.weather[0].icon);
    if(this.desc.textContent==='haze' ) {
     document.body.className = 'rainy';
   }
  else if(this.desc.textContent==='cloud' ) {
 	document.body.className = 'cloudy';
} else if( this.desc.textContent==='clear sky') {
  document.body.className = 'sunny';
 }
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.clouds.textContent = `Clouds: ${weather.clouds.all}`;
    //this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;

  }
}
