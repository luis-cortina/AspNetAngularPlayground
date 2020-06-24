import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponenteComponent } from './post-componente.component';

describe('PostComponenteComponent', () => {
  let component: PostComponenteComponent;
  let fixture: ComponentFixture<PostComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
