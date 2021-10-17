import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/model/feature/feature.model';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() feature: Feature = {
    title: '',
    description: '',
    icon: '',
  } as Feature;

  constructor() { }

  ngOnInit(): void {
  }

}
