document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.getAttribute('data-filter');

            // Update active class on filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter destination cards
            destinationCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});