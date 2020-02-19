import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableStockComponent } from './components/table-stock/table-stock.component';
import { DetailChaussureComponent } from './components/detail-chaussure/detail-chaussure.component';
import { AddChaussuresComponent } from './components/add-chaussures/add-chaussures.component';
import { EditChaussuresComponent } from './components/edit-chaussures/edit-chaussures.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TableStockComponent },
  { path: 'chaussure/add', component: AddChaussuresComponent },
  { path: 'chaussure/:id', component: DetailChaussureComponent },
  { path: 'chaussure/edit/:id', component: EditChaussuresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
