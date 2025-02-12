import { Task } from './task.js';
import { User } from './user.js';

const job = new Task('работа');
const vasya = new User(job, 'Вася');

job.run()
vasya.do()

