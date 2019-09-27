import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "albums",
  loadChildren: () => import('./albums/albums.module')
                            .then(mod => {
                            console.log('in promise loadChildren');
                            return mod.AlbumsModule;
                            })},
  { path: "albums/:id", component: AlbumDetailsComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }