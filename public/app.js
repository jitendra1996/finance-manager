import { Invoice } from "./classes/invoices.js";
const form = document.getElementsByClassName('new-item-form')[0];
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(+amount.value);
    if (type.value = 'invoice') {
        const invoice = new Invoice(tofrom.value, details.value, +amount.value);
        console.log(invoice.formate());
    }
    else {
        return 'payments';
    }
});
