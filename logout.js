function confirmLogout() {
	if (confirm("Are you sure you want to log out?")) {
		// Perform logout logic here
		window.location.href = '/logout'; 
		}
	}