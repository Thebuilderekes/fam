function toggleCollapsible(event) {
	const target = event.target;
	if (target.tagName === "TD") {
		const contentRow = target.parentNode.nextElementSibling;
		contentRow.classList.toggle("active");
	}
}
