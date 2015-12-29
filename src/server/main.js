'use strict';

var baseDir = '..';

var debug = require('debug')('Example:Server');
var fs = require('fs');
var serialize = require('serialize-javascript');
var React = require('react');
var ReactDOM = require('react-dom/server');
var navigateAction = require('fluxible-router').navigateAction;
var createElement = require('fluxible-addons-react').createElementWithContext;

var HtmlComponent = React.createFactory(require(baseDir + '/components/Html.jsx'));
var initAction = require(baseDir + '/actions/init');
var conformErrorStatus = require(baseDir + '/utils').conformErrorStatus;
var config = require(baseDir + '/configs').create({
    baseDir: baseDir
});
var settings = config.settings;
var utils = require('./utils');