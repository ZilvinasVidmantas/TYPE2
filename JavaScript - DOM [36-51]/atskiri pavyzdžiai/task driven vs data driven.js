const rootElement = document.querySelector('#root');

const itemsArr = [
  { id: 'jk1', title: 'item 1', done: false },
  { id: 'jk6', title: 'item 2', done: true },
  { id: 'jk3', title: 'item 3', done: false },
  { id: 'jk9', title: 'item 4', done: true },
];

// Tasks driven aproach - užduotimis grįstas funkcionalumo kūrimas
{
  const header = document.createElement('h2');
  header.innerHTML = 'Task driven';
  rootElement.appendChild(header);

  const items = JSON.parse(JSON.stringify(itemsArr));

  const input = document.createElement('input');
  rootElement.append(input);

  const btn = document.createElement('button');
  btn.innerHTML = 'Prideti';
  rootElement.append(btn);

  const list = document.createElement('ul');
  list.style.width = "250px";
  rootElement.append(list);
  // -------------------------------------------------------
  const createListItem = () => {
    // Sukurti vaizdą
    const li = document.createElement('li');
    li.innerHTML = input.value;
    list.appendChild(li);
    //  Suvienodinti duomenis
    items.push({ title: input.value, done: false });
  }

  const completeTask = (e, id) => {
    // Vaizdo atnaujinimas
    const clickedListItem = e.target;
    if (clickedListItem.style.textDecoration === '') {
      clickedListItem.style.textDecoration = 'line-through';
    } else {
      clickedListItem.style.textDecoration = '';
    }
    // Duomenų suvienodinimas
    const ii = items.findIndex(x => id === x.id);
    items[ii].done = !items[ii].done;
  }

  const deleteItem = (e, id) => {
    // elemento ištrinimas
    e.target.parentElement.remove();
    // Duomenų suvienodinimas
    const ii = items.findIndex(x => id === x.id);
    items.splice(ii, 1);
  }

  items.forEach(({ id, title, done }) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';

    const liText = document.createElement('span');
    liText.style.flexGrow = '1';
    liText.innerHTML = title;
    li.append(liText);

    const btnDel = document.createElement('button');
    btnDel.innerHTML = '✕';
    btnDel.addEventListener('click', (e) => deleteItem(e, id))
    li.append(btnDel);

    if (done) liText.style.textDecoration = 'line-through';
    liText.addEventListener('click', (e) => completeTask(e, id));
    list.appendChild(li);
  });

  btn.addEventListener('click', createListItem);
}

// Data driven rendering aproach - duomenimis grįstas funkcionalumo kūrimas
{
  const header = document.createElement('h2');
  header.innerHTML = 'Data driven';
  rootElement.appendChild(header);

  const items = JSON.parse(JSON.stringify(itemsArr));

  const input = document.createElement('input');
  rootElement.append(input);

  const btn = document.createElement('button');
  btn.innerHTML = 'Prideti';
  rootElement.append(btn);

  const list = document.createElement('ul');
  list.style.width = "250px";
  rootElement.append(list);
  // -------------------------------------------------------
  const createListItem = () => {
    //  Papildyti duomenis
    items.push({ title: input.value, done: false });
    //  pervaizduoti sąrašo elementus
    renderItems();
  }

  const completeTask = (id) => {
    // Duomenų pakeitimas
    const ii = items.findIndex(x => id === x.id);
    items[ii].done = !items[ii].done;
    // pervaizduoti sąrašo elementus 
    renderItems();
  }

  const deleteItem = (id) => {
    // Duomenų pakeitimas
    const ii = items.findIndex(x => id === x.id);
    items.splice(ii, 1);
    // pervaizduoti sąrašo elementus 
    renderItems();
  }

  const renderItems = () => {
    list.innerHTML = '';
    const itemElements = items.map(({ id, title, done }) => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';

      const liText = document.createElement('span');
      liText.style.flexGrow = '1';
      liText.innerHTML = title;
      li.append(liText);

      const btnDel = document.createElement('button');
      btnDel.innerHTML = '✕';
      btnDel.addEventListener('click', () => deleteItem(id))
      li.append(btnDel);

      if (done) liText.style.textDecoration = 'line-through';
      liText.addEventListener('click', () => completeTask(id));
      return li;
    });
    list.append(...itemElements);
  }

  renderItems();
  btn.addEventListener('click', createListItem);
}


