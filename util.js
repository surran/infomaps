zoomedInFlag = false;

function zoomToGeometry(key){
	const element = document.getElementById(key)
	if (zoomedInFlag == key) {
		zoomOut()
		return;
	} 
	zoomedInFlag = key
	const boundingBox = element.getBBox();
	//console.log(boundingBox)
	if (key == "path3007")
		boundingBox.y = 970
	//console.log(element)
	const container = {width: 1476,
                       height: 1680}
	const scale = Math.min(container.width/boundingBox.width,
		              	   container.height/boundingBox.height)
	const multiplier = document.getElementById("container").clientWidth/1476
	const delta =  {x: -(boundingBox.x - container.width/2 + boundingBox.width/2)*multiplier,
					y: -(boundingBox.y - container.height/2 + boundingBox.height/2)*multiplier}
	document.getElementById("svg3642").style.transform =  `scale(${scale},${scale}) translate(${delta.x}px,${delta.y}px) `
}	 

function colorGeometry(key, option){
	if (option == "select"){
		document.getElementById(key).setAttribute("stroke-width", "10")
		document.getElementById(key).setAttribute("stroke", "black")

	}

	if (option == "deselect"){
		document.getElementById(key).setAttribute("stroke",  "none")
		document.getElementById(key).setAttribute("stroke-width", "0")
	}
}

function isState(id) {
	return states.indexOf(id) >= 0
}

function isUT(id) {
	return uts.indexOf(id) >= 0
}

function isCity(id) {
	return id in cities
}
function zoomOut() {
	zoomedInFlag = false;
	generateStatement();
	document.getElementById("svg3642").style.transform = "unset";
}

function divideByArea(key, value){
	returnValue = value/data.area.data[key]
	return returnValue.toFixed(2)
}

function getValue(id) {
	const jkids = [ "path3787", "path3799",  "path3803", "path3801", "path3781", "siachen_1_"]
	if (jkids.indexOf(id) >= 0) 
		id = "jammu_and_kashmir_1_"
	const {plot, plotType} = g
	let value = data[plot].data[id]
	if (value == false || 
		plotType == "statePlot" && states.indexOf(id) < 0 || 
		plotType == "cityPlot" && !(id in cities) || 
		value == undefined )
		return false
	if(data[plot].processFunction == "divideByArea")
		value = divideByArea(id,value)
	if(data[plot].processFunction == "divideByMilliArea")
		value = divideByArea(id,value*1000)
	return value
}

function getName(id){
	const {plot, plotType} = g
	if (plotType == "statePlot")
		return data["stateNames"] && data["stateNames"][id] && data["stateNames"][id].name
	if (plotType == "cityPlot")
		return capitalize(id)
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
