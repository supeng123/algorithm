var encode = function(longUrl) {
    return 'http://tinyurl.com/' + new Buffer(longUrl).toString('base64')
};

var decode = function(shortUrl) {
    return new Buffer((shortUrl.split('http://tinyurl.com/')[1]), 'base64').toString()
};