import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post-list/post';

/**
 * Manela la logica del listado de posteos favoritos
 *
 */
@Injectable({
  providedIn: 'root'
})

export class FavListService {

  private _fav_list: Post[] = [];
  fav_list: BehaviorSubject<Post[] > = new BehaviorSubject(this._fav_list);

  constructor() { }

  addToFavList(post: Post) {
    let fav_list_post = this._fav_list.find(p => p.titulo == post.titulo);
    if (fav_list_post) {
      this._fav_list = this._fav_list.filter(p => p.titulo != post.titulo);
      post.favs--;
      post.saved = false;
    } else {
      post.favs++;
      post.saved = true;
      this._fav_list.push(post);
    }
    this.fav_list.next(this._fav_list);
  }

}
