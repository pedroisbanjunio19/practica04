import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgIfComponent } from './directiva-ng-if.component';

describe('DirectivaNgIfComponent', () => {
  let component: DirectivaNgIfComponent;
  let fixture: ComponentFixture<DirectivaNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
