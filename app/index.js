/**
 * Created by Mili on 2017/6/14.
 */

// import _ from 'lodash';
import Person from './person.js';
import './index.less';

// function component () {
//   var element = document.createElement('div');
//
//   /* 需要引入 lodash，下一行才能正常工作 */
//   element.innerHTML = _.join(['Hello','World'], ' ');
//
//   return element;
// }

let str = `<h3>Hello World</h3>`;
document.querySelector('#app').innerHTML = str;

let someone = new Person('张三丰', 120);
console.log(someone.say());


