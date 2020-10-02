import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404leavesComponent } from './page404leaves.component';

describe('Page404leavesComponent', () => {
  let component: Page404leavesComponent;
  let fixture: ComponentFixture<Page404leavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404leavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404leavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
