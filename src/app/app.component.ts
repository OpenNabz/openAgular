import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-blog';
  lastUpdate = new Date();

  posts = [
    {
      title: 'Mon premier post',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque alias, esse magnam necessitatibus sit velit molestiae ullam accusamus tempore sed minim',
      loveIts: -10,
      created_at: this.lastUpdate
    },
    {
      title: 'Mon deuxième post',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque alias, esse magnam necessitatibus sit velit molestiae ullam accusamus tempore sed minim',
      loveIts: 0,
      created_at: this.lastUpdate
    },
    {
      title: 'Encore un post',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque alias, esse magnam necessitatibus sit velit molestiae ullam accusamus tempore sed minim',
      loveIts: 10,
      created_at: this.lastUpdate
    }
  ];
}
