# JavaScript DOM Manipulation 3

## Code

### Creating an element using JS
### createElement : `createElement` is a method for creating an element with the specified tagname
    const div = document.createElement('div');
    console.log(div);

### Setting properties of the div
    div.className = 'main'; // Sets the class name of the div
    div.id = 2; // Sets the ID of the div
    div.setAttribute('title', 'generated title'); // Sets a title attribute for the div

### Styling the div
    div.style.backgroundColor = "green"; // Sets the background color
    div.style.color = "beige"; // Sets the text color
    div.style.padding = '12px'; // Sets the padding
    div.style.borderRadius = '10px'; // Sets the border radius
    div.style.textAlign = "center"; // Sets the text alignment

### Adding text to the div
### addText: The `addText` variable is used to create and add a text node to an HTML element.


    const addText = document.createTextNode("Chai aur Code"); // Creates a text node
    div.appendChild(addText); // Appends the text node to the div

### Appending the div to the body

### appendChild: The `appendChild` method is used to add a child node to a specified parent node in the DOM.
    document.body.appendChild(div);

