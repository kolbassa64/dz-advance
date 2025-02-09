class Car {
    #carInfo = {
        make: '',
        model: '',
        run: ''
    }
    
    constructor(make, model, run){
        this.#carInfo.make = make
        this.#carInfo.model = model
        this.#carInfo.run = run

    }
    info(){
        console.log(`Марка этой машины :${this.#carInfo.make}, ее модель :${this.#carInfo.model}, столько отбегала :${this.#carInfo.run}`)
    }
    get run(){
        return this.#carInfo.run;
    }
    set run(run){
        if (run < 0) {
            console.log("Нельзя скрутить пробег в отрицательный ");
            return;
        }
        this.#carInfo.run = run
    }
}

