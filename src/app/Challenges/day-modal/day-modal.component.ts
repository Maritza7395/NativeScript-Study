import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular/modal-dialog';

@Component({
  selector: 'ns-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css'],
  moduleId: module.id
})
export class DayModalComponent implements OnInit {
    public loadedDate: Date;

    constructor(
        private modaleParams: ModalDialogParams
    ) { }

    ngOnInit(){
        this.loadedDate = (this.modaleParams.context as { date: Date }).date
    }

}
