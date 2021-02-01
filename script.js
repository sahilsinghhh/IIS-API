console.log(`international space station status`);

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.wheretheiss.at/v1/satellites/25544', true)
xhr.getResponseHeader('Content-type', 'application/json');



xhr.onprogress = function () {
	console.log("on progress");
}

xhr.onload = function () {
	if (this.status === 200) {
		// console.log(this.responseText);

		let json = JSON.parse(this.responseText);
		console.log(json);

		let station =document.getElementById('station')
		let str = "";
		for (let key in json) {

			 str += `<b>${key}</b> - ${json[key] + "<br>"}`
		}

		station.innerHTML  = str;


	}
	else {
		console.log(`some error occured`);
	}
}

xhr.send();



