# JavaScript DOM Manipulation

## 1. Adding Items to a List

### 1.1. Basic Function to Add a Language

```javascript
function addLanguage(langName) {
    // Create a new list item element
    
    const li = document.createElement("li");

    // Set the list item content to the language name

    li.innerHTML = langName;

    // Add the list item to the .language list

    document.querySelector(".language").appendChild(li);
}

// Example: Adding "Python" to the list

addLanguage("Python");

```

### 1.2. Optimized Function to Add a Language

```javascript
function addLanguageInOptimizeWay(langName) {
    // Create a new list item element

    const li = document.createElement("li");

    // Create a text node with the language name and add it to the list item

    li.appendChild(document.createTextNode(langName));

    // Add the list item to the .language list

    document.querySelector(".language").appendChild(li);
}

// Example: Adding "C++" and "Java" to the list

addLanguageInOptimizeWay("C++");
addLanguageInOptimizeWay("Java");

```
## 2. Editing List Items

### 2.1. Edit Using `innerHTML`
- Note : This directly changes the content of the selected list item.

```javascript

// Select the second list item

const secondLang = document.querySelector("li:nth-child(2)");

// Change its content to "Ruby"

secondLang.innerHTML = "Ruby";

```

### 2.2. Edit by `Replacing the Element`

- Note: This approach creates a new element and replaces the old one, rather than just changing the content.

```javascript

// Create a new list item element

const newList = document.createElement('li');
newList.textContent = "Ruby";

// Replace the old second list item with the new one

const secondLang = document.querySelector("li:nth-child(2)");
secondLang.replaceWith(newList);

```

### 2.3. Edit Using `outerHTML`
- Note : This completely replaces the selected list item, including the HTML structure.

```javascript

// Replace the entire first list item with a new one

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

```

## 3. Removing the last list item
- Note : This removes the selected list item from the list.

```javascript

// Select the last list item and remove it

const lastLang = document.querySelector('li:last-child');
lastLang.remove();

```