//set variables and event listeners
let addBtn = document.getElementById('button-addon2');
addBtn.addEventListener("click", addChapter)
let inChapter = document.getElementById('chapterName')
let inLink = document.getElementById('chapterLink')
let parentList = document.getElementById('parentList');
let p = document.getElementsByTagName('p')

function addChapter(e) {
    let currentBtn = e.currentTarget
    // create li element
    let newLi = document.createElement('li')

    newLi.className = 'list-group-item d-flex justify-content-between'
    newLi.innerHTML = `<h3 class="flex-grow-1">${inChapter.value}</h3><a href="https://www.${inLink.value}" target="_blank"><span>${inLink.value}</span></a>
                    <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
                    <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`;
    // append created element
    parentList.appendChild(newLi)

    // reset input value to null
    inChapter.value = ''
    inLink.value = ''

}
function removeChapter(CurrentElement) {
    CurrentElement.parentElement.remove();
}
function editChapter(currentElement) {
    if (currentElement.textContent === 'Edit') {
        currentElement.textContent = 'Done';

        // Get the parent list item
        let listItem = currentElement.parentElement;

        // Find the elements inside the list item
        let chapterHeading = listItem.querySelector('h3');
        let linkElement = listItem.querySelector('a');

        // Create input fields for editing
        let chapterInput = document.createElement('input');
        chapterInput.type = 'text';
        chapterInput.placeholder = 'Chapter Name';
        chapterInput.value = chapterHeading.textContent;

        let linkInput = document.createElement('input');
        linkInput.type = 'text';
        linkInput.placeholder = 'Topic link';
        linkInput.value = linkElement.textContent;

        // Replace the chapter name and topic link elements with input fields
        chapterHeading.replaceWith(chapterInput);
        linkElement.replaceWith(linkInput);
    } else {
        currentElement.textContent = 'Edit';

        // Get the parent list item again
        let listItem = currentElement.parentElement;

        // Find the input fields inside the list item
        let chapterInput = listItem.querySelector('input[placeholder="Chapter Name"]');
        let linkInput = listItem.querySelector('input[placeholder="Topic link"]');

        // Create heading and anchor elements to display the edited information
        let chapterHeading = document.createElement('h3');
        let linkElement = document.createElement('a');
        linkElement.href = "https://www." + linkInput.value;
        linkElement.textContent = linkInput.value;
        chapterHeading.textContent = chapterInput.value;
        chapterHeading.className = 'flex-grow-1';

        // Replace the input fields with the updated headings and link
        chapterInput.replaceWith(chapterHeading);
        linkInput.replaceWith(linkElement);
    }
}