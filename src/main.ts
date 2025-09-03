import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { headerCompomnent } from './app/header/header.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(headerCompomnent, appConfig)
  .catch((err) => console.error(err));