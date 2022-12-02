import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'

  },
  {
    path: 'posts',
    component: BlogPostsComponent
  },
  {
    path: 'about',
    component: BlogAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
