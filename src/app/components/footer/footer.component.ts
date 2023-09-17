import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input()
  linkedin:string='https://www.linkedin.com/in/bruno-alcantara-23a71219b/'
  github: string ='https://github.com/BrunoAlcantaraGit?tab=repositories'
  instagran: string='https://www.instagram.com/'
}
