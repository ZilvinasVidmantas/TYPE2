const root = document.querySelector('#root');

const section1 = new Section({
  subSections: [],
  title: 'Sekcijos Pavadinimas',
  children: [
    {
      componentName: 'Paragraph',
      props: { text: 'Paragraph 1', className: 'bg-dark text-white p-3' }
    },
    {
      componentName: 'Paragraph',
      props: { text: 'Paragraph 2' }
    },
    {
      componentName: 'Paragraph',
      props: { text: 'Paragraph 3' }
    },
  ],
});
const section2 = new Section({
  title: 'Sekcijos Pavadinimas 2'
});

const p1 = new Paragraph({
  text: 'Pargafo tekstas 1',
  className: 'bg-dark text-white p-5'
});
const p2 = new Paragraph({
  text: 'Pargafo tekstas 2222',
  className: 'bg-light text-danger p-3'
});

root.appendChild(section1.htmlElement);
root.appendChild(section2.htmlElement);
root.append(p1.htmlElement, p2.htmlElement);