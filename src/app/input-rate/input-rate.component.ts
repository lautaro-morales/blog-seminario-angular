import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post-list/post';

@Component({
  selector: 'app-input-rate',
  templateUrl: './input-rate.component.html',
  styleUrls: ['./input-rate.component.scss']
})
export class InputRateComponent implements OnInit {

  constructor() {
    this.sumar_a_promedio = 1;
  }

  sumar_a_promedio!: number;

  @Input()
  promedio_actual!: number;

  @Input()
  divisor!: number;

  @Output()
  promedio_actualChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  divisorChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  calcularNuevoPromedio(): void {
    if (this.sumar_a_promedio) {
      if (this.divisor != 0) {
        let total: number  = this.promedio_actual * this.divisor;
        this.divisor++;
        this.promedio_actual = Number(((total + this.sumar_a_promedio) / (this.divisor)).toFixed(2));
      } else {
        this.divisor++;
        this.promedio_actual = this.sumar_a_promedio;
      }
      this.divisorChange.emit(this.divisor);
      this.promedio_actualChange.emit(this.promedio_actual);
    }
  }

}
