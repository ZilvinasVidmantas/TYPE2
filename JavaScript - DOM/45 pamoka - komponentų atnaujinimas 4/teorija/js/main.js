const rootElement = document.querySelector('#root');

/*
  1. Sukurti UserManagerComponent, kuris atvaizduotų letelę ir formą viens šalia kito
    
    [10:40]
    Suformuoti klausimus
*/

const userManagerComponent = new UserManagerComponent();
rootElement.append(userManagerComponent.htmlElement);



