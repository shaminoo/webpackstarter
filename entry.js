//require('./includefiles/includeme');
require.context('./includefiles', true, /\.js$/).keys().forEach(require.context('./includefiles', true));