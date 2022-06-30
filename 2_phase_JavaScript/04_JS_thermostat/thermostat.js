class Thermostat {
  constructor() {
    this.thermostat = 20
  }

  getTemperature() {
    return (this.thermostat);
  }

  up(){
    this.thermostat = this.thermostat + 1
  }

  down(){
    this.thermostat = this.thermostat - 1
  }
}



module.exports = Thermostat;



