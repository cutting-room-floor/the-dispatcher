var Dispatcher = require('flux').Dispatcher;

/**
 * This is a singleton: all modules that require this dispatcher will
 * receive the same instance.
 */
var AppDispatcher = new Dispatcher();

module.exports = AppDispatcher;
