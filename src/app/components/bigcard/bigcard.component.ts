import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.scss'],
})
export class BigcardComponent {
  @Input()
  title: string = 'The game awards';
  @Input()
  imageUrl: string =
    'https://www.ojilo.com.br/arquivos_personalizados/uploads/noticias/fotos/thegameawards2022capa_rm92_657365cf1f091.jpg';
  @Input()
  contentText: string =
    "Aconteceu ontem (7), o The Game Awards com diversos trailers e a premiação em várias categorias. Como era esperado, Baldur's Gate 3 foi o grande vencedor da noite, eleito o Jogo do ano.";

  @Input()
  id: string = '';
}
