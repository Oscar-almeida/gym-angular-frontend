import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
  declarations: [],
  imports: [
    FuseSharedModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
