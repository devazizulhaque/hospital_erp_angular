import { bootstrapApplication } from '@angular/platform-browser';
import { enableDebugTools } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

bootstrapApplication(App, appConfig)
  .then(appRef => {
    // Enable Angular DevTools only in development
    if (!environment.production) {
      enableDebugTools(appRef.components[0]);
      console.log('Angular DevTools enabled');
    }
  })
  .catch(err => console.error(err));
