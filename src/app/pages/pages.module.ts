
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PipesModule } from '../pipes/pipes.module';


// Routes
import { PAGES_ROUTES } from './pages.routes';


// Temp
import { IncrementComponent } from '../components/increment/increment.component';
import { DonaGraphicsComponent } from '../components/dona-graphics/dona-graphics.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncrementComponent,
        DonaGraphicsComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent
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
        ChartsModule,
        CommonModule,
        PipesModule
    ]
  })
  export class PagesModule { }
