import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuBarModule } from '../menu-bar/menu-bar.module';
import { MenuIconModule } from '../menu-icon/menu-icon.module';



@NgModule({
  declarations: [  HeaderComponent],
  imports: [
    CommonModule,
    MenuBarModule,
    MenuIconModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
