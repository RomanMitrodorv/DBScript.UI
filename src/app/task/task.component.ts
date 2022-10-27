import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { WorkItem } from '../_models/work-item';
import { ModalService } from '../_services/modal.service';
import { NotificationService } from '../_services/notification.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() taskId: number = 0;

  item?: WorkItem;

  constructor(
    public modalService: ModalService,
    public userService: UserService,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userService.getTaskInfo(this.taskId).subscribe({
      next: (data: WorkItem) => {
        this.item = data;
      },
      error: (err: Error) => {
        this.notificationService.showError('Error', `Error: ${err.message}`);
      },
    });
  }
  deployTasks() {
    this.userService.deployTask(this.taskId).subscribe({
      next: (data) => {
        this.notificationService.showSuccess(
          'Success',
          `Task ${data.id} was deployed`
        );
      },
      error: (err) => {
        this.notificationService.showError(
          err.error.status,
          `Error: ${err.error.text}`
        );
      },
    });
  }
}
