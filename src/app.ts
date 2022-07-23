import { Invoice } from "./classes/Invoice.js";
import { ListUITemplate } from "./classes/ListUITemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.getElementsByClassName('new-item-form')[0] as HTMLFormElement;

const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListUITemplate(ul);
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let option = type.options[type.selectedIndex].value;

    let doc : HasFormatter;

    if(option === 'invoice'){
        const doc = new Invoice(tofrom.value,details.value,+amount.value);
        list.render(doc,option,'end');
    }else{
        const doc = new Payment(tofrom.value,details.value,+amount.value);
        list.render(doc,option,'end');
    }
})
