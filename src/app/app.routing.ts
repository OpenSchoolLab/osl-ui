import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard, ActiveUserGuard } from './common/guards/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [ActiveUserGuard] },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutings = RouterModule.forRoot(appRoutes);
