const root = document.querySelector('#root');

const singleSectionData = sectionData[0];

const changePropComponent2ComponentName = ({ component, ...props }) => ({
  ...props,
  componentName: component,
})

const sectionComponent1 = new Section({
  title: singleSectionData.title,
  children: singleSectionData.children.map(changePropComponent2ComponentName),
  subSections: singleSectionData.subSections.map(({ children, ...subSection }) => ({
    ...subSection,
    children: children.map(changePropComponent2ComponentName)
  })),
});

root.appendChild(sectionComponent1.htmlElement);
