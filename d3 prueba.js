//código sacado de https://vizhub.com/curran/326730c80fc54969ae501fb58c8cb94b

(function (d3) {
  'use strict';

  const titleText = 'Cantidad de violencia intrafamiliar por mes en el 2016';
  const xAxisLabelText = 'Cantidad';

  const svg = d3.select('svg');

  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const render = data2 => {
    const xValue = d => d['value'];
    const yValue = d => d.name;
    const margin = { top: 50, right: 40, bottom: 77, left: 180 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data2, xValue)])
      .range([0, innerWidth]);
    
    const yScale = d3.scaleBand()
      .domain(data2.map(yValue))
      .range([0, innerHeight])
      .padding(0.1);
    
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const xAxisTickFormat = number =>
      d3.format('.3s')(number)
        .replace('G', 'B');
    
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(xAxisTickFormat)
      .tickSize(-innerHeight);
    
    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('.domain, .tick line')
        .remove();
    
    const xAxisG = g.append('g').call(xAxis)
      .attr('transform', `translate(0,${innerHeight})`);
    
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 65)
        .attr('x', innerWidth / 2)
        .attr('fill', 'purple')
        .text(xAxisLabelText);
    
    g.selectAll('rect').data(data2)
      .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());
    
    g.append('text')
        .attr('class', 'title')
        .attr('y', -10)
        .text(titleText);
  };

  d3.csv('data 2016.csv').then(data2 => {
    data2.forEach(d => {
      d.value = +d.value;
    });
    render(data2);
  });

}(d3));