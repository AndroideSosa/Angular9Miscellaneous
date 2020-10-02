import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404balanceComponent } from './page404balance.component';

describe('Page404balanceComponent', () => {
  let component: Page404balanceComponent;
  let fixture: ComponentFixture<Page404balanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404balanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404balanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
