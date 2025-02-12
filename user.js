export class User {

    constructor(task,name){
        this.task = task;
        this.name = name;
    }

    do () {
        this.task.run(this.name);
    }
}