const jobsListingsSection = document.querySelector('.jobs-listings');

jobsListingsSection?.addEventListener('click', (event) =>{
    const element = event.target

    if (element.classList.contains('button-apply-job')){
        element.textContent = 'aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
});

const detailCardsSection = document.querySelector('.details-card');


detailCardsSection?.addEventListener('click', (event) => {
    const element = event.target

    if (element.classList.contains('button-apply-job')){
        element.textContent = 'aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
});


const locationFilter = document.querySelector('#location');
const cards = document.querySelectorAll('.job-card');

locationFilter.addEventListener('change', (event) =>{
    const chosenLocation = event.target.value

    cards.forEach(card => {

        const cardLocation = card.dataset.location;
        if (chosenLocation === 'all' || chosenLocation.toLowerCase() === cardLocation.toLowerCase()) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    })
})