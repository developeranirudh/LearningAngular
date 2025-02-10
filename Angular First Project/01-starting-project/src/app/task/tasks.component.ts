import { Component, Input } from '@angular/core';
import { TasksComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent {
  @Input({required: true}) id!: string;
  @Input({ required: true }) selectedname!: string;
  dummytasks = [
    {
      id: 't1',
      userId: 'u1',
      Title: 'Master Angular',
      Summary: 'Learn All The Basic and advanced features of Angular',
      dueDate: '2025-12-31'
    }, {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ]
  get selectedUserTask(){
    return this.dummytasks.filter((task)=>{
      task.userId === this.id;
    })
  }
}
