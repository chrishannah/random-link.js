/* random-link.js */

let randomLinks = document.querySelectorAll(".random-link")
if (randomLinks) {
    randomLinks.forEach(async (randomLink) => {
        var randomLinkData = await getRandomLinkData(randomLink)
        let randomLinkElement = createLinkElement(randomLinkData)
        randomLink.appendChild(randomLinkElement)
    })
}

async function getRandomLinkData(element) {
    let data_location = element.getAttribute('data-file')
    let data = await getLinkData(data_location)
    if (data.length > 0) {
        var item = shuffle(data)[0]
        let customTitle = element.getAttribute('data-custom-title')
        if (customTitle) {
            item.title = customTitle
        }
        return item
    }
    return defaultLink()
}


function createLinkElement(item) {
    let a = document.createElement('a')
    a.href = item.url
    a.textContent = item.title
    return a
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

async function getLinkData(data_location) {
    const response = await fetch(data_location)
    return response.json()
}

function defaultLink() {
    return {
        title: "Chris Hannah",
        url: "https://chrishannah.me"
    }
}
