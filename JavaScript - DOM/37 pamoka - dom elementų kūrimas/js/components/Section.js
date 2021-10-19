class Section {
  constructor(title, children, subSections) {
    // htmlElement - tai objekto savybė, kuria išsaugome komponento HTMLElement
    this.htmlElement = document.createElement('section'); // <section></section>
    // Komponentui specifinė logika
    this.title = title;
    this.children = children;
    this.subSections = subSections ?? [];
    // Po Sekcijos komponento sukūrimo, iškarto iškviečiame sudarymo metodą 'render';
    this.render();
  }

  // render metodas, naudojamas sugeneruoti komponento turinį
  render = () => {
    // <div></div>
    const container = document.createElement('div');
    // <div class="container"></div>
    container.className = 'container';
    // <section>
    //    <div class="container"></div>
    // </section>
    this.htmlElement.appendChild(container);

    // <h2></h2>
    const header = document.createElement('h2');
    // <h2 class="h3"></h2>
    header.className = 'h3';
    // <h2 class="h3">....</h2>
    header.innerHTML = this.title;
    // <div class="container">
    //    <h2 class="h3">....</h2>
    // </div>
    container.appendChild(header);
    
  }
}