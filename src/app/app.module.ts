import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableStockComponent } from './components/table-stock/table-stock.component';
import { AddChaussuresComponent } from './components/add-chaussures/add-chaussures.component';
import { EditChaussuresComponent } from './components/edit-chaussures/edit-chaussures.component';
import { DetailChaussureComponent } from './components/detail-chaussure/detail-chaussure.component';
import { HttpClientModule } from '@angular/common/http';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { FullChaussureComponent } from './components/full-chaussure/full-chaussure.component';
@NgModule({
  declarations: [
    AppComponent,
    TableStockComponent,
    AddChaussuresComponent,
    EditChaussuresComponent,
    DetailChaussureComponent,
    FullArticleComponent,
    FullChaussureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
