import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from "./pages/blog/blog.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectsComponent} from "./pages/projects/projects.component";

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
