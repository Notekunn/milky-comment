"use strict";
const request = require('request-promise').defaults({
    resolveWithFullReponse: false,
    json: true
});

module.exports = (input) => request({
    url: 'http://api.simsimi.com/request.p',
    qs: {
        key: '3bce68aa-c962-4140-b1b3-c9e599712ab5',
        text: input,
        lc: 'vn',
        ft: '0.0'
    }
}).then(resultRequest => (resultRequest && resultRequest.response) || 'hi')
.catch(e => Promise.resolve('Server đang quá tải!\n'+e))