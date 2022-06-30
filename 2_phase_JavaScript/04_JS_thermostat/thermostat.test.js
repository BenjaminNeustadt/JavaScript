const Thermostat = require('./thermostat')

describe('thermostat', () => {
  it ('returns 20 as the starting temp', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it ('temp increases by 1 when up() is called on an instance', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  })

  it ('temp decreases by 1 when down() is called on an instance', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(18);
  })

  it ('does not decrease below 10', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  })

  it ('when PSM on, max temp is 25', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true)
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })

  it ('when PSM off, max temp is 32, and temp can be higher than 25', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  })

  it ('when reset method is called, this.thermostat = 20', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  })
})



// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20


// - - - - - - - - - - - - - - - - - - - - - - - - - -- -

// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20 - - - - -> DONE

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22 - - - - -> DONE

// thermostat.down();
// thermostat.getTemperature(); // should now return 21 - - - - - -> DONE

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached) - - - - - - - - DONE