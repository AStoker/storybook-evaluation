import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen/pure-inbox-screen.component';
import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';

@NgModule({
  declarations: [AppComponent, PureInboxScreenComponent, InboxScreenComponent],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
