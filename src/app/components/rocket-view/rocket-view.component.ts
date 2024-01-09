import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rocket-view',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule],
  providers: [],
  templateUrl: './rocket-view.component.html',
  styleUrl: './rocket-view.component.scss'
})
export class RocketViewComponent implements OnInit {
  rocketId: string | null = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.rocketId = this.route.snapshot.paramMap.get('id');
  }

}
