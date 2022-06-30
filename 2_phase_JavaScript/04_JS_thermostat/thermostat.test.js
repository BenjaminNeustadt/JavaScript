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


})







// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

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