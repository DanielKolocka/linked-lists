# JavaScript Singly Linked List Implementation

This mini-project involves implementing a fundamental **Singly Linked List** data structure from scratch in pure JavaScript, using the **factory function pattern**.

It serves as an exercise in understanding sequential data storage where elements (**Nodes**) are linked together using references/pointers (`nextNode`), contrasting them with array-based storage.

---

## Implemented Methods

The `LinkedList` factory function manages the list's structure and exposes the following core methods:

| Method | Description |
| :--- | :--- |
| `append(value)` | Adds a new node to the **end** of the list. |
| `prepend(value)` | Adds a new node to the **beginning** of the list. |
| `pop()` | Removes and returns the **last** node. |
| `at(index)` | Retrieves the node at a specified index. |
| `contains(value)` | Returns `true` if the value is present, otherwise `false`. |
| `find(value)` | Returns the **index** of the node containing the value, or `-1` if not found. |
| `size()` | Returns the total count of nodes. |
| `toString()` | Returns the list as a visual string (e.g., `( value ) -> ( value ) -> null`). |
| `getHead()` / `getTail()` | Returns the first or last node, respectively. |

---

## Source and Learning

This project was built following the curriculum for **The Odin Project's** [JavaScript Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists) lesson.
