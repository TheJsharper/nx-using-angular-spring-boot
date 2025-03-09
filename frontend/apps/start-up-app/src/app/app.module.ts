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
import { FormsModule } from '@angular/forms';
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
    path:'primeng-table',
    loadComponent: ()=> import('@nx-using-angular-spring-boot/primeng-table').then( c=> c.PrimengTableComponent)
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
    MatButtonModule, MatMenuModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
