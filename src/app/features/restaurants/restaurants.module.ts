import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RESTAURANTS_ROUTES } from './restaurants.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RESTAURANTS_ROUTES)
  ]
})
export class RestaurantsModule { }
