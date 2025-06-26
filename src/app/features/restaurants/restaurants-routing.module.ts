import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RESTAURANTS_ROUTES } from './restaurants.routes';

@NgModule({
  imports: [RouterModule.forChild(RESTAURANTS_ROUTES)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
