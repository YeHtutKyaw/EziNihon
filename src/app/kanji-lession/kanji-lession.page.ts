import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kanji-lession',
  templateUrl: './kanji-lession.page.html',
  styleUrls: ['./kanji-lession.page.scss'],
})
export class KanjiLessionPage implements OnInit {
  level;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.level = this.route.snapshot.paramMap.get('level');
    //this.level = this.route.navigate(['/detail', { id: itemId }]);
  }

}
