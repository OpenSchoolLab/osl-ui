import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutings } from './app.routing';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdSnackBarModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdIconModule,
  MdMenuModule,
  MdDialogModule
} from '@angular/material';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import 'hammerjs';
import { AuthGuard, ActiveUserGuard } from './common/guards/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogAppMenuComponent } from './dialog-app-menu/dialog-app-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    DialogAppMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutings,
    BrowserAnimationsModule,
    A2tUiModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdIconModule,
    MdMenuModule,
    MdDialogModule
  ],
  providers: [
    Angular2TokenService,
    AuthGuard,
    ActiveUserGuard
  ],
  entryComponents: [DialogAppMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
