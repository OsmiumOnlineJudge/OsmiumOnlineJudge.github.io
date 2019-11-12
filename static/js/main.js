"use strict";
function openwsb(url) {
	window.open(url);
}
function openwss(url) {
	window.location.replace(url);
}
$(function() {
	if(UA() == "pcduan")wblnk();
	else {
		$("body").empty();
		alert('OOJ不支持移动设备。', '哦，天哪', '好吧', "backp()");
	}
	$("*").children("#dayer").hide();
	$("*").children("#nighter").show();
	$("*").hover(
		function() {
			$(this).children("#dayer").show();
			$(this).children("#nighter").hide();
		},
		function() {
			$(this).children("#dayer").hide();
			$(this).children("#nighter").show();
		}
	);
	$("ul.nav li").hover(
		function() {
			$(this).stop().animate({"marginLeft":"-12px"},50);
		},
		function() {
			$(this).stop().animate({"marginLeft":"-90px"},50);
		}
	);
	$("footer.botm").hover(
		function() {
			$(this).stop().animate({"marginBottom":"-12px"},50);
		},
		function() {
			$(this).stop().animate({"marginBottom":"-62px"},50);
		}
	);
});
function UA() {
	return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "yidongduan" : "pcduan";
}
function showThing(l,thing) {
	l.innerHTML=thing;
}
function backp() {
	history.length > 1 ? history.back() : window.close();
}
function wblnk() {
	var hbelmt = "";
	hbelmt += "<header class=\"top\" style=\"height: 64px;\">";
	hbelmt += "	<img style=\"width: 64px; height: 64px; vertical-align: middle;\" alt=\"\"";
	hbelmt += "	src=\"\/static\/icon\/ooj.png\" \/>";
	hbelmt += "	<span class=\"changetext1\" style=\"cursor: default; vertical-align: middle; font-size: 40px;\">";
	hbelmt += "		Osmium&nbsp;OJ";
	hbelmt += "	<\/span>";
	hbelmt += "	<a href=\"\/u\/register\">";
	hbelmt += "		<button class=\"round fill2\" style=\"width: 50px; height: 50px; vertical-align: middle; font-size: 16px; color: #000000;\">";
	hbelmt += "			注册";
	hbelmt += "		<\/button>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/u\/login\">";
	hbelmt += "		<button class=\"round fill2\" style=\"width: 50px; height: 50px; vertical-align: middle; font-size: 16px; color: #000000;\">";
	hbelmt += "			登录";
	hbelmt += "		<\/button>";
	hbelmt += "	<\/a>";
	hbelmt += "<\/header>";
	hbelmt += "<ul class=\"nav\">";
	hbelmt += "	<a href=\"\/\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				首页";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1568083812902\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"1172\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M230.4 992c-64 0-115.2-51.2-115.2-115.2L115.2 544 76.8 582.4C70.4 588.8 57.6 595.2 44.8 595.2c-12.8 0-25.6-6.4-32-12.8C6.4 569.6 0 556.8 0 544 0 537.6 6.4 524.8 12.8 512l467.2-467.2C486.4 38.4 499.2 32 512 32s25.6 6.4 32 12.8L1011.2 512C1017.6 524.8 1024 537.6 1024 544c0 12.8-6.4 25.6-12.8 32-6.4 6.4-19.2 12.8-32 12.8s-25.6-6.4-32-12.8L512 147.2 211.2 448l0 422.4c0 12.8 12.8 25.6 25.6 25.6l115.2 0 0-185.6c0-25.6 19.2-44.8 44.8-44.8l230.4 0c25.6 0 44.8 19.2 44.8 44.8s-19.2 44.8-44.8 44.8L441.6 755.2l0 185.6c0 25.6-19.2 44.8-44.8 44.8L230.4 985.6zM627.2 992c-25.6 0-44.8-19.2-44.8-44.8 0-25.6 19.2-44.8 44.8-44.8l160 0c12.8 0 25.6-12.8 25.6-25.6l0-256c0-25.6 19.2-44.8 44.8-44.8 25.6 0 44.8 19.2 44.8 44.8l0 256c0 64-51.2 115.2-115.2 115.2L627.2 992z\"";
	hbelmt += "					p-id=\"1173\" fill=\"#000000\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/problems\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				题库";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1567941214284\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"1832\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M864 140.8c-12.8 0-32 12.8-32 32L832 896c0 32-19.2 64-51.2 64l-108.8 0L262.4 960C224 960 192 928 192 896l0-64C192 800 224 768 256 768l499.2 0c12.8 0 12.8-6.4 12.8-19.2L768 128c0-64-32-128-102.4-128L262.4 0C198.4 0 128 57.6 128 128l0 697.6 0 64L128 896c0 0 0 0 0 6.4 0 6.4 0 6.4 0 12.8 6.4 57.6 64 102.4 115.2 108.8 0 0 6.4 0 6.4 0 0 0 0 0 6.4 0l6.4 0 409.6 0 108.8 0c64 0 115.2-57.6 115.2-128L896 172.8C896 153.6 876.8 140.8 864 140.8zM262.4 64l409.6 0C684.8 64 704 83.2 704 128l0 576L256 704c-25.6 0-64 19.2-64 32L192 128C192 96 230.4 64 262.4 64z\"";
	hbelmt += "					p-id=\"1833\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M755.2 832 268.8 832c-12.8 0-25.6 12.8-25.6 32S256 896 268.8 896l480 0c12.8 0 25.6-12.8 25.6-32S768 832 755.2 832z\"";
	hbelmt += "					p-id=\"1834\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/contests\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				比赛";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1568084319708\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"2614\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M161.792 402.752a136.448 136.448 0 0 1-30.528-48.32c-11.52-30.08-14.72-58.24-14.72-98.432H166.4V192H116.48c-42.688 0-64 21.312-64 64 0 34.24 0 128 64 192 32 32 66.304 55.488 107.456 67.2l-13.248-74.24a220.352 220.352 0 0 1-48.96-38.208z m0 0a136.448 136.448 0 0 1-30.528-48.32c-11.52-30.08-14.72-58.24-14.72-98.432H166.4V192H116.48c-42.688 0-64 21.312-64 64 0 34.24 0 128 64 192 32 32 66.304 55.488 107.456 67.2l-13.248-74.24a220.352 220.352 0 0 1-48.96-38.208zM862.208 402.752c13.184-13.184 23.232-29.376 30.528-48.32 11.52-30.08 14.72-58.24 14.72-98.432H857.6V192h49.792c42.688 0 64 21.312 64 64 0 34.24 0 128-64 192-32 32-66.304 55.488-107.456 67.2l13.248-74.24c16.32-9.024 32.256-21.568 48.96-38.208z m0 0c13.184-13.184 23.232-29.376 30.528-48.32 11.52-30.08 14.72-58.24 14.72-98.432H857.6V192h49.792c42.688 0 64 21.312 64 64 0 34.24 0 128-64 192-32 32-66.304 55.488-107.456 67.2l13.248-74.24c16.32-9.024 32.256-21.568 48.96-38.208z\"";
	hbelmt += "					fill=\"#000000\" p-id=\"2615\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M480 768h64v192h-64z\" fill=\"#000000\" p-id=\"2616\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M224.448 438.144l0.32 3.648C235.776 627.008 363.264 768 512 768c148.736 0 276.224-140.992 287.552-329.856a65.28 65.28 0 0 0 0.448-7.616V128a64 64 0 0 0-64-64h-448a64 64 0 0 0-64 64v302.528c0 2.56 0.128 5.12 0.448 7.68z m-63.552 7.488a129.28 129.28 0 0 1-0.896-15.104V128a128 128 0 0 1 128-128h448a128 128 0 0 1 128 128v302.528c0 5.12-0.32 10.176-0.896 15.104C850.304 661.568 697.984 832 512 832c-185.984 0-338.24-170.432-351.104-386.368zM384 960h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z\"";
	hbelmt += "					fill=\"#000000\" p-id=\"2617\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/submissions\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				提交记录";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1567941384874\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"5155\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M416 832 128 832c-35.2 0-64-28.8-64-64L64 192c0-35.2 28.8-64 64-64l512 0c35.2 0 64 28.8 64 64l0 352C704 561.92 718.08 576 736 576 753.92 576 768 561.92 768 544L768 192c0-70.4-57.6-128-128-128L128 64C57.6 64 0 121.6 0 192l0 576c0 70.4 57.6 128 128 128l288 0C433.92 896 448 881.92 448 864 448 846.08 433.92 832 416 832zM544 256l-320 0C206.08 256 192 270.08 192 288 192 305.92 206.08 320 224 320l320 0C561.92 320 576 305.92 576 288 576 270.08 561.92 256 544 256zM576 480C576 462.08 561.92 448 544 448l-320 0C206.08 448 192 462.08 192 480 192 497.92 206.08 512 224 512l320 0C561.92 512 576 497.92 576 480zM224 640C206.08 640 192 654.08 192 672 192 689.92 206.08 704 224 704l128 0C369.92 704 384 689.92 384 672 384 654.08 369.92 640 352 640L224 640zM952.96 583.04c-12.16-12.16-32-12.16-44.16 0l-237.44 237.44-107.52-107.52c-12.16-12.16-31.36-12.16-42.88 0-12.16 12.16-12.16 31.36 0 42.88l122.88 122.88c1.28 3.2 3.2 5.76 5.76 8.32 12.16 12.16 32 12.16 44.16 0l259.84-259.84C965.12 615.04 965.12 595.2 952.96 583.04z\"";
	hbelmt += "					p-id=\"5156\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/chat\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				聊天";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1568084666413\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"4453\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M511.936 64c-246.72 0-446.72 172.16-446.72 384.576 0 121.408 65.472 229.504 167.552 299.904v194.624l195.712-116.864c27.072 4.352 54.976 6.976 83.52 6.976 246.784 0 446.784-172.224 446.784-384.64S758.72 64 511.936 64z m0 714.24a470.272 470.272 0 0 1-94.4-9.984l-131.392 77.632 1.728-127.36c-100.736-59.648-166.848-158.208-166.848-269.888 0-182.08 175.04-329.6 390.912-329.6 216 0 390.976 147.584 390.976 329.6 0 182.08-174.976 329.6-390.976 329.6z m182.4-434.176H329.6c-20.608 0-37.248 14.336-37.248 32s16.64 32 37.248 32h364.672c20.48 0 37.248-14.336 37.248-32 0.064-17.664-16.704-32-37.184-32zM557.632 499.008h-223.36a38.592 38.592 0 0 0-37.248 36.608c0 17.6 16.64 27.392 37.248 27.392h223.36c20.608 0 37.248-14.4 37.248-32 0-17.664-16.64-32-37.248-32z\"";
	hbelmt += "					p-id=\"4454\" fill=\"#000000\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/functions\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				功能";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1568084467675\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"3544\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M418.496 645.344L259.04 554.592a32 32 0 0 0-31.68 55.616l159.456 90.752a32 32 0 0 0 31.68-55.616z\"";
	hbelmt += "					p-id=\"3545\" fill=\"#000000\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M790.208 379.808a32 32 0 0 0-31.616-55.648L508.8 466.336 259.04 324.192a32 32 0 0 0-31.68 55.616l253.344 144.16V832a32 32 0 1 0 64 0V522.688c0-0.992-0.48-1.856-0.576-2.848l246.08-140.032z\"";
	hbelmt += "					p-id=\"3546\" fill=\"#000000\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M880.288 232.48L560.192 45.12a95.648 95.648 0 0 0-96.64 0L143.68 232.48A96.64 96.64 0 0 0 96 315.904v397.664c0 34.784 18.624 66.88 48.736 84l320 181.92a95.52 95.52 0 0 0 94.496 0l320-181.92a96.576 96.576 0 0 0 48.768-84V315.904a96.64 96.64 0 0 0-47.712-83.424zM864 713.568c0 11.584-6.208 22.304-16.256 28l-320 181.92a31.776 31.776 0 0 1-31.488 0l-320-181.92a32.192 32.192 0 0 1-16.256-28V315.904c0-11.456 6.048-22.048 15.904-27.808l319.872-187.36a31.84 31.84 0 0 1 32.192 0l320.128 187.392c9.856 5.728 15.904 16.32 15.904 27.776v397.664z\"";
	hbelmt += "					p-id=\"3547\" fill=\"#000000\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M778.656 453.952L629.312 542.08c-20.608 12.16-37.344 38.944-37.344 59.808v176.416c0 20.864 16.704 27.904 37.344 15.744l149.344-88.128C799.264 693.76 816 666.976 816 646.112V469.696c0-20.864-16.704-27.904-37.344-15.744z\"";
	hbelmt += "					p-id=\"3548\" fill=\"#000000\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "	<a href=\"\/about\">";
	hbelmt += "		<li>";
	hbelmt += "			<span id=\"dayer\">";
	hbelmt += "				关于OOJ";
	hbelmt += "			<\/span>";
	hbelmt += "			<span id=\"nighter\" style=\"width: 24px; height: 24px; vertical-align: middle; float: right;\">";
	hbelmt += "				<svg style=\"width: 24px; height: 24px; vertical-align: middle;\" t=\"1567941452002\"";
	hbelmt += "				class=\"icon\" viewBox=\"0 0 1229 1024\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"";
	hbelmt += "				p-id=\"6401\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">";
	hbelmt += "					<defs>";
	hbelmt += "					<\/defs>";
	hbelmt += "					<path d=\"M727.589934 511.003629C817.747574 467.990449 880.387282 375.630138 880.387282 268.529754 880.387282 120.548803 761.051633 0.146779 614.391444 0.146779 467.729542 0.146779 348.399028 120.548803 348.399028 268.529754 348.399028 375.628411 411.072963 467.990449 501.191238 511.003629 276.794902 566.893655 173.024624 788.364303 173.024624 996.414167 173.024624 1011.304474 184.987454 1023.290281 199.66802 1023.290281 214.427312 1023.290281 226.347356 1011.263027 226.347356 996.414167 226.347356 781.944013 347.746977 551.072594 614.357212 551.072594 880.962319 551.072594 1002.361938 781.944013 1002.361938 996.414167 1002.361938 1011.304474 1014.321347 1023.290281 1029.039565 1023.290281 1043.761203 1023.290281 1055.682959 1011.263027 1055.682959 996.414167 1055.756549 788.362578 952.027346 566.891924 727.589934 511.003629M401.720049 268.529754C401.720049 150.215447 497.090674 53.947359 614.389729 53.947359 731.687076 53.947359 827.06455 150.215447 827.06455 268.529754 827.06455 386.806071 731.688791 483.041349 614.389729 483.041349 497.088963 483.041349 401.720049 386.806071 401.720049 268.529754\"";
	hbelmt += "					p-id=\"6402\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M289.591193 493.675062C301.704628 492.512918 311.485397 483.195036 313.397054 471.048634 315.274483 458.902233 308.723164 446.950961 297.528762 442.117612 292.16517 439.796776 166.735153 384.020722 176.700755 252.983258 188.124488 103.764182 349.199973 85.703447 356.177435 84.966098 370.78441 83.538023 381.516729 70.424607 380.101384 55.646543 378.720267 40.833943 365.876056 30.044816 351.043173 31.395184 277.559906 38.476843 135.419579 93.009592 123.499534 248.847541 116.176366 345.771818 167.813348 415.42972 218.911234 456.277477 130.091927 487.484439-15.459262 576.176998 2.556862 820.35006 3.59056 834.46848 15.284697 845.297321 29.080459 845.297321 29.771873 845.297321 30.427347 845.297321 31.118761 845.219615 45.799327 844.098913 56.83799 831.1789 55.725566 816.3663 34.10519 522.802939 279.245656 494.680068 289.591193 493.675062\"";
	hbelmt += "					p-id=\"6403\">";
	hbelmt += "					<\/path>";
	hbelmt += "					<path d=\"M1105.170396 248.847541C1093.282872 93.051036 951.185326 38.513106 877.702062 31.396911 862.942771 30.079352 850.023255 40.873659 848.64214 55.61028 847.226793 70.383163 857.996764 83.538023 872.641393 84.966098 879.502474 85.62056 1040.542024 102.836883 1051.999985 252.943541 1062.010081 383.984459 936.544123 439.796776 931.291776 442.041632 920.061435 446.838718 913.504983 458.70883 915.339622 470.853504 917.14346 482.999906 926.955034 492.435211 939.070182 493.635346 949.499576 494.643804 1194.638331 522.759772 1173.019668 816.290319 1171.908956 831.10292 1182.94591 844.016026 1197.628186 845.138458 1198.317885 845.22134 1198.973363 845.22134 1199.661353 845.22134 1213.460536 845.22134 1225.154673 834.428764 1226.18837 820.274079 1244.240435 576.176998 1098.690959 487.484439 1009.833999 456.277477 1060.933596 415.35374 1112.60481 345.771818 1105.170396 248.847541Z\"";
	hbelmt += "					p-id=\"6404\">";
	hbelmt += "					<\/path>";
	hbelmt += "				<\/svg>";
	hbelmt += "			<\/span>";
	hbelmt += "		<\/li>";
	hbelmt += "	<\/a>";
	hbelmt += "<\/ul>";
	hbelmt += "<footer class=\"botm\" style=\"line-height: 0.7vw;\">";
	hbelmt += "	<span style=\"vertical-align: middle; height: 64px; line-height: 64px;\">";
	hbelmt += "		<img alt=\"【狗比OOJ..】\" src=\"\/static\/icon\/OOJqrCode.png\" style=\"vertical-align: middle; width: 48px; height: 48px; margin-right: 10px;\"";
	hbelmt += "		\/>";
	hbelmt += "		2019&nbsp;-&nbsp;2019，OsmiumOJ&nbsp;&copy;&nbsp;Developed&nbsp;by&nbsp;the&nbsp;";
	hbelmt += "		<a class=\"a2\" href=\"https:\/\/github.com\/ooj-dev\">";
	hbelmt += "		OOJ&nbsp;Team";
	hbelmt += "		<\/a>";
	hbelmt += "		.";
	hbelmt += "	<\/span>";
	hbelmt += "<\/footer>";
	$("body").append(hbelmt);
}