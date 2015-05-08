var Dispatcher = require('flux').Dispatcher,
  xtend = require('xtend/mutable');

/**
 * This is a singleton: all modules that require this dispatcher will
 * receive the same instance.
 */
var AppDispatcher = xtend(new Dispatcher(), {
  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param {object} action The data coming from the view.
   */
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  /**
   * @param {object} action The data coming from the view.
   */
  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
