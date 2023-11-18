# Issue Tracking Application

After exploring HTML5 and CSS3, I have decided to understand the workings of JavaScript, as it is a versatile programming language integral to web development. It enables the creation of dynamic and interactive content on web pages, handling tasks such as form validation, user interface interactivity, and asynchronous communication with servers through AJAX. Moreover, JavaScript is essential for developing single-page applications, interacting with web APIs, handling events, and ensuring cross-browser compatibility, contributing to enhanced interactivity and responsiveness in modern web applications.

I have created various functions to learn Event Handling- 
1. saveIssue(e) - Saves a new issue.  
   - Retrieves issue details from the input fields.
   - Generates a unique issue ID using the Chance library.
   - Sets the initial status of the issue to 'Open'.
   - Stores the issue in the local storage.
   - Resets the input form.
   - Calls fetchIssues() to update the displayed issues.
   - Prevents the default form submission behavior.

   
2. setStatusClosed(id) - Updates the status of an issue to 'Closed
   - Retrieves the list of issues from local storage.
   - Finds the issue with the given ID and updates its status.
   - Stores the modified issues back in local storage.
   - Calls fetchIssues() to update the displayed issues.

   
3. deleteIssue(id) - Deletes an issue.
    - Retrieves the list of issues from local storage.
    - Finds the issue with the given ID and removes it from the list.
    - Stores the modified issues back in local storage.
    - Calls fetchIssues() to update the displayed issues.

   
4. fetchIssues() - Fetches and displays the list of issues.
    - Retrieves the list of issues from local storage.
    - Clears the existing content of the issues list.
    - Iterates through the list of issues and creates HTML elements for each issue.
    - Updates the displayed issues on the webpage.



