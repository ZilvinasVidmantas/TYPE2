const root = document.querySelector('#root');

debugger;
const sectionComponent1 = new Section({
  subSections: [],
  title: 'Sekcijos Pavadinimas',
  children: [
    {
      componentName: 'Paragraph',
      props: { text: 'Paragraph 1', className: 'bg-dark text-white p-3' }
    },
    {
      componentName: 'CodeExample',
      props: {
        lines: [
          { type: 'comment', text: 'komentaras 1'},
          { type: 'code', text: 'kodas 1'},
          { type: 'comment', text: 'komentaras 2'},
          { type: 'code', text: 'kodas 2'},
          { type: 'comment', text: 'komentaras 3'},
          { type: 'code', text: 'kodas 3'},
        ]
      }
    },
    {
      componentName: 'CodeExample',
      props: {
        lines: [
          { type: 'comment', text: 'komentaras 1'},
          { type: 'comment', text: 'komentaras 2'},
          { type: 'code', text: 'kodas 1'},
          { type: 'code', text: 'kodas 2'},
        ]
      }
    },
  ],
});

root.appendChild(sectionComponent1.htmlElement);
