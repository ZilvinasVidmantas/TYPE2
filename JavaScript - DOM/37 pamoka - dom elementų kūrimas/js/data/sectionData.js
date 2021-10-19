/*
Section {
  title: String
  children: Array<Component>
  subSections?: Array<Section>
}

const sections: Array<Section>
*/

const sections = [
  {
    title: "Elementų paieška",
    children: [
      {
        component: "Paragraph",
        props: { text: "Norint su JavaScript keisti HTML turinį <em>(keisti JavaScript objektus, kurie susieti su HTML turiniu)</em> turime surasti elementus. Tai darome ieškant elementų pagal selektorių. Selektoriaus logika yra tokia pati kaip ir CSS selektorių." }
      }
    ],
    subSections: [
      {
        title: "Element.querySelector - surasti pirmą elementą pagal selektorių",
        children: [
          {
            component: "CodeExample",
            props: {
              lines: [
                { type: "comment", text: "By attribute id=\"\"" },
                { type: "code", text: "const main = document.querySelector('#main')" },
                { type: "comment", text: "By attribute class=\"\"" },
                { type: "code", text: "const h1 = main.querySelector('.h1');" },
                { type: "comment", text: "By tag name" },
                { type: "code", text: "const mainParagraph = main.querySelector('p');" },
              ]
            }
          }
        ],
      },
      {
        title: "Element.querySelectorAll - surasti visus elementus pagal selektorių",
        children: [
          {
            component: "CodeExample",
            props: {
              lines: [
                { type: "comment", text: "Select many by criteria" },
                { type: "code", text: "const mainListItems = document.querySelectorAll('.js-mainListItem');" },
              ]
            },
          }
        ]
      }
    ]
  }
]
