import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { appReducers, metaReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const routes: Routes = [
  {
    path: 'plotly',
    loadChildren: () => import('@nx-using-angular-spring-boot/shared').then(m => m.LibPlotyModule)
  },
  {
    path: 'footer-sticky-mat-table',
    loadChildren: () => import('@nx-using-angular-spring-boot/shared').then(m => m.LibStickyTableFooterModule)
  },
  {
    path: '**',
    redirectTo: 'plotly'
  }
]
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({maxAge:25, logOnly:true}),
    MatToolbarModule, MatIconModule,
    MatButtonModule, MatMenuModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
