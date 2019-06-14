import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { MenuserviceService } from './services/menuservice.service';


import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { CardComponent } from './card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { CardGraphComponent } from './card-graph/card-graph.component';
import { PopularbrandsComponent } from './popularbrands/popularbrands.component';
import { CarspecComponent } from './carspec/carspec.component';
//import { Component } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        WelcomeComponent,
        DashboardComponent,
        ErrorComponent,
        CardComponent,
        CardGraphComponent,
        PopularbrandsComponent,
        CarspecComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        FlexLayoutModule,
        HttpClientModule,
        MatCardModule,
		MatGridListModule,
		MatTabsModule
        // Component
    ],
    providers: [MenuserviceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
