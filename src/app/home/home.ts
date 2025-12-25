import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { Services } from '../services/services';
import { OurStory } from '../our-story/our-story';
import { Contact } from '../contact/contact';
import { StatisticsComponent } from '../statistics/statistics.component';
import { StrategicLocation } from '../strategic-location/strategic-location';
import { TrustSection } from '../trust-section/trust-section';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, Services, OurStory, Contact, StatisticsComponent, StrategicLocation, TrustSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
