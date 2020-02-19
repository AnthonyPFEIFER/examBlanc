import { Component, OnInit, Input } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-detail-chaussure',
  templateUrl: './detail-chaussure.component.html',
  styleUrls: ['./detail-chaussure.component.css']
})
export class DetailChaussureComponent implements OnInit {
  chaussure: Chaussure;
  chaussures: Chaussure[];
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private chaussureService: ChaussureService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.chaussureService.getChaussureById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      this.chaussure = data;
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
