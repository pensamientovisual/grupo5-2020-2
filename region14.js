// https://observablehq.com/@martijnreeuwijk/chart-that-shows-the-amount-of-pages-used-in-the-triller-gern@329
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`
`
)});
  main.variable(observer("chart")).define("chart", ["d3","DOM","width","height","data","x","y","format","xAxis","yAxis"], function(d3,DOM,width,height,data,x,y,format,xAxis,yAxis)
{
  const svg = d3.select(DOM.svg(width, height));
  
  svg.append("g")
  
    .selectAll("rect")
    .data(data)
    .enter().append("rect")
      .attr("x", x(0))
      .attr("y", d => y(d.name))
      .attr("width", d => x(d.value) - x(0))
      .attr("height", y.bandwidth())
      .attr("fill", d => d.color )
      .on("mouseover", function(d) {
      d3.select(this).attr("rect", 10).transition().style("fill", "#cfcfcf")
      })
      .on("mouseout", function(d) {
      d3.select(this).attr("rect", 10).transition().style("fill", d => (d.color) )
      });
  
  svg.append("g")
      .attr("fill", "white")
      .attr("text-anchor", "end")
      .style("font", "20px verdana")
    .selectAll("text")
    .data(data)
    .enter().append("text")
      .attr("x", d => x(d.value) - 4)
      .attr("y", d => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(d => format(d.value));
  
  svg.append("g")
      .call(xAxis);
  
  svg.append("g")
      .call(yAxis);
  
  return svg.node();
}
);
  main.variable().define("calcAvgs", ["d3"], function(d3){return(
function calcAvgs(data) {
     return [
       {
          name: "median",
          pos: {
            x: d3.median(data, d => d.x),
            y: d3.median(data, d => d.y)
          }
       }
     ]
}
)});
  main.variable().define("data", function(){return(
[ { name: '2016',
    value: 2505 ,
    color: "#4c1130"},
  { name: '2017',
    value: 2293 ,
    color: "#ca689b"},
  { name: '2018',
    value: 2248 ,
    color: "#dd95ba"}, 
  { name: '2019',
    value: 2386 ,
    color: "#9b3269"} ]

  .slice()
  .sort((a, b) => b.value - a.value)
  .map(({name, value, color}) => ({name: name, value: value, color: color}))
)});
  main.variable().define("format", ["d3"], function(d3){return(
d3.format(".0f")
)});
  main.variable().define("x", ["d3","data","margin","width"], function(d3,data,margin,width){return(
d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([margin.left, width - margin.right])
)});
  main.variable().define("y", ["d3","data","margin","height"], function(d3,data,margin,height){return(
d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.1)
)});
  main.variable().define("xAxis", ["margin","d3","x","width"], function(margin,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${margin.top})`)
    .call(d3.axisTop(x).ticks(width / 80))
    .call(g => g.select(".domain").remove())
    .style("color","white")
    .style("font", "10px verdana")
)});
  main.variable().define("yAxis", ["margin","d3","y"], function(margin,d3,y){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0))
    .style("color","white")
    .style("font", "20px verdana")
)});
  main.variable().define("height", ["data","margin"], function(data,margin){return(
data.length * 40 + margin.top + margin.bottom
)});
  main.variable().define("margin", function(){return(
{top: 30, right: 400, bottom: 10, left: 400}
)});
  main.variable().define("d3", ["require"], function(require){return(
require("d3@6")
)});
  return main;
}

