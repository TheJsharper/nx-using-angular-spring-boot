import { NgModule } from "@angular/core";
import { LazyFormComponent } from "./lazyForm.component";
import{ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations:[LazyFormComponent ],
    imports:[
        ReactiveFormsModule, 
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
    ],
    exports:[LazyFormComponent]
})
export class LazyFormModule{}