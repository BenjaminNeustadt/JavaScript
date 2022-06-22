class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
    console.log(`${this.name}`);
  }

  getIntroduction() {
    console.log(`Hi, my name is ${this.name}`);
    return (`Hi, my name is ${this.name}`);
  }
}

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count(users) {
    console.log(this.users.length);
  }

  getNames(users) {
    return (this.users.map((element) => { 
     (element.getName()) 
    }))
  } 

  getIntroductions() {
    console.log(this.users.map(n => n.getIntroduction()));
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

const userBase = new UserBase(users);

userBase.count();
userBase.getNames();
userBase.getIntroductions();


