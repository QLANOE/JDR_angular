
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JDRCommonModule } from '../../common/common.module';
import { JetClassicComponent } from './classic/jetClassic.component';
import { JetShadowrunComponent } from './shadowrun/jetShadowrun.component';
import { JetWerewolfComponent } from './werewolf/jetWw.component';

 

@NgModule({
  declarations: [
    JetClassicComponent,
    JetShadowrunComponent,
    JetWerewolfComponent
  ],
  imports: [
    CommonModule,
    JDRCommonModule,
  ],
  exports: [
    JetClassicComponent,
    JetShadowrunComponent,
    JetWerewolfComponent
  ],

})
export class JetModule {}
