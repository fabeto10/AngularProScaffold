import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { appReducers } from './app.reducer';
import { appEffects } from './app.effects';

export const AppStore = [
  StoreModule.forRoot(appReducers),
  EffectsModule.forRoot(appEffects),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
];
