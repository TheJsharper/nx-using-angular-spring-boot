import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
    path:'**',
    redirectTo:'plotly'
  }
]
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
