import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioData } from 'src/app/shared/class/portfolio.class';
import { AnimationsService } from 'src/app/shared/services/config/animation.service';
import { LOG } from 'src/app/shared/services/config/logger.service';
import { Utils } from 'src/app/shared/services/config/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  mobileDevice: Array<string> = ['Android', 'iPhone'];
  animation: string = '';
  SLIDE_RIGHT: string = 'slide-right';
  SLIDE_UP: string = 'slide-up';
  SLIDE_LEFT: string = 'slide-left';

  @Input('portfolio') portfolio?: PortfolioData;

  yearExperience?: number;

  year: number = new Date().getFullYear();

  // Used for version
  private clickCount = 0;
  // Variabile per mostrare/nascondere la versione
  public showVersion = false;

  constructor(
    private animationService: AnimationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    LOG.info(navigator.userAgent, 'Current Device');
    let isMobileDevice: boolean = false;
    this.mobileDevice.forEach((device) => {
      const isMobile = navigator.userAgent.includes(device);
      if (isMobile) {
        isMobileDevice = true;
      }
    });
    if (isMobileDevice) {
      this.animation = this.SLIDE_LEFT;
    } else {
      this.animation = this.SLIDE_RIGHT;
    }
    this.animationService.setAnimation('#footer-text', this.animation);
    this.yearExperience = this.calculateYearsElapsed();
  }
  environment = environment;

  scrollTo(id: string) {
    try {
      Utils.scrollTo(id);
    } catch (e) {
      // Naviga alla homepage senza ricaricare l'intera pagina
      this.router.navigate(['/']).then(() => {
        // Ritenta lo scroll dopo la navigazione
        setTimeout(() => {
          try {
            Utils.scrollTo(id);
          } catch (retryError) {
            console.error(`Retry failed: ${retryError}`);
          }
        }, 500); // Ritardo per garantire il completamento della navigazione
      });
    }
  }

  calculateYearsElapsed(): number {
    // Reference date (June 11, 2021)
    const referenceDate: Date = new Date('2021-06-11T00:00:00');

    // Current date
    const currentDate: Date = new Date();

    // Calculate the difference in milliseconds between the two dates
    const timeDifferenceInMillis: number =
      currentDate.getTime() - referenceDate.getTime();

    // Calculate the number of milliseconds in a year (approximate)
    const millisecondsInYear: number = 365.25 * 24 * 60 * 60 * 1000;

    // Calculate the number of elapsed years rounding down
    const yearsElapsed: number = Math.floor(
      timeDifferenceInMillis / millisecondsInYear
    );

    return yearsElapsed;
  }

  // Metodo che incrementa il contatore e mostra la versione al terzo click
  develop() {
    this.clickCount++;

    // Se il contatore arriva a 3, mostra la versione
    if (this.clickCount === 3) {
      this.showVersion = true;
    }
  }
}
