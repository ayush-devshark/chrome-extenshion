const timeEl = document.getElementById('time');
const nameEl = document.getElementById('name');
const timerEls = document.getElementById('timer');

function updateTimeEl() {
    const currentTime = new Date().toLocaleTimeString();
    timeEl.textContent = `The Time is ${currentTime}`;

    chrome.storage.local.get(['timer'], res => {
        const time = res.timer ?? 0;
        timerEls.textContent = `Timer is at: ${time} seconds`;
    });
}
updateTimeEl();

setInterval(() => {
    updateTimeEl();
}, 1000);

// chrome.action.setBadgeText(
//     {
//         text: 'TIME',
//     },
//     () => {
//         alert('Thank you for trying out this extenshion, it will help you.');
//     }
// );

// chrome.storage.local.get(['name'], res => {
//     const name = res.name;
//     nameEl.innerText = name
//         ? `Your name is ${res.name}`
//         : 'Please enter your name from';
// });
