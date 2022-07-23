import { Invoice } from "./classes/Invoice.js";
import { ListUITemplate } from "./classes/ListUITemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.getElementsByClassName('new-item-form')[0];
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
const list = new ListUITemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let option = type.options[type.selectedIndex].value;
    let doc;
    if (option === 'invoice') {
        const doc = new Invoice(tofrom.value, details.value, +amount.value);
        list.render(doc, option, 'end');
    }
    else {
        const doc = new Payment(tofrom.value, details.value, +amount.value);
        list.render(doc, option, 'end');
    }
});
