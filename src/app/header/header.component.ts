import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {Router} from '@angular/router';
import {MdDialog} from '@angular/material';
import {DialogAppMenuComponent} from '../dialog-app-menu/dialog-app-menu.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  constructor(private _tokenService: Angular2TokenService, private _router: Router, private _dialog: MdDialog) { }

  ngOnInit() {
    this.isCollapsed = true;
  }

  signOut() {
    this._tokenService.signOut().subscribe(
      response => {
        this._router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }

  openAppsDialog() {
    const appMenuDialogRef = this._dialog.open(DialogAppMenuComponent);
    appMenuDialogRef.afterClosed().subscribe(response => {});
  }
}
