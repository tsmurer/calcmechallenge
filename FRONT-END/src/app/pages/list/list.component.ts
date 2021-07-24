import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Person } from 'src/app/shared/models/Person';
import { RegisterService } from 'src/app/shared/services/register.service';
import { getPtbrPaginatorIntl } from './mat-paginator-intl';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPtbrPaginatorIntl() }
 ]
})
export class ListComponent implements OnInit {

  persons: Person[] = [];
  sortedData: Person[] = [];
  pageSlice: Person[] = [];
  searchText: string = '';
  pageSize = 10;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: RegisterService) { }

  ngOnInit() {
    this.loadRegisters();
  }

  loadRegisters() {
    this._service.getAll().subscribe(resp => {
      this.persons = resp;
      this.sortedData = this.persons.slice();
      this.pageSlice = this.sortedData.slice(0,this.pageSize);
    });
  }

  sortData(sort: Sort) {
    const data = this.pageSlice.slice();
    if (!sort.active || sort.direction === '') {
      this.pageSlice = data;
      return;
    }
    console.log("sortData")
    this.pageSlice = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'phone': return compare(a.phone, b.phone, isAsc);
        default: return 0;
      }
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.sortedData.length) {
        endIndex = this.sortedData.length
    }

    this.pageSlice = this.sortedData.slice(startIndex, endIndex);
}


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}