let generateBtn = document.getElementById("short");
let URL = document.getElementById("url");
let toastError = document.getElementById("error");
let toastSuccess = document.getElementById("success");
let para = document.getElementById("text");
let butt = document.getElementById("butt");
let copy = document.getElementById("copy");
let qr = document.getElementById("qr");
const url = "https://t.ly/api/v1/link/shorten";

function copyToClipboard(value) {
	navigator.clipboard.writeText(value);
}

generateBtn.addEventListener("click", () => {
	if (URL.value) {
		toastError.classList.add("d-none");

		chrome.storage.local.get(["API"]).then((result) => {
			const headers = {
				"Content-Type": "application/json",
				Accept: "application/json",
			};

			let body = {
				long_url: URL.value,
				domain: "https://t.ly/",
				include_qr_code: true,
				api_token: result.API,
			};

			fetch(url, {
				method: "POST",
				headers,
				body: JSON.stringify(body),
			})
				.then((response) => response.json())
				.then((json) => {
					toastSuccess.textContent = json.short_url;
					butt.classList.remove("d-none");
					toastSuccess.classList.remove("d-none");
					copy.addEventListener("click", () => {
						copyToClipboard(json.short_url);
					});
					qr.addEventListener("click", () => {
						console.log(json.qr_code.qr_code_url);
						window.location.replace(json.qr_code.qr_code_url);
					});
				});
		});
	} else {
		toastError.classList.remove("d-none");
	}
});
