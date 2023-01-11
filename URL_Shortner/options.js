let generateBtn = document.getElementById("save");
let API = document.getElementById("myapi");
let toastError = document.getElementById("error");
let toastSuccess = document.getElementById("success");

generateBtn.addEventListener("click", () => {
	if (API.value) {
		toastSuccess.classList.remove("d-none");
		toastError.classList.add("d-none");
		chrome.storage.local.set({ "API": API.value }).then(() => {
			console.log("Value is set to " + API.value);
		});
	} else {
		toastError.classList.remove("d-none");
		toastSuccess.classList.add("d-none");
	}
});
