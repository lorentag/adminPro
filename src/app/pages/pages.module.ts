
import { NgModule } from '@angular/core';


// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


// Routes
import { PAGES_ROUTES } from './pages.routes';


// Temp
import { IncrementComponent } from '../components/increment/increment.component';
import { DonaGraphicsComponent } from '../components/dona-graphics/dona-graphics.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncrementComponent,
        DonaGraphicsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        PAGES_ROUTES,
        ChartsModule
    ]
  })
  export class PagesModule { }
