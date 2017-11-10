import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-root',
  templateUrl: './comment-root.component.html',
  styleUrls: ['./comment-root.component.css']
})
export class CommentRootComponent implements OnInit {

    @Input() livreId: number;

  constructor() { }

  ngOnInit() {
  }

}
