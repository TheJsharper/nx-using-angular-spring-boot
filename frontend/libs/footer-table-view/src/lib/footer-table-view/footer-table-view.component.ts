import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
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
    selector: 'nx-using-angular-spring-boot-footer-table-view',
    imports: [CommonModule, MatExpansionModule, MatTableModule,],
    templateUrl: './footer-table-view.component.html',
    styleUrl: './footer-table-view.component.scss'
})
export class FooterTableViewComponent implements OnInit, OnDestroy {
    panelOpenState = false;
  
      displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
      dataSource: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);
  
      private intervalRef!: number;
  
  
  
  
  
      async ngOnInit(): Promise<void> {
          this.intervalRef = window.setInterval(() =>
              this.dataSource.next(ELEMENT_DATA.reverse())
              , 1000);
  
  
  
  
      }
  
      ngOnDestroy(): void {
          window.clearInterval(this.intervalRef,);
      }
  
}
