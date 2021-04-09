import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdelComponent } from './updel.component';

describe('UpdelComponent', () => {
  let component: UpdelComponent;
  let fixture: ComponentFixture<UpdelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
