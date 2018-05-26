import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';




const appRoutes: Routes = [
{
        path: '', component: PagesComponent,
        children: [
            {path: 'dasboard', component: DashboardComponent  },
            {path: 'progress', component: ProgressComponent  },
            {path: 'graphics1', component: Graphics1Component  },
            {path: '', redirectTo: '/dasboard', pathMatch: 'full'  },
        ]

},
    {path: 'login', component: LoginComponent  },
    {path: 'register', component: RegisterComponent  },
    {path: '**', component: NopagefoundComponent  }
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true } );
