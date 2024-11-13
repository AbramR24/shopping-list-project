// Get all <li> elements in the shopping list
var listItems = document.getElementsByTagName('li');

// Get the <h2> heading and its text
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;

// Count the number of <li> elements
var totalItems = listItems.length;

// Update the heading to include the total number of items
var newHeading = headingText + ' <span>(' + totalItems + ' items)</span>';
heading.innerHTML = newHeading;

// Iterate through each <li> element
for (var i = 0; i < listItems.length; i++) {
    // Get the text of the current <li> element
    var itemText = listItems[i].textContent.toLowerCase();

    // Check if the item matches "fresh figs," "kale," or "honey"
    if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
        // Assign the class "cool" to the <li> element
        listItems[i].className = 'cool';
    }
}
