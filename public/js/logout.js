const logout = async () => {
	const response = await fetch("/api/users/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		document.location.replace("/");
	} else {
		alert("Log out ERROR (HOW?!?!?! ****Dev crying atm****)");
	}
};

document.querySelector("#logout").addEventListener("click", logout);
