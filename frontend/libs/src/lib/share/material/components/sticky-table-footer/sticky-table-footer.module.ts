import { NgModule } from '@angular/core';

import { LibStickyTableFooterComponent } from './sticky-table-footer.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({

    imports: [MatExpansionModule, MatTableModule, RouterModule.forChild([{path:'', component:LibStickyTableFooterComponent}])],
    declarations: [LibStickyTableFooterComponent],
    providers: [],
})
export class LibStickyTableFooterModule { }
