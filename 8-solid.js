class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    #calculateTotal() {
       
    }
}

class FixedBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours; // Считаем стоимость по часам
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}