import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-chaussures',
  templateUrl: './add-chaussures.component.html',
  styleUrls: ['./add-chaussures.component.css']
})
export class AddChaussuresComponent implements OnInit {
  chaussureForm: Chaussure;
  isLoading: boolean;
  constructor(private chaussureService: ChaussureService, private router: Router) { }
  ngOnInit() {
    this.chaussureForm = new Chaussure();
  }
  onSubmit() {
    this.chaussureService.add(this.chaussureForm).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }
}
