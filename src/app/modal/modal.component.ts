import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title?: string;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
