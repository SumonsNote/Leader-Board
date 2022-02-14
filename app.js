document.getElementById('top-players').style.color = 'tomato';
document.getElementById('top-blogs').style.color = 'dodgerblue';


const playerColors = document.getElementsByClassName('player');
for (const playerColor of playerColors) {
    playerColor.style.backgroundColor = "rgba(0, 200, 300, 1)";
}

const listBtn = document.getElementById('list-btn').addEventListener('click', function () {
    const unorderList = document.createElement('li');
    const textnode = document.createTextNode("CEO: Jhankar Mahbub");
    unorderList.appendChild(textnode);
    document.getElementById('unordered-list').appendChild(unorderList);
})

const addNumber = document.getElementById('add-number-btn').addEventListener('click', function () {
    const addInputNumber = document.getElementById('input-add-number');
    addInputNumber.value++;
    if (addInputNumber.value >= 5) {
        document.getElementById("add-number-btn").disabled = true;
    }
})