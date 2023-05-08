import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { footerAuth } from 'src/components/footer/footer.component';
import { menuSelector } from 'src/components/menuSelector/menuSelector.component';
import { pageTitle } from 'src/components/pageTitle/pageTitle.component';
import { data } from '../app/pages/data/data.component'
import { AddvariablesComponent } from './pages/data/addvariables/addvariables.component';
import { ScarttChartComponent } from '../components/scartt-chart/scartt-chart.component';
import { NumberFormatPipe } from '../pipes/numberFormat'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { information } from './pages/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { AcpComponent } from './pages/acp/acp.component';
import { NgChartsModule } from 'ng2-charts';
import { ClusteringComponent } from './pages/clustering/clustering.component';
import { DistancesComponent } from './pages/clustering/distances/distances.component';
import { ClusteringMethodsComponent } from './pages/clustering/clustering-methods/clustering-methods.component';
import { DbscanComponent } from './pages/clustering/clustering-methods/dbscan/dbscan.component';
import { OpticsComponent } from './pages/clustering/clustering-methods/optics/optics.component';
import { KmeansComponent } from './pages/clustering/clustering-methods/kmeans/kmeans.component';


@NgModule({
  declarations: [
    AppComponent,
    information,
    menuSelector,
    footerAuth,
    pageTitle,
    data,
    AddvariablesComponent,
    AcpComponent,
    ScarttChartComponent,
    NumberFormatPipe,
    ClusteringComponent,
    DistancesComponent,
    ClusteringMethodsComponent,
    DbscanComponent,
    OpticsComponent,
    KmeansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    NgChartsModule,
    MatStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
