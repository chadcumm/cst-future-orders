import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ClinicalOfficeMpageModule} from "@clinicaloffice/clinical-office-mpage";
import {MaterialModule} from "@clinicaloffice/clinical-office-mpage";
import {ErrorHandlerService} from "@clinicaloffice/clinical-office-mpage";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CdkTableModule } from '@angular/cdk/table';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TreeTableModule} from 'primeng/treetable';
import { TooltipModule } from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar'
import {CheckboxModule} from 'primeng/checkbox'
import {AccordionModule} from 'primeng/accordion'
import {TabViewModule} from 'primeng/tabview'
@NgModule({
  declarations: [
    AppComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ClinicalOfficeMpageModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    TreeTableModule,
    TooltipModule,
    InputTextModule,
    ToolbarModule,
    CheckboxModule,
    AccordionModule,
    TabViewModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'MM-DD-YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
