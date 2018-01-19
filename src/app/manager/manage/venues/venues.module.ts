import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueListComponent } from './venue-list/venue-list.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MediaComponent } from './media/media.component';
import { SummaryComponent } from './summary/summary.component';
import { VenuesRoutingModule } from './venues-routing.module';
import { PartialViewsModule } from '../../../partial-views/partial-views.module';
import { DataTableModule } from 'angular2-datatable/lib/DataTableModule';

@NgModule({
  imports: [
    CommonModule,
    VenuesRoutingModule,
    PartialViewsModule,
    DataTableModule
  ],
  declarations: [VenueListComponent, BasicDetailsComponent, ContactDetailsComponent, MediaComponent, SummaryComponent]
})
export class VenuesModule { }
