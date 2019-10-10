
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JDRCommonModule } from '../../common/common.module';
import { JetClassicComponent } from './classic/jetClassic.component';

 

@NgModule({
  declarations: [
    JetClassicComponent
  ],
  imports: [
    CommonModule,
    JDRCommonModule
  ],
  exports: [
    JetClassicComponent
  ],

})
export class JetModule {}
