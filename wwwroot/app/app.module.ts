import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SubverseComponent } from './subverse/subverse.component'; 
import { HomeComponent } from './home/home.component';
import { ArticlePageComponent } from './articlepage/articlepage.component';
import {ArticleFullPageComponent} from './articlefullpage/articlefullpage.component'; 

import {RouterModule, Routes} from '@angular/router'

import {AppServiceHackersPulse} from './services/app.service.hackerspulse';

import {CommentComponent} from './comment/comment.component';
import {CommentTreeComponent} from './comment-tree/comment-tree.component';
import {ExploreSubverseComponent} from './exploresubverse/exploresubverse.component';
import {BugOrFeatureComponent} from './bugorfeature/bugorfeature.component';
import {UserPageComponent} from './user/user.component'; 

const routes: Routes = [
    { path: '', component : HomeComponent },
    { path: 's/:id', component : SubverseComponent },
    { path: 'a/:id', component : ArticlePageComponent },
    { path: 'user/:id', component : UserPageComponent },
    { path: 'explore', component : ExploreSubverseComponent },
    { path: 'bugorfeature', component : BugOrFeatureComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlePageComponent,
    SubverseComponent,
    HomeComponent,
    ArticleFullPageComponent,
    CommentComponent,
    CommentTreeComponent,
    ExploreSubverseComponent,
    BugOrFeatureComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
  
}
