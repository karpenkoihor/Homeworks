var memory = prompt('введите требуемую память телефона');
if (memory === '32') {
	var color = prompt('введите требуемый цвет телефона');
	if (color === 'black') {
		var price = '300'
		alert('цена телефона - ' + price + '$')
		var img = 'img/black.jpg'
		document.write('<img src="img/black.jpg"/>')
	}
	else if (color === 'silver') {
		var price = '300'
		alert('цена телефона - ' + price + '$')
		var img = 'img/silver.jpg'
		document.write('<img src="img/silver.jpg"/>')
	}
	else if (color === 'gold') {
		var price = '300'
		alert('цена телефона - ' + price + '$')
		var img = 'img/gold.jpg'
		document.write('<img src="img/gold.jpg"/>')
	}
	else {
		alert('нет такого цвета')
	}
}



else if (memory === '64') {
	var color = prompt('введите требуемый цвет телефона');
	if (color === 'black') {
		var price = '400'
		alert('цена телефона - ' + price + '$')
		var img = 'img/black.jpg'
		document.write('<img src="img/black.jpg"/>')
	}
	else if (color === 'silver') {
		var price = '400'
		alert('цена телефона - ' + price + '$')
		var img = 'img/silver.jpg'
		document.write('<img src="img/silver.jpg"/>')
	}
	else if (color === 'gold') {
		var price = '400'
		alert('цена телефона - ' + price + '$')
		var img = 'img/gold.jpg'
		document.write('<img src="img/gold.jpg"/>')
	}
	else {
		alert('нет такого цвета')
	}

}



else if (memory === '128') {
	var color = prompt('введите требуемый цвет телефона');
	if (color === 'black') {
		var price = '500'
		alert('цена телефона - ' + price + '$')
		var img = 'img/black.jpg'
		document.write('<img src="img/black.jpg"/>')
	}
	else if (color === 'silver') {
		var price = '500'
		alert('цена телефона - ' + price + '$')
		var img = 'img/silver.jpg'
		document.write('<img src="img/silver.jpg"/>')
	}
	else if (color === 'gold') {
		var price = '500'
		alert('цена телефона - ' + price + '$')
		var img = 'img/gold.jpg'
		document.write('<img src="img/gold.jpg"/>')
	}
	else {
		alert('нет такого цвета')

	}
}

else {
	alert('нет такой памяти')
}