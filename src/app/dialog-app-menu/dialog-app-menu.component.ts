import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-app-menu',
  templateUrl: './dialog-app-menu.component.html',
  styleUrls: ['./dialog-app-menu.component.scss']
})
export class DialogAppMenuComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogAppMenuComponent>) {}

  ngOnInit() {
  }

}
