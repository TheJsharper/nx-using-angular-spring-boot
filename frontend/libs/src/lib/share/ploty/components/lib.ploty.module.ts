import { NgModule } from "@angular/core";
import { LibPlotkyComponent } from "./lib.ploty.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { plotlyReducer } from "../store/lib.ploty.reducers";
import { plotlyResolver } from "../routers/canMatch/ploty-resolver";
import { LibPlotkyService } from "../services/lib-plotly.service";

const routes: Routes = [
    {
        path: '',
        component: LibPlotkyComponent,
        resolve: { ploty: plotlyResolver }

    },
];


@NgModule({
    declarations: [LibPlotkyComponent],

    imports: [CommonModule,
        StoreModule.forFeature('plotly', plotlyReducer),
        RouterModule.forChild(routes)],
   providers: [LibPlotkyService]
})

export class LibPlotyModule { }