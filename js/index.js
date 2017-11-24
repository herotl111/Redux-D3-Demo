var logger = reduxLogger.createLogger({
    level : 'info' // console's level
});

var initialState = {
    count:0,
    countList:[9,2,5,1,8]
}

store = Redux.createStore(counter,initialState,Redux.applyMiddleware(logger));


function renderCount() {
    document.getElementById('value').innerHTML = store.getState().count.toString();
}
renderCount();

store.subscribe(renderCount);

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
        if (store.getState() % 2 !== 0) {
            store.dispatch(increment());
        }
    });
document.getElementById('incrementAsync')
    .addEventListener('click', function () {
        setTimeout(function () {
            store.dispatch(increment())
        }, 1000);
    });

function renderCharts(dataset){
    d3.select("#charts").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
            var barHeight = d * 5;
            return barHeight + "px";
        });
}