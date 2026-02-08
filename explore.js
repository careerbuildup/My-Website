document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const allListItems = document.querySelectorAll('#explore-grid li, .explore-grid-lower li');

    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        allListItems.forEach(item => {
            // We get the anchor tag inside the list item
            const link = item.querySelector('a');
            
            if (link) {
                const text = link.textContent.toLowerCase();
                
                // If the item is a 'View all' link, we don't hide it
                if (link.classList.contains('view-all')) {
                    item.style.display = 'block';
                }
                // Check if the item's text includes the search term
                else if (text.includes(searchTerm)) {
                    item.style.display = 'block'; // Show the list item
                } else {
                    item.style.display = 'none'; // Hide the list item
                }
            }
        });
    });
});