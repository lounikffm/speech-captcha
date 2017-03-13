const recognitionRepeat = document.querySelector('.recognitionRepeat')
const captcha = document.querySelector('.captchaText')
const recog = document.querySelector('.userInput')
const submit = document.querySelector('.submit')






function recogCheck(){

	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

	const recognition = new SpeechRecognition();

	recognition.start();

	recognition.interimResults = true;

	let things = ['test', 'random', 'elephant'];
	let thing = things[Math.floor(Math.random()*things.length)];

	captcha.dataset.text = thing
	captcha.textContent = thing

	console.log(thing)

	recognition.addEventListener('result', e => {
		const transcript = Array.from(e.results)
			.map(result => result[0])
			.map(result => result.transcript)
			.join('');

			console.log(transcript)
			recog.value = transcript;
			recog.dataset.input = transcript;

			if (e.results[0].isFinal) {
				if (transcript === captcha.dataset.text) {
					console.log('true')
					submit.removeAttribute('disabled')
				}else{
					console.log('false')
					return false;
				}
			}
	});
}



recognitionRepeat.addEventListener('click', recogCheck);

