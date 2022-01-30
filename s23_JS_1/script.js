// Javascript goes in here
function createParagraph() {
    const para = document.createElement('p'); // creates a <p> element
    para.textContent = 'You clicked the button!'; // sets the text to the string
    document.body.appendChild(para); // puts the paragraph into the HTML body
}

const buttons = document.querySelectorAll('button'); // sets all the buttons to the var buttons
                                                        // can put '.my-class' to reference elements
                                                        // by their id rather than their type

for (const button of buttons) {
    button.addEventListener('click', createParagraph); // when the the button is clicked, runs the function
}