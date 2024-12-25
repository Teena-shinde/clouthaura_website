// Optional JavaScript for additional interactivity
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value;
      console.log('Searching for:', query); // Replace with actual search functionality
    });
  });
  document.querySelector('.checkout-form form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission for demo purposes

    // Validation or processing of form data
    alert('Proceeding to payment...');
    // Here you would send data to a backend or payment processor.
});
