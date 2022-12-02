import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavListService } from '../fav-post-list.service';
import { Post } from '../post-list/post';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss']
})
export class FavListComponent implements OnInit {

  fav_post_list$: Observable<Post[]> = new Observable<Post[]>;

  constructor(private fav_list_srvc: FavListService) {
    this.fav_post_list$ = fav_list_srvc.fav_list.asObservable();
  }

  ngOnInit(): void {
  }

}
