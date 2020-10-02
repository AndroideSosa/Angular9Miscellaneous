import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInterfaceComponent } from './class-interface.component';

describe('ClassInterfaceComponent', () => {
  let component: ClassInterfaceComponent;
  let fixture: ComponentFixture<ClassInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
