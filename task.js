export class Task {

    constructor(task) {
        this.task = task;
    }

    run (name) {
        console.log(`${name} получил задачу: ${this.task}`);
    }
}