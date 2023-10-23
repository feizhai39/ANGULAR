import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('create user api unit test',()=>{
  //   component.createUserApi({}).subscribe((res:any)=>{
  //     expect(res).toBeTruthy();
  //   });
  // })
  // let mockHttp = httpCtrl.expectNone("http://reqres.in/api/users")
  // const request = mockHttp.request;
  // mockHttp.flush({'response':"this is mock response"});
});
