import { Component, Input, OnInit } from '@angular/core';
import { AppLocation } from '../../types/location.interface';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [CommonModule],
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: AppLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
