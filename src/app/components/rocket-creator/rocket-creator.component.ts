import { Component, OnInit } from '@angular/core';
import { RocketService } from '../../core/services/rocket.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Rocket } from '../rockets/rockets.component';

@Component({
  selector: 'app-rocket-creator',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  providers: [RocketService, Router],
  templateUrl: './rocket-creator.component.html',
  styleUrl: './rocket-creator.component.scss'
})
export class RocketCreatorComponent implements OnInit {
  rocket = {name: '', mission: '', speed: 0 };

  constructor(
    private rocketService: RocketService,
    private router: Router) {}

  ngOnInit(): void {
      
  }

  createRocket() {
    if (this.rocket.name !== '' && this.rocket.mission !== '') {
      this.rocketService.createRocket({name: this.rocket.name, mission: this.rocket.mission, speed: this.rocket.speed}).subscribe({
        next: value => {
          if (value.status === 200) {
            this.router.navigate(['rockets'])          
          }
        }
      })
    }
  }

  goBack() {
    this.router.navigate(['rockets'])
  }
  
}
