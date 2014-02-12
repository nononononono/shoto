window.onload = function() {
    document.getElementById('mainButton').addEventListener('click', onMainButtonClick);
}

function onMainButtonClick() {
    document.getElementById('backDiv2').classList.add("invisibleDiv");
    document.getElementById('mainDiv').classList.add("invisibleDiv");
    document.getElementById('adviceText').innerHTML = getMessage();
}

function getMessage() {
	var message = 'Бедная моя зайка';

	var rand = Math.random();
	if (rand <= 0.2) {
		message = 'Бедная моя зайка';
	} else if (rand <= 0.4) {
		message = 'Ты мой бедный зайчик';
	} else if (rand <= 0.6) {
		message = 'О плохом скорей забудь, oптимистом лучше будь!';
	} else if (rand <= 0.8) {
		message = 'Отдохни, угомонись, плюнь на все и не грузись';
	} else {
		message = 'Выше нос, ниже хвост!';
	}

	return message;
}