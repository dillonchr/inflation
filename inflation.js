const domget = require('@dillonchr/domget');
const INFLATION_API_URL_PREFIX = 'https://data.bls.gov/cgi-bin/cpicalc.pl?';
const CURRENT_YEAR = new Date().getFullYear();

module.exports = (year, amount, callback) => {
    if (year >= 1913 && year < CURRENT_YEAR) {
        const url = `${INFLATION_API_URL_PREFIX}cost1=${(+amount).toFixed(2)}&year1=${year}01&year2=${CURRENT_YEAR}01`;
        domget(url, (err, dom) => {
            if (err) {
                callback(err);
            } else {
                callback(null, dom.querySelector('#answer').text);
            }
        });
    } else if (year === CURRENT_YEAR) {
        callback(null, amount);
    } else {
        callback(new Error('that which you want is unkown'));
    }
};
