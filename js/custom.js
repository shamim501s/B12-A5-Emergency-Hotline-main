// gobol function

function getElements(id) {
    const element = document.getElementById(id)
    return element;
}

// heartIcon function


const heartIcons = document.getElementsByClassName('heart-img')


for (let heartIcon of heartIcons) {
    heartIcon.addEventListener('mouseover', function () {
        let heartCount = getElements('heart-count').innerText
        let totalCount = Number(heartCount) + Number(1)
        getElements('heart-count').innerText = totalCount
        heartIcon.style.cursor = 'pointer';
    })
};


// copy number function

const copyBtns = document.getElementsByClassName('copy-btn')

for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {
        const copyText = copyBtn.parentNode.parentNode.children[1].children[2].innerText;
        navigator.clipboard.writeText(copyText)
        alert(`Number Copy: ${copyText} `)
        console.log(copyText)
        let copyCount = getElements('copy-count').innerText
        let totalCount = Number(copyCount) + Number(1)
        getElements('copy-count').innerText = totalCount
    })
}

// call button section

const callBtns = document.getElementsByClassName('call-btn')

for (let callBtn of callBtns) {
    callBtn.addEventListener('click', function () {
        let coinCount = getElements('coin-count').innerText
        if (coinCount <= 0) {
            alert(`Calling requires minimum 20 coins. Your available coins: ${coinCount}`);
            return;
        }
        const cardtitle = callBtn.parentNode.parentNode.children[1].children[1].innerText;
        const cardNumber = callBtn.parentNode.parentNode.children[1].children[2].innerText;

        alert(`Calling ${cardtitle} : ${cardNumber}`)

        let totalCount = Number(coinCount) - Number(20)
        getElements('coin-count').innerText = totalCount

        const HistoryContainer = getElements('history-container')
        const newCard = document.createElement('div')
        newCard.innerHTML = `
        <div class=" md:flex justify-between items-center mt-1 bg-slate-50 p-1">
                    <div>
                        <h1 class="text-[12px] font-bold">${cardtitle}</h1>
                        <p class="text-[12px]">${cardNumber}</p>
                    </div>
                    <div>
                        <h1 class="text-[10px]">${new Date().toLocaleTimeString()}</h1>
                    </div>
         </div>
        `;
        HistoryContainer.append(newCard);

    })
}

document.getElementById('clear-btn').addEventListener('click', function () {
    const HistoryContainer = getElements('history-container')
    HistoryContainer.innerHTML = '';
})
