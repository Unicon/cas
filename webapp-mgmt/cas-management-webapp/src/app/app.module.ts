import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Messages} from './messages';
import {AppRoutingModule} from './app-routing.module';
import {ServicesModule} from './services/services.module';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from './shared/shared.module';
import {FormModule} from './form/form.module';
import { DeleteComponent } from './delete/delete.component';
import {DomainsModule} from './domains/domains.module';
import { SearchComponent } from './search/search.component';
import {SearchService} from './search/SearchService';

import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import {UserService} from './user.service';
import {HistoryModule} from './history/history.module';
import {RevertComponent} from './revert/revert.component';
import {ChangesModule} from './changes/changes.module';
import {DiffModule} from './diff/diff.module';
import {JSONModule} from './json/json.module';
import {InitComponent} from 'app/init.component';
import {ControlsComponent} from './controls/controls.component';
import {ControlsService} from './controls/controls.service';
import { FooterComponent } from './footer/footer.component';
import { LocalChangesComponent } from './local-changes/local-changes.component';
import {HeaderService} from './header/header.service';
import { YamlComponent } from './yaml/yaml.component';
import {YamlResolver} from './yaml/yaml.resolover';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DomainsModule,
    ServicesModule,
    HistoryModule,
    JSONModule,
    ChangesModule,
    DiffModule,
    FormModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DeleteComponent,
    SearchComponent,
    RevertComponent,
    InitComponent,
    LocalChangesComponent,
    FooterComponent,
    YamlComponent
  ],
  entryComponents: [
    DeleteComponent,
    RevertComponent
  ],
  providers: [
    Messages,
    SearchService,
    UserService,
    HeaderService,
    YamlResolver,
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
