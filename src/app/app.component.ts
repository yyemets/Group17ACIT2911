import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor() {
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'assets/proj.js'
    ];
    for (const script of dynamicScripts) {
      const node = document.createElement('script');
      node.src = script;
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
