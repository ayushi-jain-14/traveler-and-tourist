
  
  // Form Submission Handler
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate and display message
    if (name && email && message) {
      document.getElementById('formResponse').textContent = `Thank you, ${name}! We'll get back to you soon.`;
      document.querySelector('form').reset();
    } else {
      document.getElementById('formResponse').textContent = 'Please fill in all fields.';
    }
  }
  
// choose your traveler type

// Function to filter trips based on categories
const filterTrips = (category) => {
// Hide all trips
document.querySelectorAll('.trip-card').forEach(card => {
card.style.display = 'none';
});
// Show trips of the selected category
document.querySelectorAll(`.${category}`).forEach(card => {
card.style.display = 'block';
});
};
// Event listeners for category buttons
document.querySelectorAll('.category-btn').forEach(button => {
button.addEventListener('click', () => {
filterTrips(button.getAttribute('data-category'));
});
});
