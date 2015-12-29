var qs = require('querystring');

function RSD(){
    return process.env.RSD || 'https://github.com/adorris1/rehab-stretching-data/blob/master/resources.json';
}

function RSD_MEDIATYPE () {
    return process.env.FRED_MEDIATYPE || 'application/vnd.github.v3+json';
}
function RSD_CONTENTENCODING () {
    return process.env.FRED_CONTENTENCODING || 'base64';
}

function RSD_BRANCH (env) {
    return process.env.FRED_BRANCH || branches[env];
}
function addBranch (url, env) {
    return url +'?' + qs.stringify({ ref: FRED_BRANCH(env) });
}
function makeConfig(nconf){
    var env = nconf.get('NODE_ENV');

    return {
        RSD: {
            url: function(){
                return addBranch(RSD_URL(),env);
            },
            /**
             * @see FRED_MEDIATYPE
             */
            mediaType: function () {
                return RSD_MEDIATYPE();
            },
            /**
             * @see FRED_CONTENTENCODING
             */
            contentEncoding: function () {
                return RSD_CONTENTENCODING();
            },
            /**
             * @see addBranch
             */
            branchify: function (url) {
                return addBranch(url, env);
            }
        },

        defaults: {
            pageName: 'stretches'
        }
    };

}
module.exports = makeConfig;