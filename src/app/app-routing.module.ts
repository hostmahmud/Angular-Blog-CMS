import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors/authors.component';
import { AddPostComponent } from './blog-posts/add-post/add-post.component';
import { AdminComponent } from './blog-posts/admin/admin.component';
import { BlogListsComponent } from './blog-posts/blog-lists/blog-lists.component';
import { DeletePostComponent } from './blog-posts/delete-post/delete-post.component';
import { EditPostComponent } from './blog-posts/edit-post/edit-post.component';
import { ViewPostComponent } from './blog-posts/view-post/view-post.component';
import { FrontPostsComponent } from './front/front-posts/front-posts.component';

const routes: Routes = [
  {path: 'admin',
    children:[
      {path:'',component:AdminComponent},
      {path:'blog/create',component:AddPostComponent},
      {path:'blog/edit/:id',component:EditPostComponent},
      {path:'blog/list',component:BlogListsComponent},
      {path:'blog/delete/:id',component:DeletePostComponent},
      {path:'authors',component:AuthorsComponent},
    ]
  },
  {path: 'front',
    children:[
      {path:'',component:FrontPostsComponent},
      {path:'view/:id',component:ViewPostComponent},
    ]
  },
  {path:'',redirectTo:'front',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
