
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JDRCommonModule } from '../../common/common.module';
import { JetClassicComponent } from './classic/jetClassic.component';
import { JetHomeComponent } from './jet.component';
import { JetShadowrunComponent } from './shadowrun/jetShadowrun.component';

 

@NgModule({
  declarations: [
    JetClassicComponent,
    JetShadowrunComponent,
    JetHomeComponent
  ],
  imports: [
    CommonModule,
    JDRCommonModule
  ],
  exports: [
    JetClassicComponent,
    JetShadowrunComponent,
    JetHomeComponent
  ],

})
export class JetModule {}
