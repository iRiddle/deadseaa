const WPAPI = require('wpapi');
const WordPressApi = new WPAPI({ endpoint: 'http://kosmetika.sandev.online/wp-json' });

export default WordPressApi