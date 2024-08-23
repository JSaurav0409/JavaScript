# DOM Manipulation Notes

## Getting Elements

### Get the parent element.  
        - const parent = document.querySelector('.parent');  
        - console.log(parent);

### Get all the child elements.  
        - console.log(parent.children);

### Accessing a single element from child or their text node.  
        - console.log(parent.children[1]);  
        - console.log(parent.children[1].innerHTML);

### Changing the style of a specific child element.  
        - parent.children[1].style.color = 'orange';  
    
### Accessing elements through iteration.  
        - for (let i = 0; i < parent.children.length; i++) {  
            console.log(parent.children[i].innerHTML);  
            }
 
### firstElementChild: Returns the first child element of the parent that is an element node.  
        - console.log(parent.firstElementChild);

### lastElementChild: Returns the last child element of the parent that is an element node.  
        - console.log(parent.lastElementChild);

### childNodes: Returns a NodeList of all child nodes of a given DOM element.  
        - console.log(parent.childNodes);
