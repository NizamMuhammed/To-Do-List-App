var update = document.querySelector('#update-button');

update.addEventListener('click', function (_) {
    fetch('/update', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' }
    });
});