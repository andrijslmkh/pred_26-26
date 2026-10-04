const srcUefaIcon = `https://img.uefa.com/imgml/favicon/apple-touch-icon-57x57.png`;

const tableTeam = document.querySelector('.table__team');
const selectLeague = document.querySelector('.select__league');
const selectUser = (document.querySelector('.select__user').value = 'slmkh');

const dataSorted = newObjectCbSort(DATA, objSortPosition);
const usersPrediction = newObjectCbSort(USERS__PRED, objSortPosition);
const resultData = comparison(dataSorted, usersPrediction);
const RESULT_TOUR_DATA = RESULT_TOUR;

function createTableData(dataTable, league = 'lch') {
	let arrHTML = [];
	for (let i = 0; i < dataTable.data[league].length; i++) {
		const { id, name, position, played, points, icon, lost, won, drawn } =
			dataTable.data[league][i];

		if (i === 0) {
			arrHTML.push(`<div class="description_tier" >Straight to R16</div>`);
		}

		let out = `<div class="table__items">
                      <div class="item pred__icon pred__icon-block" >
                        <img
                          src="${srcUefaIcon}"
                          alt="UEFA icon"
                        />
                      </div>
                      <div class="item position"><span>${position}</span></div>
                      <div class="item team__icon" data-id=${id}>
                        <img
                          src="${icon}"
                          alt="${name}"
                        />
                      </div>
                      <div class="item team__name" data-id=${id}>${name}</div>
                      <div class="item team__games">${played}</div>
                      <div class="item team__win">${won}</div>
                      <div class="item team__draw">${drawn}</div>
                      <div class="item team__lose">${lost}</div>
                      <div class="item team__point">${points}</div>
                      <div class="item team__strick"></div>
                    </div>`;
		arrHTML.push(out);

		if (i === 7)
			arrHTML.push(
				`<div class="description_tier">Knockout phase play-off places (Seeded)</div>`
			);
		if (i === 15)
			arrHTML.push(
				`<div class="description_tier">Knockout phase play-off places (Unseeded)</div>`
			);
		if (i === 23)
			arrHTML.push(`<div class="description_tier">Elimination places</div>`);
	}
	tableTeam.innerHTML = arrHTML.join('');
	positionColor();
}
createTableData(dataSorted);

// ===========================

function addPredIcon(data, league = 'lch') {
	let predIconBlock = document.querySelectorAll('.pred__icon-block');
	let predIconImg = document.querySelectorAll('.pred__icon img');

	const arrData = [...data[league]];
	for (let i = 0; i < arrData.length; i++) {
		predIconBlock[i].setAttribute('data-id', `${arrData[i].id}`);
		predIconImg[i].attributes[0].value = `${arrData[i].icon}`;
		predIconImg[i].attributes[1].value = `${arrData[i].name}`;
	}
}

//

function clearPredIcon() {
	let predIconBlock = document.querySelectorAll('.pred__icon-block');
	let predIconImg = document.querySelectorAll('.pred__icon img');

	for (let i = 0; i < predIconImg.length; i++) {
		predIconImg[i].attributes[0].value = `${srcUefaIcon}`;
		predIconImg[i].attributes[1].value = `UEFA icon`;
	}

	for (let i = 0; i < predIconBlock.length; i++) {
		predIconBlock[i].removeAttribute('data-id');
	}
}

result(resultData);
resultTour(RESULT_TOUR_DATA);

//
document.querySelector('.btn-result').addEventListener('click', () => {
	document.querySelector('.table').style.display = 'flex';
	document.querySelector('.result__table').style.display = 'grid';
	document.querySelector('.table__block').style.display = 'none';
	document.querySelector('.regulations').style.display = 'none';
});

document.querySelector('.btn-regulations').addEventListener('click', () => {
	document.querySelector('.table').style.display = 'none';
	document.querySelector('.regulations').style.display = 'block';
});

document.querySelector('.btn-table').onclick = showTable;
function showTable() {
	document.querySelector('.table').style.display = 'flex';
	document.querySelector('.result__table').style.display = 'none';
	document.querySelector('.table__block').style.display = 'block';
	document.querySelector('.regulations').style.display = 'none';
}

selectLeague.addEventListener('change', () => {
	createTableData(dataSorted, selectLeague.value);
	user();
	showTable();
});

// selectUser.onchange = user;
function user() {
	clearColors();

	let user = selectUser;
	let league = selectLeague.value;

	for (const key in usersPrediction) {
		if (key === user) {
			addPredIcon(usersPrediction[key], league);
			colors(dataSorted, usersPrediction[key], league);
		}
	}
	if (user === 'clear') {
		clearPredIcon();
		clearColors();
	}
	showTable();
}
user();
