import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideopopupPage } from './videopopup.page';

describe('VideopopupPage', () => {
  let component: VideopopupPage;
  let fixture: ComponentFixture<VideopopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideopopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideopopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
