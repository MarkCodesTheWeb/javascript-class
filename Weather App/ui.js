class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.description;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute('src', weather.weather[0].icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity};`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}