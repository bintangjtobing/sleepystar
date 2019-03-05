const buttons = document.getElementById('buttons');
const tagNames = ['flower', 'code', 'tattoo', 'tech', 'dog', 'country', 'city'];
const grid = document.querySelector('.grid');

//create buttons //#endregion
for (let i = 0; i < tagNames.length; i++) {
    let newButton = document.createElement('button');
    newButton.innerHTML = tagNames[i];
    newButton.classList.add('newbutton');
    buttons.appendChild(newButton);
}

//pick random tagname
let randomIndex = Math.floor(Math.random() * tagNames.length);
let tag = tagNames[randomIndex];
console.log(tag);

fetch('https://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=qO22sYWhIg0BeFi4qSLfzu2qGSQtZnyVfM6nxiqGts28yGS3y2')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        console.log(result);
        let items = result.response;

        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
            if (items[i].photos != undefined) {
                const imgSrc = items[i].photos[0].original_size.url;
                const img = document.createElement('img');
                img.src = imgSrc;
                // console.log(img);
                grid.appendChild(img);

            }
        }
    })

// what happen after users click the button
buttons.onclick = function (event) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == tag) {
        alert('Your guess is correct');
        location.reload();
    } else {
        alert('Nope. Think Again! ');
        location.reload();
    }

}

// qO22sYWhIg0BeFi4qSLfzu2qGSQtZnyVfM6nxiqGts28yGS3y2 // this is my tumblr API KEY //