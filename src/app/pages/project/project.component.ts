import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  PortfolioData,
  PortfolioProject,
} from 'src/app/shared/class/portfolio.class';
import { PortfolioService } from 'src/app/shared/services/api/portfolio.service';
import { AnimationsService } from 'src/app/shared/services/config/animation.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Output('portfolioProjects') portfolioProjects: Array<PortfolioProject> = [];

  constructor(
    private titleService: Title,
    private portfolioService: PortfolioService,
    private animationService: AnimationsService
  ) {
    this.titleService.setTitle('Giovanni Lamarmora - Project');
  }

  ngOnInit(): void {
    //document.querySelectorAll('[data-inviewport]').forEach(element => {
    //  element.removeAttribute('data-inviewport');
    //});
    this.animationService.initAnimations();
    this.portfolioProjects = this.portfolioService.portfolio?.projects!;
  }

  changeLanguages(portfolio: PortfolioData) {
    this.portfolioProjects = portfolio.projects;
  }
}
