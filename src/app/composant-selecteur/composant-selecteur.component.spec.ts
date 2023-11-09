import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, OnInit} from "@angular/core";
import {Router } from '@angular/router';
import { ComposantSelecteurComponent } from './composant-selecteur.component';

@Component({
  selector: 'app-composant-selecteur',
  templateUrl: './composant-selecteur.component.html',
  styleUrls: ['./composant-selecteur.component.css']
})
export class ComposantSelecteurComponentSpec implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }
}

describe('ComposantSelecteurComponent', () => {
  let component: ComposantSelecteurComponent;
  let fixture: ComponentFixture<ComposantSelecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantSelecteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantSelecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
