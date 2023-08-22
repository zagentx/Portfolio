import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        AboutComponent,
        ProjectsComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgOptimizedImage,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
