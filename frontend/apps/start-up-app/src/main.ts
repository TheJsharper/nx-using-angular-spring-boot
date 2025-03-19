

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { appReducers, metaReducers } from './app/store/app.reducers';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  {
    path: 'plotly',
    loadComponent: () => import('@nx-using-angular-spring-boot/plotly-view').then(m => m.PlotlyViewComponent)
  },
  {
    path: 'footer-sticky-mat-table',
    loadComponent: () => import('@nx-using-angular-spring-boot/footer-table-view').then(m => m.FooterTableViewComponent)
  },
  {
    path: 'primeng-table',
    loadComponent: () => import('@nx-using-angular-spring-boot/primeng-table').then(c => c.PrimengTableComponent),
    providers: [provideHttpClient()]
  },
  {
    path: '**',
    redirectTo: 'plotly'
  }
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    importProvidersFrom(
      RouterModule.forRoot(routes),
      StoreModule.forRoot(appReducers, { metaReducers }),
      StoreDevtoolsModule.instrument({maxAge:25, logOnly:true}),
     
    )
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


