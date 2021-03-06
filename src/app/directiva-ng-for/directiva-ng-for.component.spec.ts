import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgForComponent } from './directiva-ng-for.component';

describe('DirectivaNgForComponent', () => {
  let component: DirectivaNgForComponent;
  let fixture: ComponentFixture<DirectivaNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
