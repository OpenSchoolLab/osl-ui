import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAppMenuComponent } from './dialog-app-menu.component';

describe('DialogAppMenuComponent', () => {
  let component: DialogAppMenuComponent;
  let fixture: ComponentFixture<DialogAppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAppMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
