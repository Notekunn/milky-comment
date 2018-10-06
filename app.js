const login = require('facebook-comment-api');
const feature = require('./src')
login({ access_token: 'EAACW5Fg5N2IBALWZBOpP0goyXQUuuVZB8y9oJcmeUb27UmfHkhTVu9sok4gRlHS2qJseK60FZA2RmvSvPr84QcYRvdmKimYrZAZB0ysfgdBlDkL3ZBm9E8MYoOWJKohHRl3xd7o0MIi1pfAdkZAAd7LgvavkAhWEG1WqAXErFObQ3vMFZBRAJMtpT94v9FHTMwQZD' },function(error, api){
    if(error) return console.log(error);    
    api.listen(async function(err, event){
        if(event.body){
            api.sendComment(await feature.simsimi(event.body), event.idReplyTo)
        }
    });
})