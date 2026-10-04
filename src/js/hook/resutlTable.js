function resultTour(data) {
	const numberOfRounds = 8;
	const arr = Object.entries(data).map(([key, value]) => ({ key, value }));
	console.log(arr);

	let arrHTML = [];

	arr.forEach((item, index) => {
		console.log(item);
		console.log(index);
		const nameUser = item.key.charAt(0).toUpperCase() + item.key.slice(1);
		let tbody = `	<tr class="border-t text-center border-[#73727294]">
												<td
													class="px-3 py-2 border-r border-[#73727294] last:border-0"
												>
													${index + 1}
												</td>
												<th
													scope="row"
													class="px-3 py-2 font-medium whitespace-wrap text-white text-left border-r border-[#73727294] first:border-0"
												>
												${nameUser}
												</th>
												${Array.from({ length: numberOfRounds }, (_, idx) => {
													const val = item.value[idx] ?? '*';
													return `<td class='px-3 py-2 border-r border-[#73727294] first:border-0'>
																		${val}
																	</td>`;
												}).join('')}
												
											</tr>`;
		arrHTML.push(tbody);
	});

	document.querySelector('.result__tour tbody').innerHTML = arrHTML.join('');
}
