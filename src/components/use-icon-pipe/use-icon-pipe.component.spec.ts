import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseIconPipeComponent } from './use-icon-pipe.component';

describe('UseIconPipeComponent', () => {
  let component: UseIconPipeComponent;
  let fixture: ComponentFixture<UseIconPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseIconPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseIconPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
