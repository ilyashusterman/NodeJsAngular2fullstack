/**
 * Created by Radu on 2/27/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticRoutingModule
  ],
  declarations: [StatisticComponent]
})
export class StatisticModule { }
