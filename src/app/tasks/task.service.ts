
import {Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({providedIn:'root'})
export class TasksService {
private tasks  = [
  {id:'t1', title:'Learn Angular', summary:'Learn Angular', dueDate: '2025-12-31', userId:'u6'},
  {id:'t2', title:'Learn TypeScript', summary:'Learn TypeScript', dueDate: '2025-12-31',userId:'u5'},
  {id:'t3', title:'Learn Signals', summary:'Learn Signals',  dueDate: '2025-12-31', userId:'u3'},
  {id:'t4',title:'Learn RxJS',  summary:'Learn RxJS',  dueDate: '2025-12-31', userId:'u1'},
  {id:'t5', title:'Learn Learn', summary:'Learn NgRx', dueDate: '2025-12-31', userId:'u2'},
  {id:'t6',title:'Learn HTML',  summary:'Learn HTML & CSS', dueDate: '2025-12-31', userId:'u4'},
  {id:'t7',title:'Learn JavaScript',  summary:'Learn JavaScript', dueDate: '2025-12-31', userId:'u6'},
  {id:'t8',title:'Learn Web Development',  summary:'Learn Web Development', dueDate: '2025-12-31', userId:'u2'},
  {id:'t9', title:'Learn Frontend Development', summary:'Learn Frontend Development', dueDate: '2025-12-31', userId:'u3'},
  {id:'t10',title:'Learn Backend Development',  summary:'Learn Backend Development', dueDate: '2025-12-31', userId:'u1'},
  {id:'t11', title:'Learn Fullstack Development', summary:'Learn Fullstack Development', dueDate: '2025-12-31', userId:'u5'},
  {id:'t12',title:'Learn DevOps',  summary:'Learn DevOps', dueDate: '2025-12-31', userId:'u3'},
  {id:'t13', title:'Learn Cloud Computing', summary:'Learn Cloud Computing',  dueDate: '2025-12-31', userId:'u1'},
  {id:'t14', title:'Learn Database Management', summary:'Learn Database Management', dueDate: '2025-12-31', userId:'u2'},
  {id:'t15',title:'Learn Software Engineering',  summary:'Learn Software Engineering',  dueDate: '2025-12-31', userId:'u4'},
];

constructor(){

    const taskData = localStorage.getItem('tasks');
    if(taskData){
        this.tasks = JSON.parse(taskData);
    }
}

getUserTasks(userId: string) {            
    return this.tasks.filter((task) => task.userId === userId);
}

addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({          
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,  
        summary: taskData.summary,
        dueDate: taskData.date,
    });
    this.saveTasks();
}

removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);   
    this.saveTasks();
    }
private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));             
}

}