// Código sacado de: https://observablehq.com/@mbostock/bar-chart-race-with-scrubber@3091
import define1 from "./scrubber.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["data_violaciones.csv",new URL("./files/data_violaciones",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Cantidad de violencia intrafamiliar a la mujer por mes.

Desde el 2016 hasta el primer semestre del 2020.`
)});
  main.variable(observer("viewof keyframe")).define("viewof keyframe", ["Scrubber","keyframes","formatDate","duration"], function(Scrubber,keyframes,formatDate,duration){return(
Scrubber(keyframes, {
  format: ([date]) => formatDate(date),
  delay: duration,
  loop: false
})
)});
  main.variable().define("keyframe", ["Generators", "viewof keyframe"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","width","height","bars","axis","labels","ticker","invalidation","duration","x"], function(d3,width,height,bars,axis,labels,ticker,invalidation,duration,x)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("background", "#E9DFEC");

  const updateBars = bars(svg);
  const updateAxis = axis(svg);
  const updateLabels = labels(svg);
  const updateTicker = ticker(svg);

  invalidation.then(() => svg.interrupt());

  return Object.assign(svg.node(), {
    update(keyframe) {
      const transition = svg.transition()
          .duration(duration)
          .ease(d3.easeLinear);

      // Extract the top bar’s value.
      x.domain([0, keyframe[1][0].value]);

      updateAxis(keyframe, transition);
      updateBars(keyframe, transition);
      updateLabels(keyframe, transition);
      updateTicker(keyframe, transition);
    }
  });
}
);
  main.variable(observer("update")).define("update", ["chart","keyframe"], function(chart,keyframe){return(
chart.update(keyframe)
)});
  main.variable().define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("data_violaciones.csv").csv({typed: true})
)});
  main.variable().define("duration", function(){return(
250
)});
  main.variable().define("n", function(){return(
12
)});
  main.variable().define("names", ["data"], function(data){return(
new Set(data.map(d => d.name))
)});
  main.variable().define("datevalues", ["d3","data"], function(d3,data){return(
Array.from(d3.rollup(data, ([d]) => d.value, d => +d.date, d => d.name))
  .map(([date, data]) => [new Date(date), data])
  .sort(([a], [b]) => d3.ascending(a, b))
)});
  main.variable().define("rank", ["names","d3","n"], function(names,d3,n){return(
function rank(value) {
  const data = Array.from(names, name => ({name, value: value(name)}));
  data.sort((a, b) => d3.descending(a.value, b.value));
  for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
  return data;
}
)});
  main.variable().define("k", function(){return(
10
)});
  main.variable().define("keyframes", ["d3","datevalues","k","rank"], function(d3,datevalues,k,rank)
{
  const keyframes = [];
  let ka, a, kb, b;
  for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
    for (let i = 0; i < k; ++i) {
      const t = i / k;
      keyframes.push([
        new Date(ka * (1 - t) + kb * t),
        rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
      ]);
    }
  }
  keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
  return keyframes;
}
);
  main.variable().define("bars", ["n","color","y","x"], function(n,color,y,x){return(
function bars(svg) {
  let bar = svg.append("g")
      .attr("fill-opacity", 0.6)
    .selectAll("rect");

  return ([date, data], transition) => bar = bar
    .data(data.slice(0, n), d => d.name)
    .join(
      enter => enter.append("rect")
        .attr("fill", color)
        .attr("height", y.bandwidth())
        .attr("x", x(0))
        .attr("y", y(n))
        .attr("width", d => x(d.value) - x(0)),
      update => update,
      exit => exit.transition(transition).remove()
        .attr("y", y(n))
        .attr("width", d => x(d.value) - x(0))
    )
    .call(bar => bar.transition(transition)
      .attr("y", d => y(d.rank))
      .attr("width", d => x(d.value) - x(0)));
}
)});
  main.variable().define("labels", ["n","x","y","textTween","parseNumber"], function(n,x,y,textTween,parseNumber){return(
function labels(svg) {
  let label = svg.append("g")
      .style("font", "bold 12px var(--sans-serif)")
      .style("font-variant-numeric", "tabular-nums")
      .attr("text-anchor", "end")
    .selectAll("text");

  return ([date, data], transition) => label = label
    .data(data.slice(0, n), d => d.name)
    .join(
      enter => enter.append("text")
        .attr("transform", d => `translate(${x(d.value)},${y(n)})`)
        .attr("y", y.bandwidth() / 2)
        .attr("x", -6)
        .attr("dy", "-0.25em")
        .text(d => d.name)
        .call(text => text.append("tspan")
          .attr("fill-opacity", 0.7)
          .attr("font-weight", "normal")
          .attr("x", -6)
          .attr("dy", "1.15em")),
      update => update,
      exit => exit.transition(transition).remove()
        .attr("transform", d => `translate(${x(d.value)},${y(n)})`)
    )
    .call(bar => bar.transition(transition)
      .attr("transform", d => `translate(${x(d.value)},${y(d.rank)})`)
      .call(g => g.select("tspan").tween("text", function(d) {
          return textTween(parseNumber(this.textContent), d.value);
        })));
}
)});
  main.variable().define("textTween", ["d3","formatNumber"], function(d3,formatNumber){return(
function textTween(a, b) {
  const i = d3.interpolateNumber(a, b);
  return function(t) {
    this.textContent = formatNumber(i(t));
  };
}
)});
  main.variable().define("parseNumber", function(){return(
string => +string.replace(/,/g, "")
)});
  main.variable().define("formatNumber", ["d3"], function(d3){return(
d3.format(",d")
)});
  main.variable().define("axis", ["margin","d3","x","width","barSize","n","y"], function(margin,d3,x,width,barSize,n,y){return(
function axis(svg) {
  const g = svg.append("g")
      .attr("transform", `translate(0,${margin.top})`);

  const axis = d3.axisTop(x)
      .ticks(width / 160)
      .tickSizeOuter(0)
      .tickSizeInner(-barSize * (n + y.padding()));

  return (_, transition) => {
    g.transition(transition).call(axis);
    g.select(".tick:first-of-type text").remove();
    g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
    g.select(".domain").remove();
  };
}
)});
  main.variable().define("ticker", ["barSize","width","margin","n","formatDate","keyframes"], function(barSize,width,margin,n,formatDate,keyframes){return(
function ticker(svg) {
  const now = svg.append("text")
      .style("font", `bold ${barSize*5}px var(--sans-serif)`)
      .style("font-variant-numeric", "tabular-nums")
      .attr("text-anchor", "end")
      .attr("x", width - 6)
      .attr("y", margin.top + barSize * (n - 0.45))
      .attr("dy", "0.32em")
      .text(formatDate(keyframes[0][0]));

  return ([date], transition) => {
    transition.end().then(() => now.text(formatDate(date)));
  };
}
)});
  main.variable().define("formatDate", ["d3"], function(d3){return(
d3.utcFormat("%Y")
)});
  main.variable().define("color", ["d3","data"], function(d3,data)
{
  const scale = d3.scaleOrdinal(d3.schemeTableau10);
  if (data.some(d => d.category !== undefined)) {
    const categoryByName = new Map(data.map(d => [d.name, d.category]))
    scale.domain(categoryByName.values());
    return d => scale(categoryByName.get(d.name));
  }
  return d => scale(d.name);
}
);
  main.variable().define("x", ["d3","margin","width"], function(d3,margin,width){return(
d3.scaleLinear([0, 1], [margin.left, width - margin.right])
)});
  main.variable().define("y", ["d3","n","margin","barSize"], function(d3,n,margin,barSize){return(
d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1)
)});
  main.variable().define("height", ["margin","barSize","n"], function(margin,barSize,n){return(
margin.top + barSize * n + margin.bottom
)});
  main.variable().define("barSize", function(){return(
48
)});
  main.variable().define("margin", function(){return(
{top: 16, right: 6, bottom: 6, left: 0}
)});
  main.variable().define("d3", ["require"], function(require){return(
require("d3@6")
)});
  const child1 = runtime.module(define1);
  main.import("Scrubber", child1);
  return main;
}
