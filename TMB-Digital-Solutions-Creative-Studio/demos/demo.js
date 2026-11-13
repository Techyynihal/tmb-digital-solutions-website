// Interactive elements for TMB sample industry websites.
let cartTotal = 0, cartCount = 0;
document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
  cartTotal += Number(button.dataset.add || 0); cartCount += 1;
  const total = document.getElementById('cart-total');
  const count = document.getElementById('cart-count');
  if (total) total.textContent = `₹${cartTotal.toLocaleString('en-IN')}`;
  if (count) count.textContent = String(cartCount);
  button.textContent = 'Added ✓'; button.disabled = true;
}));

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  document.querySelectorAll('.store-product').forEach(card => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
}));

const propertyFilter = document.getElementById('property-filter');
if (propertyFilter) propertyFilter.addEventListener('submit', event => {
  event.preventDefault();
  const type = propertyFilter.elements.type.value;
  const propertyType = propertyFilter.elements.property.value.toLowerCase();
  const location = propertyFilter.elements.location.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll('.property-card')];
  let visible = 0;
  cards.forEach(card => {
    const matchesType = type === 'all' || card.dataset.kind === type;
    const matchesProperty = propertyType === 'any type' || card.dataset.property === propertyType;
    const matchesLocation = !location || card.dataset.location.includes(location);
    const show = matchesType && matchesProperty && matchesLocation;
    card.classList.toggle('is-hidden', !show);
    if (show) visible++;
  });
  const status = document.getElementById('property-status');
  status.textContent = `${visible} matching illustrative ${visible === 1 ? 'listing' : 'listings'} shown. Filters search this sample collection only; no live property database is connected.`;
});

document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.interaction-status');
  if (status) status.textContent = 'This is an interactive visual sample only. No real booking or patient request has been sent. Use the TMB project enquiry link to discuss a working version.';
}));
