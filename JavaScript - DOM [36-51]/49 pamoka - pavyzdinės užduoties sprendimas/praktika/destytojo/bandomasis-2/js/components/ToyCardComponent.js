class ToyCardComponent{
  constructor(props){
    this.props = props;
    this.htmmlElement = document.createElement("article");

    this.init();
  }

  init = () => {
    const {} = this.props;
  }
}

/*  buvęs
  init = () => {
    const { title, type, price, location, owner, onDelete } = this.props;
    const { fullname, mobile, address, email } = owner;

    const itemAddress = `${location.street}, ${location.city}, ${location.country}`;
    this.htmlElement.className = 'card p-3 shadow-sm';
    this.htmlElement.innerHTML = `
    <h2 class="h4 mb-1">${title}</h2>
    <h3 class="h5 text-muted">${type}</h3>
    <ul>
      <li>
        <strong>price</strong>:
        <span>${price} €</span>
      </li>
      <li>
        <strong>location</strong>:
        <span>${itemAddress}</span>
      </li>
    </ul>
    <h3 class="h5 text-muted">Owner</h3>
    <ul>
      <li>
        <strong>full name</strong>:
        <span>${fullname}</span>
      </li>
      <li>
        <strong>mobile</strong>:
        <span>${mobile}</span>
      </li>
      <li>
        <strong>address</strong>: 
        <span>${address}</span>
      </li>
      <li>
        <strong>email</strong>:
        <span>${email}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-3 me-3">✕</button>`;

    const delBtn = this.htmlElement.querySelector('.btn');
    delBtn.addEventListener('click', onDelete);
  }
}

*/