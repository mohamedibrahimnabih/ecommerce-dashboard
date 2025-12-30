import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-model-filter',
  imports: [],
  templateUrl: './model-filter.html',
  styleUrl: './model-filter.css',
})
export class ModelFilter {
  @Output() filterChanged = new EventEmitter<string>();

  filter(name: string) {
    this.filterChanged.emit(name);
  }

  resetFilter(input: HTMLInputElement) {
    input.value = '';

    this.filterChanged.emit(input.value);
  }
}
