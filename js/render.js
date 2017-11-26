function renderCount(count) {
    document.getElementById('value').innerHTML = count;
}

function renderCharts(chartId,countList){
    document.getElementById(chartId).innerHTML="";
    var chart = d3.select("#"+chartId).selectAll("div")
        .data(countList)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
            var barHeight = d * 5;
            return barHeight + "px";
        });
    chart.exit().remove();
}
