const root = document.querySelector('#root');

const singleSectionData = sectionData[0];

// const changePropComponent2ComponentName = ({ component, ...props }) => ({
//   ...props,
//   componentName: component,
// })

// const sectionComponent1 = new Section({
//   title: singleSectionData.title,
//   children: singleSectionData.children.map(changePropComponent2ComponentName),
//   subSections: singleSectionData.subSections.map(({ children, ...subSection }) => ({
//     ...subSection,
//     children: children.map(changePropComponent2ComponentName)
//   })),
// });

// root.appendChild(sectionComponent1.htmlElement);

debugger;
const sectionLVL1 = new Section({ title: 'Pirmo lygio sekcija' });
const sectionLVL2 = new Section({ title: 'Antro lygio sekcija', level: 2 });

root.append(sectionLVL1.htmlElement, sectionLVL2.htmlElement);
