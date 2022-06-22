
class User {
  
  constructor(name) {
    this.name = name;

  }
  getIntroduction(name) {
    console.log('Hi, my name is ' + this.name)
  }
  // console.log(`Hi, my name is ${this.name}`) IS THE SAME THING, as # in Ruby. 
  
  getName(name) {
    console.log(this.name);
  }
}

const user = new User('Benjamin');

user.getName();
// // 'Uma'


user.getIntroduction();
// 'Hi, my name is Uma'
