import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbproductosComponent } from './dbproductos.component';

describe('DbproductosComponent', () => {
  let component: DbproductosComponent;
  let fixture: ComponentFixture<DbproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
