// Code your solution in this file
const drivers = [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ];


function findMatching(drivers, name) {
	let list = drivers.filter((driver) => driver.toLowerCase() == name.toLowerCase());
	return list;
}


function fuzzyMatch(drivers, partial) {
	let searchLength = partial.length;
	console.log(searchLength);
	let list = drivers.filter((driver) => driver.slice(0, searchLength) == partial);
	console.log(list);
	return list;
}


function matchName(drivers, string) {
	console.log(drivers);
	console.log(string);
	let newDrivers = drivers.filter((driver) => driver.name == string);
	return newDrivers;
}
