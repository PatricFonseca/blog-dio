import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfound404Component } from './notfound404.component';

describe('Notfound404Component', () => {
  let component: Notfound404Component;
  let fixture: ComponentFixture<Notfound404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Notfound404Component]
    });
    fixture = TestBed.createComponent(Notfound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});