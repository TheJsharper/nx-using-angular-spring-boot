import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Layout, PlotMouseEvent, PlotlyHTMLElement, newPlot } from 'plotly.js-dist-min';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'nx-using-angular-spring-boot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  panelOpenState = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  private intervalRef!: number;

  constructor(private renderer: Renderer2, private el: ElementRef) { }




  async ngOnInit(): Promise<void> {
    this.intervalRef = window.setInterval(() =>
      this.dataSource.next(ELEMENT_DATA.reverse())
      , 1000);


    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      name: 'Scatter',
    };

    const trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      name: 'Lines',
    };

    const trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      name: 'Scatter + Lines',
    };

    const data = [trace1, trace2, trace3];
    const layout: Partial<Layout> = {
      title: 'Adding Names to Line and Scatter Plot',
      width: 1800, height: 800, plot_bgcolor: '#cccccc'

    };
    const myDiv = this.renderer.createElement('div');
    const plotly: PlotlyHTMLElement = await newPlot(myDiv, data, { ...layout }, { responsive: true, scrollZoom: false, });

    console.log("DATA", plotly.data);

    plotly.on('plotly_click', (ev: PlotMouseEvent) => { console.log("onclick", ev); return true; })



    this.renderer.appendChild(this.el.nativeElement, myDiv);

  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalRef,);
  }


}
