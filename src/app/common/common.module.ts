import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TestService } from "./services/service.test";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
    ],
    exports: [
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    ],
  providers: [
    TestService
    ]
  })
export class JDRCommonModule{

}
