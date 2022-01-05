const signupFormHandler = async (event) => {
	event.preventDefault();

	const username = document.querySelector("#username").value.trim();
	const email = document.querySelector("#inputEmail").value.trim();
	const password = document.querySelector("#inputpassword1").value.trim();
	const password2 = document.querySelector("#inputpassword2").value.trim();

	if (password !== password2) {
		alert("Passwords don't match. try again nerd");
		return;
	}

	if (username && email && password) {
		const response = await fetch("/api/users/create", {
			method: "POST",
			body: JSON.stringify({ username, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/");
		} else {
			alert("error creating account");
		}
	}
};

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
