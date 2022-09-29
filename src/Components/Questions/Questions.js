import React from 'react';
import './Questions.css';
const Questions = () => {
    return (
        <div>
           <h2>How does react work?</h2>
           <p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
           Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
           <h2>What are the differences between props and state ?</h2>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Props</th>
            <th scope="col">State</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>The Data is passed from one component to another.</td>
            <td>The Data is passed within the component only.</td>
            </tr>
            
            <tr>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
            </tr>
 
            <tr>
            <td>Props can be used with state and functional components.</td>
            <td>State can be used only with the state components/class component (Before 16.0)</td>
            </tr>

             <tr>
             <td>Props are read-only</td>
             <td>State is both read and write.</td>
             </tr>
        
        </tbody>
        </table>

        <h2>useEffect use case without fetch</h2>
        <p>Running on state change: validating input field <br />
         Running on state change: live filtering <br />
         Running on state change: trigger animation on new array value</p>
        </div>
    );
};

export default Questions;