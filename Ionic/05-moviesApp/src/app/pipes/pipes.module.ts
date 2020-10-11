import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { EvensPipe } from './evens.pipe';
import { FilterImagePipe } from './filter-image.pipe';

@NgModule({
  declarations: [ImagePipe, EvensPipe, FilterImagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePipe,
    EvensPipe,
    FilterImagePipe
  ]
})
export class PipesModule { }
