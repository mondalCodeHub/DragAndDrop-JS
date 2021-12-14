console.log("DRAG AND DROP || JAVASCRIPT - 18-08-2021");

const imageBox = document.querySelector('.imageBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imageBox.addEventListener('dragstart', (e) => {
    console.log("DragStart has been triggered");
    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className += ' hide'
    }, 0);
})

imageBox.addEventListener('dragend', (e) => {
    console.log("DragEnd has been triggered");
    e.target.className = 'imageBox'
})


//
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Dragover has been triggered");


    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log("Dragenter has been triggered");
        e.target.className += ' dashed';

    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log("Dragleave has been triggered");
        e.target.className = 'whiteBox'

    });

    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop has been triggered");
        e.target.append(imageBox)

    });
}
// Created by : mondalCodeHub