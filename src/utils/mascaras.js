import moment from 'moment';

export const removeCpfMask = (maskedCpf) => {
	if (!maskedCpf) {
		return '';
	}
	const simpleCpf = maskedCpf
		.replaceAll('.', '')
		.replaceAll('-', '')
		.replaceAll('_', '')
		.replace(' ', '');

	return simpleCpf;
};

export const addCpfMask = (simpleCpf) => {
	if (simpleCpf.length < 11 || simpleCpf.includes('.')) {
		console.log('Encontrei');
		return 'cpf inválido';
	}
	const maskedCpf =
		simpleCpf.slice(0, 3) +
		'.' +
		simpleCpf.slice(4, 7) +
		'.' +
		simpleCpf.slice(8, 11) +
		'-' +
		simpleCpf.slice(-2);

	return maskedCpf;
};

export const removeCepInputFormat = (formattedCep) => {
	//FormattedCep = 433__-__
	return formattedCep.replaceAll('_', '').replace('-', '');
};

export const removeCepMask = (maskedCep) => {
	const simpleCep = maskedCep.slice(0, 5) + maskedCep.slice(6);
	return simpleCep;
};

export const addCepMask = () => {};

export const convertDateToUsaFormat = (date) => {
	const usaDate =
		date.slice(-4) + '-' + date.slice(3, 5) + '-' + date.slice(0, 2);

	return usaDate;
};

export const convertDateUsaToBr = (date) => {
	return date.split('-').reverse().join('-');
};

export const displayDatePortuguese = (date) => {
	const monthInPortuguese = [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	];

	const data = new Date(date);
	const monthNumber = data.getMonth();
	const displayDate = moment(data).format('LL');
	let dateArray = displayDate.split(' ');
	dateArray[0] = dateArray[1].replace(',', '');
	dateArray[1] = monthInPortuguese[monthNumber] + ',';

	return dateArray.join(' ');
};

export const removePeopleInputMasks = (person) => {
	person.cpf =
		person.cpf.length !== 11 ? removeCpfMask(person.cpf) : person.cpf;
	person.dataNascimento = convertDateToUsaFormat(person.dataNascimento);
	return person;
};
