import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { EvensPipe } from './evens.pipe';

@NgModule({
  declarations: [ImagePipe, EvensPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePipe,
    EvensPipe
  ]
})
export class PipesModule { }
