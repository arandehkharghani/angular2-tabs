import  { OpaqueToken } from 'angular2/core';

interface AppSettings {
  apiEndpoint: string,
  title: string,
}

const APPSETTINGS:AppSettings = {
  apiEndpoint: 'api.heroes.com',
  title: 'angular2 nodejs',
};

let APP_SETTINGS = new OpaqueToken('app.settings');

export {AppSettings, APPSETTINGS, APP_SETTINGS }