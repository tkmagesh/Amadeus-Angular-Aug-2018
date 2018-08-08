import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from './utils/utils.module';


import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugApiService } from './bugTracker/services/bugApi.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { DummyService } from './dummy.service';
import { DummyComponent } from './dummy.component';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , ClosedCountPipe
    , BugEditComponent
    , DummyComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
    , DummyService
    , BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
