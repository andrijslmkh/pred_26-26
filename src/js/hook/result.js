function result(data) {
	const sortedTotal = arrSortTotal(data);
	let arrHTML = [];

	sortedTotal.forEach((item, index) => {
		const { user, lch, le, lc, total } = item;
		const nameUser = user.charAt(0).toUpperCase() + user.slice(1);

		let out = `<div class="item user__position">${index + 1}</div>
                <div class="item user">${nameUser}</div>
                <div class="item user__lch">${lch}</div>
                <div class="item user__le">${le}</div>
                <div class="item user__lc">${lc}</div>
                <div class="item user__total">${total}</div>
              `;
		arrHTML.push(out);
	});

	document.querySelector('.result__info').innerHTML = arrHTML.join('');
}
