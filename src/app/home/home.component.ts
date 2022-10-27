import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { WorkItem } from '../_models/work-item';
import { NotificationService } from '../_services/notification.service';
import { Error } from '../_models/error';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  displayedColumns: string[] = [
    'select',
    'position',
    'id',
    'title',
    'isNeedScripts',
    'state',
    'hours',
  ];
  workItems: WorkItem[] = [];
  dataSource = new MatTableDataSource<WorkItem>([]);
  selection = new SelectionModel<WorkItem>(true, []);

  ngOnInit(): void {
    this.userService.getUserTasks().subscribe({
      next: (data: WorkItem[]) => {
        this.dataSource.data = data;
      },
      error: (err: Error) => {
        this.notificationService.showError('Error', `Error: ${err.text}`);
      },
    });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: WorkItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  deployTasks() {
    this.dataSource.data.forEach((row) => {
      if (this.selection.isSelected(row)) {
        this.userService.deployTask(row.id).subscribe({
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
    });
  }
}
