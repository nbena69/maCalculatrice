import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculette.component.html',
  styleUrl: './calculette.component.css'

})
export class CalculetteComponent {
  public resultat: Number = 0;

  public operande1: FormControl = new FormControl('');
  public operateur: FormControl = new FormControl('');
  public operande2: FormControl = new FormControl('');

}


