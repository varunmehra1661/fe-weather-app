import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/country-list', pathMatch: 'full' },
  { path: 'country-list', component: CountryListComponent },
  { path: 'weather-details/:country', component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
