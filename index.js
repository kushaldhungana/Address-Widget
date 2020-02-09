let template= document.getElementById('lol');

const table={'28759':'Bremen','97070':'Würzburg','20095':'Hamburg'};

class formField extends HTMLElement{
  constructor(){
    super();
    let shadow = this.attachShadow({
              'mode': 'open'
    });
    shadow.appendChild(template.content.cloneNode(true))
    const zipElement = shadow.querySelector('.zip');
    zipElement.addEventListener('input', (x) => {
      const targetValue = x.target.value;
      if (targetValue == null)
        return;
      if (targetValue in table){
        console.log("FOUND:"+table[targetValue]);
        //set value of city
        shadow.querySelector('.city').value=table[targetValue];
      }
    })


    const formElement = shadow.querySelector('#add');
    formElement.addEventListener('submit',(e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Array.from(formData.entries()).reduce((memo, pair) => ({
      ...memo,
      [pair[0]]: pair[1],
    }), {});
    shadow.querySelector('#output').innerHTML = JSON.stringify(data);
  });
  }
}

window.customElements.define('address-field', formField);
