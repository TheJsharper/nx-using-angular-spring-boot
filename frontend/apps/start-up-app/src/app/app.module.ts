import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '@nx-using-angular-spring-boot/shared';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatExpansionModule, BrowserAnimationsModule, MatTableModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
