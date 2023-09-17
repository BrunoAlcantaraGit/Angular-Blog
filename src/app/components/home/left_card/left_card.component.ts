import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-card',
  templateUrl: './left_card.component.html',
  styleUrls: ['./left_card.component.css']
})
export class LeftCardComponent {
@Input()
imagemContPrincipal: string= '';
@Input()
conteudo:string = ''
}
