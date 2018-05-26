import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';


const pagesRoutes: Routes = [
    {
                path: '', component: PagesComponent,
                children: [
                    {path: 'dasboard', component: DashboardComponent  },
                    {path: 'progress', component: ProgressComponent  },
                    {path: 'graphics1', component: Graphics1Component  },
                    {path: '', redirectTo: '/dasboard', pathMatch: 'full'  },
                ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
