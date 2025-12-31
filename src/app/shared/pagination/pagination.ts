import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  @Input() currentPage = 1;
  @Input() pageSize = 5;
  @Input() totalItems = 0;

  @Output() pageChanged = new EventEmitter<number>();

  get totalPages()
  {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  changePage(page: number)
  {
    if(page < 1 || page > this.totalPages) return;

    this.pageChanged.emit(page);
  }

  pages()
  {
    Array.from({ length: this.totalPages }, (_, i) => i+1);
  }
}
