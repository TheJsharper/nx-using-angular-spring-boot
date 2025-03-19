import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'nx-using-angular-spring-boot-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports:[RouterOutlet, RouterLink,   MatButtonModule, MatMenuModule,  FormsModule, MatToolbarModule, MatIconModule],
    standalone: true
})
export class AppComponent{

 


}
