 Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ans:
getElementById:- it use to specific html element within a web page by its unique id attribute.
getElementsByClassName:-It is use htmlcollection of all descendant elements that have all the specified class names.
querySelector: It is  the first element that matches a CSS selector within the document or a specified element.
querySelectorAll: It is use all elements that match a CSS selector, as a satic nodelist.



2. How do you **create and insert a new element into the DOM**?

ans:-
Create a new element with document.createElement('tag') and append the select container

3. What is **Event Bubbling** and how does it work?

ans:-
Event bubbling is a process where an event triggers on target element first, then sequentially on its parent elements up root, allowing ancestors to react to child events without separate listeners And  work, event bubbling sends an event from  innermost element outward, letting parent elements catch and respond without direct listeners on child.

4. What is **Event Delegation** in JavaScript? Why is it useful?

ans:-
Event Delegation is attaching one event listener to a parent element to handle events from its child elements using event bubbling, making it efficient and easier to manage dynamic content. It is useful cause  reduces memory usage by minimizing event listeners, improves performance, and allows handling events  dynamically added elements, web side load quickly


5. What is the difference between **preventDefault() and stopPropagation()** methods?

ans:

preventDefault() method stops the default browser behavior for an event and stopPropagation()method stops an event from bubbling up to parent elements

---

