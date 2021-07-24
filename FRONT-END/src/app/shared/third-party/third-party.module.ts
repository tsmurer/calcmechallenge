import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

const angularMaterial = [
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatDividerModule,
  MatSortModule,
  MatPaginatorModule,
  
]

@NgModule({
  imports: [
    CommonModule,
    angularMaterial,
    
    NgxMaskModule.forRoot(),
  ],
  exports: [
    angularMaterial,
    NgxMaskModule
  ]
})
export class ThirdPartyModule { }
