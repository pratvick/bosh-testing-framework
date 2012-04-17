var log4js = require("log4js");

log4js.configure({
    doNotReplaceConsole: true
});

var appender = log4js.consoleAppender(log4js.basicLayout);
log4js.clearAppenders();
log4js.addAppender(appender);
log4js.setGlobalLogLevel("INFO");

module.exports = log4js;

