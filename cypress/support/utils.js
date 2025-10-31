function createUniqueName(prefixo = 'userTest') {
	const timestamp = Date.now();
	const random = Math.floor(Math.random() * 100);
	return `${prefixo}_${timestamp}${random}`;
}

module.exports = {
	createUniqueName
};