import { Component, Input, OnInit } from '@angular/core';
import { AppLocation } from '../../types/location.interface';
import { CommonModule } from "@angular/common";
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  imports: [CardComponent,CommonModule],
  standalone: true,
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: AppLocation[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
