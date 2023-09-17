import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css']
})
export class RightCardComponent {
  @Input()
  cardPhoto:string ='';
  @Input()
  conteudo: string='';

}
