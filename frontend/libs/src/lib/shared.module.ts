import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sharedRoutes } from './lib.routes';
import { LibStickyTableFooterModule } from './share/material/components/sticky-table-footer/sticky-table-footer.module';
import { LibPlotyModule } from './share/ploty/components/lib.ploty.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(sharedRoutes), RouterModule],
  exports: [RouterModule, LibPlotyModule, LibStickyTableFooterModule],
  providers:[]
})
export class SharedModule { }
