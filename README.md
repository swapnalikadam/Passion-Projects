# Issue Tracking Application

After exploring HTML5 and CSS3, I have decided to understand the workings of JavaScript, a versatile programming language integral to web development. It enables the creation of dynamic and interactive content on web pages, handling tasks such as form validation, user interface interactivity, and asynchronous communication with servers through AJAX. Moreover, JavaScript is essential for developing single-page applications, interacting with web APIs, handling events, and ensuring cross-browser compatibility, contributing to enhanced interactivity and responsiveness in modern web applications.

I have created various functions to learn Event Handling- 
1. saveIssue(e)
   Purpose: Saves a new issue.
  Actions:
  - Retrieves issue details from the input fields.
  . Generates a unique issue ID using the Chance library.
  . Sets the initial status of the issue to 'Open'.
  . Stores the issue in the local storage.
  Resets the input form.
  Calls fetchIssues() to update the displayed issues.
  Prevents the default form submission behavior.

   
2. setStatusClosed(id)
   Purpose: Updates the status of an issue to 'Closed
   
3. deleteIssue(id)
   Purpose: Deletes an issue.
   
4. fetchIssues()
   Purpose: Fetches and displays the list of issues.
