import { Component, OnInit } from '@angular/core';
import { FavListService } from '../fav-post-list.service';
import { Post } from './post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] =
  [
    {
      imagen: "https://iili.io/HqGdENV.md.jpg ",
      titulo: "Top 7 maneras de cocinar un pollo",
      cantidad_votos: 0,
      calificacion: 0,
      tags: "alimentación - receta",
      favs: 0,
      saved: false,
    },
    {
      imagen: "https://iili.io/HqGdeHv.md.jpg",
      titulo: "E-books gratuitos",
      cantidad_votos: 1,
      calificacion: 5,
      tags: "libros - educacion",
      favs: 1,
      saved: false,
    },
    {
      imagen: "https://iili.io/HqGdAo7.md.jpg",
      titulo: "Canales de Youtube DIY",
      cantidad_votos: 6,
      calificacion: 3,
      tags: "recomendaciones",
      favs: 6,
      saved: false,
    }
  ];

  constructor(private fav_list_srvc: FavListService) {

  }

  ngOnInit(): void {
  }

  agregarAFavoritos(post: Post): void {
    this.fav_list_srvc.addToFavList(post);
  }

}
