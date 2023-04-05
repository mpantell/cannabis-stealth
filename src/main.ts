import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import 'zone.js';
//import dotenv from 'dotenv';

/*if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}else{
  dotenv.config();
}*/



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
