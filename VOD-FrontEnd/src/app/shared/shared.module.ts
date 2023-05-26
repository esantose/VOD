import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from './material.module';

// import { LayoutComponent } from './layout/layout.component';

@NgModule({

  declarations: [
    // LayoutComponent,
  ],
  imports: [
    RouterModule,
    // MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
  ]  
})

export class SharedModule { }
