import { NgModule } from '@angular/core';
import { EnvVariables } from './ev.token';
import { devVariables } from './dev';
import { prodVariables } from './prod';

declare const process: any; // Typescript compiler will complain without this

export function environmentFactory() {
  console.log(process.env);
  return process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
}

@NgModule({
  providers: [
    {
      provide: EnvVariables,
      // useFactory instead of useValue so we can easily add more logic as needed.
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}
