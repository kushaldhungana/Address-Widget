let template= document.getElementById('lol');

const table={'28759':'Bremen','97070':'Würzburg','20095':'Hamburg'};

class formField extends HTMLElement{
  constructor(){
    super();
    let shadow = this.attachShadow({
              'mode': 'open'
    });
    shadow.appendChild(template.content.cloneNode(true))
    function display(){
        const form= shadow.getElementById('city').value;
        alert(form);
    }
    }
}
/*
function display(){
    const form= shadow.getElementById('city').value;
    alert(form);
}
*/
window.customElements.define('address-field', formField);



/*
import {html, render} from 'lit-html';

const template= (name)=>{
  html`<div> Hello ${name} </div>`;
}
const address=()=>{
  html`<div> <input type="number" name="Zip"> </div>`
}

render(template('Ke cha keta'), document.body);
*/
