import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material components
import{MatCardModule} from "@angular/material/card"
import { MatFormFieldModule } from '@angular/material/form-field';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class LoginModule {}
