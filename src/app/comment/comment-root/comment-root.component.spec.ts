import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRootComponent } from './comment-root.component';

describe('CommentRootComponent', () => {
  let component: CommentRootComponent;
  let fixture: ComponentFixture<CommentRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
