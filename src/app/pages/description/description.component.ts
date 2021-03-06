import { Component, OnInit } from '@angular/core';
import { ClassType } from 'src/app/shared/class/accordion-constant.class';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  public get classType(): typeof ClassType {
    return ClassType;
  }
}
