import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-compteur-de-calcul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compteur-de-calcul.component.html',
  styleUrl: './compteur-de-calcul.component.css'
})
export class CompteurDeCalculComponent {
  @Output() attentionNombreDeCalculImportant: EventEmitter<boolean> = new EventEmitter();

  public total: number = 0;

  compte(): void {
    this.total++
    if (this.total > 10) {
      this.attentionNombreDeCalculImportant.emit(true);
    }
  }


}
