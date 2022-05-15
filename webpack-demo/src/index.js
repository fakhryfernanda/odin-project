import _ from 'lodash';
import myName from './myName';
import {functionOne, functionTwo} from './myModule';

function component() {
    const element = document.createElement('div');
  
    // lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // use your own function
    element.textContent = myName('Cody');
  
    return element;
}
  
document.body.appendChild(component());