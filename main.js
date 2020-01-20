let g = {
	plot: false,
	max: 0,
	min: 0,
	range: 0,
    maxStateId: "",
    plotName: "",
    plotType: ""
}

let selected = false;

function setPlot(key) {
	if (g.plot) 
		document.getElementById(g.plot).style.backgroundColor = "white"
	g.plot = key
	g.plotType = data[g.plot].type || "statePlot"
	const {unit, shortTitle} = data[g.plot]
	document.getElementById(g.plot).style.backgroundColor = "#eeeeee"
	zoomOut()
	setHeading(`${shortTitle} <span style="color:gray">in ${unit}</span>`)
	generateMinMax()
	generateMap();
	generateTable();
	toggleMobileMenu(false)
	generateStatement()
}

function select(key) {
	const {plotType} = g
	const previousSelection = selected;
	selected = key
	if (isState(key)) zoomToGeometry(key)
	if (plotType == "cityPlot") {		
		if (isCity(selected)) 
			colorGeometry(selected, "select")
		if (isCity(previousSelection))
			colorGeometry(previousSelection, "deselect")
	}
	if (!(!isCity(selected) && plotType == "cityPlot"))
	 generateStatement("this")
}

function generateStatement(option = "highest") {
	const {unit, shortTitle} = data[g.plot]
	const name = selected && getName(selected)
	const value = selected && getValue(selected)
	if (name === undefined)
		option = "highest"
	const maxName = getName(g.maxStateId)
	const maxValue = getValue(g.maxStateId)
	switch(option) {
		case "highest":
			setStatement(`${maxName} has the highest ${shortTitle} of <b>${maxValue}</b> ${unit}.`);
			return;
		case "this":
			setStatement(`${name} has ${shortTitle} of <b>${value}</b> ${unit}.`)
			return;
	}
}

function setStatement(statement) {
	document.getElementById("statement").innerHTML = statement
}

function setHeading(heading) {
	document.getElementById("heading").innerHTML = heading
}

function generatePlotsList() {
	str = ""
	Object.keys(plots).map(category=> {
		str += `<div style="padding: 15px 5px 5px 5px; color: black; font-family: arial; font-size: 20px;">${category}</div>`
		str += plots[category].map(thisPlot => `<li id = "${thisPlot}"
								  style="padding: 5px; cursor: pointer; color: blue; font-family: arial; font-size: 14px;"
							      onclick="setPlot('${thisPlot}')">${data[thisPlot].shortTitle}</li>`).join('')
		return;
	})
	document.getElementById("list").innerHTML = str;
}

function generateMinMax() {
	const {plot} = g
    g.min = Number.MAX_VALUE
    g.max = 0
	Object.keys(data[plot].data).map(key => {
		if(getValue(key) != false)
		{
			g.min = Math.min(getValue(key), g.min)
			g.max = Math.max(getValue(key), g.max)
			if (g.max == getValue(key)) 
			 g.maxStateId = key
		}
	})
	g.range = g.max - g.min
}

function generateMap() {
	const {plot, min, range, plotType} = g
	const isCityPlot = (plotType == "cityPlot")
	states.map(state => {
		let color = isCityPlot ? "#eeeeee" : "#fafafa"; 
		const value = getValue(state);
		const name = getName(state);
		if (value != false && !isCityPlot)
		{	
			const hue = data[plot].hueColor
			const normalmizedValue = (value - min)/range || 0
			color = `hsl(${hue}, 100%, ${97 - 47*(normalmizedValue)}%)`
			if (data[plot].hueRange)
				color = `hsl(${115*(normalmizedValue)}, 100%, 50%)`
		}

		document.getElementById(state).setAttribute("fill", color)
		document.getElementById(state).innerHTML = isCityPlot ? "" : `<title>${name} : ${value}</title>`
	    document.getElementById(state).setAttribute("onclick", `select("${state}")`)
	});
	uts.map(ut => {
		let color = "#fafafa"; 
		document.getElementById(ut).setAttribute("fill", color)});

	if(isCityPlot)
	{
		citiesHTML = ""
		Object.keys(cities).map(key => {
			const city = cities[key]
			const value = data[plot].data[key]
			if (value == false || value == undefined) return
			const normalizedValue = (value - min)/range || 0
			let radius, color;
			if (data[plot].subType == "radius")
			{
				radius = 3 + 20*Math.pow(normalizedValue, .5)
				color = `red`; 
			}
			else
			{
				radius = 10
				color = `hsl(${data[plot].hueColor}, 100%, ${97 - 47*(normalizedValue)}%)`; 
			}
			const x = 1476*(city.lon - 68)/(97.5 - 68)
			const y = 1640*(1 - (city.lat - 8.4)/(37 - 8.4))
			citiesHTML += `<circle onclick="select('${key}')" id="${key}" cx="${x}" cy="${y}" r="${radius}"  fill="${color}"><title>${capitalize(key)}: ${value}</title></circle>`	
		});
		document.getElementById("cities").innerHTML = citiesHTML 
	}
	else
	{
		document.getElementById("cities").innerHTML = ""
	}
}

function generateTable () {
	const {plot, plotType} = g
	const {title, unit, source, sourceLink} = data[plot]
	//document.getElementById("title-desktop").innerHTML = unit ? `${title} (${unit})` : title
	document.getElementById("title-mobile").innerHTML = unit ? `${title} (${unit})` : title
	document.getElementById("source-desktop").innerHTML = `<a href="${sourceLink}" target="_blank">${source}</a>`
	document.getElementById("source-mobile").innerHTML = `<a href="${sourceLink}" target="_blank">${source}</a>`
	let stateFlag = {}
	document.getElementById("table").innerHTML = ""
	if(plotType == "cityPlot")
	{
		Object.keys(cities).map(city => {
			let value = getValue(city)
			if (value == false)
				value = "N.A."
			return document.getElementById("table").innerHTML += `<tr><td>${capitalize(city)}</td><td>${value}</td></tr>`
		})
	} 
	else if(plotType == "statePlot")
	{
		states.map(state => {
			if (stateFlag[data["stateNames"][state].name])
				return 
			stateFlag[data["stateNames"][state].name] = true
			let value = getValue(state)
			if (value == false)
				value = "N.A."
			return document.getElementById("table").innerHTML += `<tr><td>${data["stateNames"][state].name}</td><td>${value}</td></tr>`
		})
	}
}

function initialize(svg) {
	document.getElementById("container").innerHTML = svg
  	document.getElementById("svg3642").style.transition = "all .5s"
}

function main(svg) {
	initialize(svg);
	generatePlotsList();
	setPlot(plots["Infrastructure"][0])
}

fetch("map.svg")
  .then(response => response.text())
  .then(svg => main(svg))