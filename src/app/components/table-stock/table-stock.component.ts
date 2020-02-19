import { Component, OnInit, Input } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.css']
})
export class TableStockComponent implements OnInit {
  chaussures: Chaussure[];
  isLoading: boolean;

  constructor(private chaussureService: ChaussureService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.chaussureService.getAllChaussures().subscribe((data: Chaussure[]) => {
      this.chaussures = data;
      this.isLoading = false;
    });
  }
  deleteChaussure(id: number): void {
    this.isLoading = true;
    this.chaussureService.deleteChaussure(id).subscribe(then => {
      this.chaussureService.getAllChaussures().subscribe((data: Chaussure[]) => {
        this.chaussures = data;
        this.isLoading = false;

      });
      this.router.navigate(['/home']);
    });
  }

}
