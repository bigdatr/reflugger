function _interceptActions(Reflux) {
    var _createActionsFn = Reflux.createActions;

    Reflux.createActions = function(actions) {
        var _createActions = _createActionsFn(actions);

        actions.forEach(function(a) {
            _createActions[a].listen(function(payload) {
                var p = payload && payload.toJS ? payload.toJS() : payload;
                console.log('reflugger', 'action:' + a, p);
            });
        });

        return _createActions;
    };
}

function _interceptStore(Reflux) {
    var _createStoreFn = Reflux.createStore;

    Reflux.createStore = function(store) {
        var _createStore = _createStoreFn(store);
        return _createStore;
    };
}

var reflugger = function(Reflux) {
    console.log('%c reflugger', 'color:white; background-color:#a074ab; font-size: 22px');
    _interceptActions(Reflux);
    _interceptStore(Reflux);
};

module.exports = reflugger;