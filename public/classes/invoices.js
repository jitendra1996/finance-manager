export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    formate() {
        return `${this.client} - ${this.details} - $${+this.amount}`;
    }
}
