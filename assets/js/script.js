/*-----------------------------------------------------------------

Template Name: Stratify - Business Consulting HTML Template
Author:  ThemeMascot
Author URI: https://themeforest.net/user/thememascot/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Stratify - Business Consulting HTML Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. color switcher
03. header
04. gsap animation
05. js animation
06. fullScreen search
07. swiper slider
08. hover add class remove class
09. search screen
10. background image
11. magnificPopup
12. coundawn
13. counterup
14. back to top
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");

	// document
	// 	.getElementById("upload")
	// 	.addEventListener("change", function (event) {
	// 		const file = event.target.files[0];
	// 		if (!file) return;

	// 		// Use Compressor.js
	// 		new Compressor(file, {
	// 			quality: 0.6, // Adjust the compression quality (0.0 - 1.0)
	// 			success(result) {
	// 				// Create a URL for the compressed image
	// 				const url = URL.createObjectURL(result);
	// 				const output = document.getElementById("output");
	// 				output.src = url;

	// 				// Optionally, allow users to download the compressed image
	// 				console.log("Compressed Image Blob:", result);
	// 			},
	// 			error(err) {
	// 				console.error("Compression Error:", err.message);
	// 			},
	// 		});
	// 	});

	document
		.getElementById("upload")
		.addEventListener("change", function (event) {
			const file = event.target.files[0];
			if (!file) return;

			// Use Compressor.js
			new Compressor(file, {
				quality: 0.6, // Adjust the compression quality (0.0 - 1.0)
				success(result) {
					// Create a URL for the compressed image
					const url = URL.createObjectURL(result);
					const output = document.getElementById("output");
					output.src = url;

					// Create a download link
					const downloadLink = document.getElementById("download-link");
					downloadLink.href = url;
					downloadLink.download = "compressed-image.jpg"; // Set default file name
					downloadLink.style.display = "inline-block"; // Show the link
				},
				error(err) {
					console.error("Compression Error:", err.message);
				},
			});
		});
})(jQuery);
