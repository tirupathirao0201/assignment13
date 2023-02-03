import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCompComponent } from './children-comp.component';

describe('ChildrenCompComponent', () => {
  let component: ChildrenCompComponent;
  let fixture: ComponentFixture<ChildrenCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
