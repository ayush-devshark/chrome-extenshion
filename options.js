const nameInputEl = document.getElementById('name');
const saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', () => {
    const name = nameInputEl.value;
    // chrome.storage.sync.set(
    //     {
    //         name,
    //     },
    //     () => {
    //         console.log(`Name is set ${name}`);
    //     }
    // );
    chrome.storage.local.set(
        {
            name: name,
        },
        () => {
            console.log(`Name is set ${name}`);
        }
    );
});

chrome.storage.local.get(['name'], res => {
    nameInputEl.value = res.name ? res.name : '';
});
