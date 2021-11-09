class ToyCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  fortmatBadge = (content) => 
    `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success ms-4">${content}</span>`;

  formatPrice = () => {
    const {
      price: { currency, amount },
      discount: { type, amount: value }
    } = this.props;

    let finalPrice;
    let discountBadge = '';
    switch (type) {
      case 'amount':
        finalPrice = amount - value;
        discountBadge = this.fortmatBadge(`-${value} ${currency}`);
        break;
      case 'toFixed':
        finalPrice = value;
        break;
      case 'percentage':
        finalPrice = Math.round(100 * amount * (1 - value / 100)) / 100;
        discountBadge = this.fortmatBadge(`-${value} %`);;
        break;
    }

    return `
    <span class="d-inline-flex">
      <span class="text-decoration-line-through fw-light pe-2 text-danger">${amount} ${currency}</span>
      <strong class="text-success position-relative">${finalPrice} ${currency} ${discountBadge}</strong>
    </span>`;
  }

  formatAgeRestriction = () => {
    const { ageRestrictions } = this.props;
    return ageRestrictions
      ? `<div>Age: ${ageRestrictions.from}+</div>`
      : `<div class="text-white user-select-none">fake text</div>`;
  }


  init = () => {
    const { title, imgSrc, onDelete } = this.props;

    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card shadow position-relative';
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}"  height="300px" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <div>
        <span>Price:</span>
        ${this.formatPrice()}
      </div>
      ${this.formatAgeRestriction()}
    </div>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>`;
    const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);
  }
}