let input = document.querySelector('input')

let textarea = document.querySelector('textarea')

// This event listener has been implemented to identify a
// Change in the input section of the html code
// It will be triggered when a file is chosen.
input.addEventListener('change', () => {
	let files = input.files;

	if (files.length == 0) return;

	
	const file = files[0];

	let reader = new FileReader();

	reader.onload = (e) => {
		const file = e.target.result;

		// This is a regular expression to identify carriage
		// Returns and line breaks
		const lines = file.split(/\r\n|\n/);
		textarea.value = lines.join('\n');

	};

	reader.onerror = (e) => alert(e.target.error.name);

	reader.readAsText(file);
});
