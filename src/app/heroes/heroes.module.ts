import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // declarations: Qué cosas tiene este módulo	,
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  // imports: Qué cosas necesito para que funcione este módulo (sueles ser módulos)
  imports: [
    CommonModule
  ],
  // exports: Qué cosas quiero que sean visibles fuera de este módulo
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule {

}