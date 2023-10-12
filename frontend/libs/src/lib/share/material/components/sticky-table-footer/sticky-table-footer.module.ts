import { NgModule } from '@angular/core';

import { LibStickyTableFooterComponent } from './sticky-table-footer.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    
    imports: [MatExpansionModule, BrowserAnimationsModule, MatTableModule ],
    exports: [LibStickyTableFooterComponent],
    declarations: [LibStickyTableFooterComponent],
    providers: [],
})
export class LibStickyTableFooterModule { }
