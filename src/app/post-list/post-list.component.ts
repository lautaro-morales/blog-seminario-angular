import { Component, OnInit } from '@angular/core';
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
      imagen: "assets/img/pollo-asado.jpg",
      titulo: "Top 7 maneras de cocinar un pollo",
      calificacion: 0,
      tags: "alimentación - receta",
      favs: 0,
      saved: false,
    },
    {
      imagen: "assets/img/ebook.jpg",
      titulo: "E-books gratuitos",
      calificacion: 5,
      tags: "libros - educacion",
      favs: 3,
      saved: false,
    },
    {
      imagen: "assets/img/youtube-logo.jpg",
      titulo: "Canales de Youtube DIY",
      calificacion: 3,
      tags: "recomendaciones",
      favs: 6,
      saved: false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  guardarPost(post: Post): void {
    if (!post.saved) {
      alert('Post guardado!');
      post.favs++;
      post.saved = true;
    }
    else {
      alert('Eliminado de favoritos');
      post.favs--;
      post.saved = false;
    }
  }

}
