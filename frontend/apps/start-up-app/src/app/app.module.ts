import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  imports: [BrowserModule,  BrowserAnimationsModule,  RouterModule.forRoot(routes), MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
