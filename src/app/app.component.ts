import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ComposantSelecteurComponent} from "./composant-selecteur/composant-selecteur.component";
import {CalculetteComponent} from "./calculette/calculette.component";
import {CompteurDeCalculComponent} from "./compteur-de-calcul/compteur-de-calcul.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComposantSelecteurComponent, CalculetteComponent, CompteurDeCalculComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'monProjet';
}
