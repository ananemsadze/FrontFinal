const container = document.querySelector('.container');
const sitting = document.querySelectorAll('.row .sitting:not(emptyset)');
const clearAll = document.querySelector("#clearAll");

Main();

// saves the selected element to local storage
function updateSelectedCount() {
    const selectedSitting = document.querySelectorAll('.row .sitting.selected');
    console.log(selectedSitting)
    const sittingIndex = [...selectedSitting].map(sittingIndex => [...sitting].indexOf(sittingIndex));
    localStorage.setItem('selectedSeat', JSON.stringify(sittingIndex));
}

function Main() {
    const selectedSittings = JSON.parse(localStorage.getItem('selectedSeat'));
    if (selectedSittings !== null && selectedSittings.length > 0) {
        sitting.forEach((sitting, index) => {
            if (selectedSittings.indexOf(index) > -1) sitting.classList.add('selected');
        });
    }
}

// adds selected to class
container.addEventListener('click', e => {
    if (e.target.classList.contains('sitting')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// remove selected
clearAll.addEventListener('click', e => {
    sitting.forEach(selection => {
        selection.classList.remove('selected');
        localStorage.clear();
    })
});

updateSelectedCount();