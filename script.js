const container = document.querySelector('.container');
const sitting = document.querySelectorAll('.row .sitting:not(emptyset)');
const clearAll = document.querySelector("#clearAll");

populateUI();

function updateSelectedCount() {
    const selectedSitting = document.querySelectorAll('.row .sitting.selected');
    const sittingIndex = [...selectedSitting].map(sittingIndex  => [...sitting].indexOf(sittingIndex ));
    localStorage.setItem('selectedSeat', JSON.stringify(sittingIndex ));
}


function populateUI() {
    const selectedSittings = JSON.parse(localStorage.getItem('selectedSeat'));
    if (selectedSittings !== null && selectedSittings.length > 0) {
        sitting.forEach((sitting, index) => {
            if (selectedSittings.indexOf(index) > -1) {
                sitting.classList.add('selected');
            }
        });
    }
}

container.addEventListener('click', e => {
    if (e.target.classList.contains('sitting')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

clearAll.addEventListener('click', e => {
    sitting.forEach(selection => {
        selection.classList.remove('selected');
        localStorage.clear();
    })
});


updateSelectedCount();