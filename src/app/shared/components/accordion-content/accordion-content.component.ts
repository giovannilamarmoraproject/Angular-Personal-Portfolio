import { Component, Input, OnInit } from '@angular/core';
import { RevealUpAnimations } from 'src/assets/animation/reveal-up/reveal_up';
import { environment } from 'src/environments/environment';
import { AccordionConstants } from '../../class/accordion-constant.class';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css'],
})
export class AccordionContentComponent implements OnInit {
  @Input('parentData') parentData!: string;
  @Input('code') code!: string;
  @Input('content') content!: any;

  isOpen: boolean = true;

  environment = environment;
  aria_label: string = 'flush-heading';
  aria_control: string = 'flush-collapse';

  constructor(private revealUp: RevealUpAnimations) {}

  startStopAnimation() {
    /*if (this.isOpen) {
      this.revealUp.play();
      this.isOpen = false;
    } else {
      this.revealUp.play();
      this.isOpen = true;
    }
    console.log(this.isOpen);*/
    this.revealUp.stop();
  }

  public get accordionConstant(): typeof AccordionConstants {
    return AccordionConstants;
  }

  ngOnInit(): void {
    this.aria_label = this.aria_label + this.code + this.content.id;
    this.aria_control = this.aria_control + this.code + this.content.id;
  }
}
