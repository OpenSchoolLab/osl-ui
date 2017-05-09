import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {TokenConfig} from './common/TokenConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init(new TokenConfig().getAuth());
  }
}
