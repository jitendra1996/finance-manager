import { Invoice } from "./classes/invoices.js";

const form = document.getElementsByClassName('new-item-form')[0] as HTMLFormElement;

const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;



form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(+amount.value);

    if(type.value = 'invoice'){
        const invoice = new Invoice(tofrom.value,details.value,+amount.value);
        console.log(invoice.formate());
    }else{
        return 'payments';
    }
})