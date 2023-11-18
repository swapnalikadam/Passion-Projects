document.getElemenyById('issueInputForm').addEventListner('submit', saveIssue);

function saveIssue(e){
	var	issueDesc = document.getElemenyById('issueDescInput').value;
	var issueSeverity = document.getElemenyById('issueSeverityInput').value;
	var issueAssignedTo = document.getElemenyById('issueAssignedTo').value;
	var issueId = chance.guid();
	var issueStatus = 'Open';

	var issue = {
		id: issueId;
		description: issueDesc,
		severity: issueSeverity;
		assignedTo: issueAssignedTo;
		status: issueStatus;
		}
		if(localStorage.getItem('issues') == null) {
			var issues = [];
			issues.push(issue);
			localStorage.setItem('issues', JSON.stringify(issues));
		}else {
			var issues = JASON.parse(localStorage.getItem('issues'));
			issues.push(issue);
			localStorage.setItem('issues', JASON.stringify(issues));
		}
		document.getElemenyById('issueInputForm').reset();
		fectchIssues();
		e.preventDefault();
}

	function setStatusClosed(id) {
		var issues = JASON.parse(localStorage.getItem('issues'));
		for (var i = 0; i < issues.length; i++) {
			if(issues[i].id == id){
				issues[i].status = 'Closed';
			}
			
		}

		localStorage.setItem('issues', JSON.stringify(issue));
		fetchIssues();
	}

function deleteIsuue(id){
	var issues = JASON.parse(localStorage.getItem('issues'));
		for (var i = 0; i < issues.length; i++) {
			if(issues[i].id == id){
				issues.splice(i, 1);
			}
			
		}

		localStorage.setItem('issues', JSON.stringify(issue));
		fetchIssues();
}

function fectchIssues()
{
	var issues = JASON.parse(localStorage.getItem('issues'));
	var issuesList = document.getElemenyById('issuesList');

	issuesList.innerHTML = '';

	for (var i = 0; i < issues.length; i++) {
		var id = issues[i].id;
		var desc = issues[i].description;
		var severity = issues[i].severity;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status;

		issuesList.innerHTML += '<div class="well">' +
								'<h6>Issue ID: '+ id + '</h6>' +
								'<p><span class="label label-info">' + status + '</span></p>'+
								'<h3>' + desc + '</h3>' +
								'<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' + 
								'<p><span class="glyphicon glyphicon-time"></span>' + assignedTo + '</p>' +
								'<a href="#" onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
								'<a href="#" onClick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
								'</div>';
	}
}
