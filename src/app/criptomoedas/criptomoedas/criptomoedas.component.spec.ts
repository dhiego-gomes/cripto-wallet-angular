import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptomoedasComponent } from './criptomoedas.component';

describe('CriptomoedasComponent', () => {
  let component: CriptomoedasComponent;
  let fixture: ComponentFixture<CriptomoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptomoedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptomoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
