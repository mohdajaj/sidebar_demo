import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

{path:'header',component:HeaderComponent},
{path:'sideBar',component:SideBarComponent},
{path:'footer',component:FooterComponent},
{path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
