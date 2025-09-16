import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentItemsComponent } from './resturent-items.component';

describe('ResturentItemsComponent', () => {
  let component: ResturentItemsComponent;
  let fixture: ComponentFixture<ResturentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturentItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResturentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
