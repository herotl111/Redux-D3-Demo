var logger = reduxLogger.createLogger({
    level : 'info' // console's level
});

var initialState = {
    count:1,
    countList:[9,2,5,1,8]
}

store = Redux.createStore(counter,initialState,Redux.applyMiddleware(ReduxThunk.default,logger));

//register renderer with global store
store.subscribe(function(){
    renderCharts("countBar",[store.getState().count]);
});
store.subscribe(function(){
    renderCharts("barList",store.getState().countList);
});
store.subscribe(function(){
    renderCount(store.getState().count.toString());
});

store.dispatch(initializeState());

//Add event listeners
document.getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch(increment());
    });
document.getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch(decrement());
    });
document.getElementById('incrementIfOdd')
    .addEventListener('click', function () {
        if (store.getState().count % 2 !== 0) {
            store.dispatch(increment());
        }
    });
document.getElementById('add')
    .addEventListener('click', function () {
        store.dispatch(addCount());
    });

document.getElementById('addAsync')
    .addEventListener('click', function () {
        store.dispatch(asyncAddCount());
    });