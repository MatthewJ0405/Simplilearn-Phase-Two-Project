import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameTriviaComponent } from './videogame-trivia.component';

describe('VideogameTriviaComponent', () => {
  let component: VideogameTriviaComponent;
  let fixture: ComponentFixture<VideogameTriviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameTriviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
