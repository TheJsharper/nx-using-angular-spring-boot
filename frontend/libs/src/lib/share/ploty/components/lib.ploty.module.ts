import { NgModule } from "@angular/core";
import { LibPlotkyComponent } from "./lib.ploty.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes=[
    {
        path:'',
        component: LibPlotkyComponent,

    },
];

@NgModule({
    declarations:[LibPlotkyComponent],
    imports:[CommonModule, RouterModule.forChild(routes)],
    providers:[]
})

export class LibPlotyModule{}