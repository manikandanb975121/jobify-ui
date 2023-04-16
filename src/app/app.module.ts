import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Forms
import { FormsModule } from '@angular/forms';

// HTTP MODULE
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/dashboard/content/content.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { StatusCardComponent } from './components/common/status-card/status-card.component';
import { DashbaordComponent } from './components/dashboard/dashbaord/dashbaord.component';
import { ReplacePipe } from './utils/replace.pipe';
import { ProductsComponent } from './components/products/products/products.component';
import { JobDetailsComponent } from './components/products/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    BreadcrumbComponent,
    MainComponent,
    StatusCardComponent,
    DashbaordComponent,
    ReplacePipe,
    ProductsComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
