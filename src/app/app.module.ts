import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { FormsModule } from '@angular/forms';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { ShoppingListComponent } from './projects/shopping-list/shopping-list.component';
import { KanbanBoardComponent } from './projects/kanban-board/kanban-board.component';
import { AutosizeModule } from 'ngx-autosize';
import { QuizAppComponent } from './projects/quiz-app/quiz-app.component';
import { QuizSelectionComponent } from './projects/quiz-app/quiz-selection/quiz-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    HomeComponent,
    ImpressumComponent,
    DatenschutzComponent,
    ShoppingListComponent,
    KanbanBoardComponent,
    QuizAppComponent,
    QuizSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
    NgbModule,
    FormsModule,
    AutosizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
