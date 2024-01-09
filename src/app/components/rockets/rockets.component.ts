import { Component, OnInit  } from '@angular/core';
import { RocketService } from '../../core/services/rocket.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

export interface Rocket {
  id: string;
  name: string;
  mission: string;
  speed: number;
}

@Component({
  selector: 'app-rockets',
  standalone: true,
  providers: [RocketService, Router],
  imports: [MatSelectModule, MatButtonModule , CommonModule],
  templateUrl: './rockets.component.html',
  styleUrl: './rockets.component.scss'
})


export class RocketsComponent implements OnInit {
  rockets: Rocket[] = [];
  selectedRocket!: string;

  constructor(
    private rocketService: RocketService,
    private router: Router) {}

  ngOnInit() {
    this.fetchRockets();
  }

  fetchRockets(): void {
    this.rocketService.getRockets().subscribe({
      next: value => {
        this.rockets = value;
      }
    })
  }

  goToUpdateRocket(rocketId: string): void {
    if (rocketId) {this.router.navigate(['rockets', rocketId]);}
  }

  createRocket(): void {
    this.router.navigate(['create-rocket'])
  }
}
