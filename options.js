const nameInputEl = document.getElementById('name');
const saveBtn = document.getElementById('save');
const timeInput = document.getElementById('time');

saveBtn.addEventListener('click', () => {
    const name = nameInputEl.value;
    const notificationTime = timeInput.value;
    // chrome.storage.sync.set(
    //     {
    //         name,
    //     },
    //     () => {
    //         console.log(`Name is set ${name}`);
    //     }
    // );
    chrome.storage.local.set({
        name,
        notificationTime,
    });
});

chrome.storage.local.get(['name', 'notificationTime'], res => {
    nameInputEl.value = res.name ? res.name : '';
    timeInput.value = res.notificationTime ? res.notificationTime : 1000;
});
