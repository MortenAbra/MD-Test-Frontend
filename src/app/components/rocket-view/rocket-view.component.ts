import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from '../../components/rockets/rockets.component';
import { RocketService } from '../../core/services/rocket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rocket-view',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  providers: [Router, Input, RocketService],
  templateUrl: './rocket-view.component.html',
  styleUrl: './rocket-view.component.scss'
})
export class RocketViewComponent implements OnInit {
  rocketId: string | null = null;
  rocket: Rocket | null = null;
  constructor(
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private rocketService: RocketService){}

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(params => {
        this.rocketId = params.get("id");
        if (this.rocketId) {
          this.getRocketById(this.rocketId);
        }
      });
    }

  getRocketById(rocketId: string) {
    this.rocketService.getRocketById(rocketId).subscribe({
      next: rocket => {
        this.rocket = rocket
        console.log(rocket);
        
      }
    })
  }

  updateRocket() {   
    this.rocketService.updateRocket(this.rocket!).subscribe({
      next: value => {
        console.log(value);
        
      }
    })
  }

  deleteRocket(id: string) {
    if (id) {
      this.rocketService.deleteRocket(id).subscribe({
        next: value => {
          if (value.status === 200) {
            this.router.navigate(['rockets'])
          }
        }
      })
    }
  }

  goBack(): void {
    this.router.navigate(['/rockets']);
  }
}
