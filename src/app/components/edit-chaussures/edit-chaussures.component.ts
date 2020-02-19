import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-chaussures',
  templateUrl: './edit-chaussures.component.html',
  styleUrls: ['./edit-chaussures.component.css']
})
export class EditChaussuresComponent implements OnInit {
  chaussureForm: Chaussure;
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private chaussureService: ChaussureService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    // ne pas oublier l'id à rechercher en paramétre
    this.chaussureService.getChaussureById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      // quand le serveur répond, j'assigne la réponse à mon attribut chaussure
      this.chaussureForm = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.chaussureService.edit(this.chaussureForm).subscribe(data => {
    });
    this.router.navigate(['/home']);
  }

}
