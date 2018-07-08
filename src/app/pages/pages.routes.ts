import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';


const pagesRoutes: Routes = [
    {
                path: '', component: PagesComponent, canActivate: [ LoginGuardGuard ],
                children: [
                    {path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
                    {path: 'progress', component: ProgressComponent, data: { title: 'Progress' }   },
                    {path: 'graphics1', component: Graphics1Component, data: { title: 'Graphics' }   },
                    {path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' }   },
                    {path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }   },
                    {path: 'account-settigns', component: AccountSettingsComponent, data: { title: 'Settigns' }   },
                    {path: 'profile', component: ProfileComponent, data: { title: 'User Profile' }   },
                    {path: '', redirectTo: '/dasboard', pathMatch: 'full'  },
                ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
