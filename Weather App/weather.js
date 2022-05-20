class Weather {
  constructor(zip) {
    this.apiKey = '9e8510e81f3373dd54fa72c5102f4dbc';
    this.zip = '08831';
  }
  //fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(zip) {
    this.zip = zip;
  }

}