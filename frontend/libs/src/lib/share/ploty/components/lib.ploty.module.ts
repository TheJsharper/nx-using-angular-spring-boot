import { NgModule } from "@angular/core";
import { LibPlotkyComponent } from "./lib.ploty.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[LibPlotkyComponent],
    imports:[CommonModule],
    exports:[LibPlotkyComponent],
    providers:[]
})

export class LibPlotyModule{}