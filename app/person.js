/**
 * Created by Mili on 2017/6/15.
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    return `我是${this.name},我今年${this.age}岁了。厉害吧！`;
  }
}

export default Person;