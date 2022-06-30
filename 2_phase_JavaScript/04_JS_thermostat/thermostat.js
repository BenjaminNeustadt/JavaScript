class Thermostat {
  constructor() {
    this.thermostat = 20
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



