import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';

const appRoutes: Routes = [
    /*{
        path: '',
        //component: HomeComponent,
        canActivate: [AuthGuard]
    },*/
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);