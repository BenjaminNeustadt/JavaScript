class Thermostat {
  constructor() {
    this.thermostat = 20 // Amir suggested title this.current_temperature
    this.psm = true
  }

  getTemperature() {
    return (this.thermostat);
  }

  up(){
    if (this.psm == true && this.thermostat < 25) {
      this.thermostat += 1;
    }else if (this.psm == false && this.thermostat < 32) {
      this.thermostat += 1;
    }
  }

  // we start at 20. psm() = false; max_temp = 32; we up() until 30; we switch psm() = true;
  // we ask to up(); this.psm = true but this.thermostat > 25; therefore no increment possible.
  // so if we go into psm, the tthis.thermostat should go to less than 25.

  // this is a loop

  //ASK AMIR ABOUT THIS

  setPowerSavingMode(psm){
    this.psm = psm;
  }

  down(){
    if (this.thermostat > 10){
      this.thermostat = this.thermostat - 1
    }else{
      return this.thermostat
    }
  }
  reset(){
    this.thermostat = 20
  }
}

module.exports = Thermostat;



