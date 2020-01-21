plots = {"Cities":["populationOfCities","siesmicZones", "rainfallCities", "moterVehiclesOwnership", "wealthOfCities", "gdpOfCities", "growthOfWealth", "billionares"],
		 "Infrastructure":[ "railwayDensity", "roadsDensity", "nationlHighayDensity", "installedPowerDensity", "powerTransmissionLosses" ], 
         "Agriculture": ["netSownAreaPercent", "netIrrigatedAreaPercent", "croppingIntensityPercent", "riceDensity", "fruitDensity"],
         "People": ["populationDensity2011", "decadalPopulationGrowth"],
         "Indices":["sexRatio2013", "lifeExpectancy2010to14"],
     	 }

const states = [   "Andhra_Pradesh_2_", "arunachal_pradesh_1_", "assam_1_", "bihar_1_", "chhattisgarh_1_", "gujarat_1_", "Goa_1_", "haryana_1_", "himachal_pradesh_1_", "jammu_and_kashmir_1_", "jharkhand_1_", "Karnataka_1_", "Kerala_1_", "madhya_pradesh_1_", "maharashtra_1_", "manipur_1_", "meghalaya_1_", "mizoram_1_", "nagaland_1_", "orissa_1_", "path3007", "path3781", "path3787", "path3799", "path3801", "path3803", "punjab_1_", "rajasthan_1_", "siachen_1_", "sikkim_1_", "Tamil_Nadu_1_", "tripura_1_", "uttar_pradesh_1_", "uttaranchal_1_", "west_bengal_1_"]
const uts = ["andaman_and_nicobar_1_","dadra_and_nagar_haveli_1_", "chandigarh_1_", "delhi_ncr_1_","yanam_pondicherry_1_", "pudducherry_pondicherry_1_", "karikal_pondicherry_1_", "mahe_pondicherry_1_"]
const cities = {
	"mumbai": 	{"lat":19.0728302,"lon": 72.8826065},
	"delhi": 	{"lat":28.6519508, "lon":77.2314911},
	"bengaluru" 	:{"lat":12.97194, "lon": 77.593689},
	"kolkata": 	{"lat": 	22.5626297, "lon": 88.3630371},
	"chennai": 	{"lat": 	13.0878401, "lon": 80.2784729},
	"ahmedabad": 	{"lat": 	23.0257893, "lon": 72.5872726},
	"hyderabad": 	{"lat": 	17.3840504, "lon": 78.4563599},
	"pune": 	{"lat": 	18.5195694, "lon": 73.8553467},
	"surat": 	{"lat": 	21.19594,  "lon":72.8302307},
	"kanpur": 	{"lat": 	26.4652309, "lon": 80.3497467},
	"jaipur": 	{"lat": 	26.9196205,  "lon":75.7878113},
	"lucknow": 	{"lat": 	26.8392792, "lon": 80.9231262},
	"nagpur": 	{"lat": 	21.1463108,  "lon":79.0849075},
	"indore": 	{"lat": 	22.7179203,  "lon":75.8332977},
	"patna": 	{"lat": 	25.59408, "lon": 85.1356277},
	"bhopal": 	{"lat": 	23.2546902, "lon": 77.4028931},
	"ludhiana": 	{"lat": 	30.9120407, "lon": 75.8537903},
	"tirunelveli": 	{"lat": 	8.7274199, "lon": 77.6837997},
	"agra": 	{"lat": 	27.1833305, "lon": 78.0166702},
	"vadodara": 	{"lat": 	22.2994099, "lon": 73.2081223},
	"vishakhapatnam": {"lat": 17.6868, "lon": 83.2185},
	"coimbatore": {"lat": 11.004556, "lon": 76.961632},
	"kochi": {"lat": 9.9312, "lon": 76.2673},
	"gurgaon": {"lat":28.4595, "lon": 77.0266}
}

data = {
stateNames: {"sikkim_1_": {name:"Sikkim", value: "1"},
			 "bihar_1_": {name:"Bihar", value: "1"},
			 "jharkhand_1_": {name:"Jharkhand", value: "1"},
			 "rajasthan_1_": {name:"Rajasthan", value: "1"},
			 "west_bengal_1_": {name:"West Bengal", value: "1"},
			 "madhya_pradesh_1_": {name:"Madhya Pradesh", value: "1"},
			 "chhattisgarh_1_": {name:"Chhattisgarh", value: "1"},
			 "orissa_1_": {name:"Orissa", value: "1"},
			 "gujarat_1_": {name:"Gujarat", value: "1"},
			 "maharashtra_1_": {name:"Maharashtra", value: "1"},
			 "Goa_1_": {name:"Goa", value: "1"},
			 "Andhra_Pradesh_2_": {name:"Andhra Pradesh", value: "1"},
			 "Karnataka_1_": {name:"Karnataka", value: "1"},
			 "Kerala_1_": {name:"Kerala", value: "1"},
			 "Tamil_Nadu_1_": {name:"Tamil Nadu", value: "1"},
			 "uttar_pradesh_1_": {name:"Uttar Pradesh", value: "1"},
			 "haryana_1_": {name:"Haryana", value: "1"},
			 "punjab_1_": {name:"Punjab", value: "1"},
			 "uttaranchal_1_": {name:"Uttaranchal", value: "1"},
			 "himachal_pradesh_1_": {name:"Himachal Pradesh", value: "1"},
			 "tripura_1_": {name:"Tripura", value: "1"},
			 "mizoram_1_": {name:"Mizoram", value: "1"},
			 "manipur_1_": {name:"Manipur", value: "1"},
			 "nagaland_1_": {name:"Nagaland", value: "1"},
			 "meghalaya_1_": {name:"Meghalaya", value: "1"},
			 "chandigarh_1_": {name:"Chandigarh", value: "1"},
			 "delhi_ncr_1_": {name:"Delhi", value: "1"},
			 "dadra_and_nagar_haveli_1_": {name:"Dadra And Nagar Haveli", value: "1"},
			 "yanam_pondicherry_1_": {name:"Puducherry", value: "1"},
			 "pudducherry_pondicherry_1_": {name:"Puducherry", value: "1"},
			 "karikal_pondicherry_1_": {name:"Puducherry", value: "1"},
			 "mahe_pondicherry_1_": {name:"Puducherry", value: "1"},
			 "assam_1_": {name:"Assam", value: "1"},
			 "andaman_and_nicobar_1_": {name:"Andaman and Nicobar", value: "1"},
			 "jammu_and_kashmir_1_": {name:"Jammu and Kashmir", value: "1"},
			 "arunachal_pradesh_1_": {name:"Arunachal Pradesh", value: "1"},
			 
			 "siachen_1_": {name:"Jammu and Kashmir", value: "1"},
			 "path3007": {name:"Telangana", value: "1"},
			 "path3787": {name:"Jammu and Kashmir", value: "1"},
			 "path3799": {name:"Jammu and Kashmir", value: "1"},
			 "path3803": {name:"Jammu and Kashmir", value: "1"},
			 "path3801": {name:"Jammu and Kashmir", value: "1"},
			 "path3781": {name:"Jammu and Kashmir", value: "1"}	
			},
"populationDensity2011":{ 
			title: "Population Density",
			shortTitle: "Population Density",
			unit: "persons/km<sup>2</sup>",
			source: "(Census 2011 data)",
			sourceLink: "",
			hueColor: "0",
			data: {"sikkim_1_": 86,
			 "bihar_1_": 1102,
			 "jharkhand_1_": 414,
			 "rajasthan_1_": 201,
			 "west_bengal_1_": 1029,
			 "madhya_pradesh_1_": 236,
			 "chhattisgarh_1_": 189,
			 "orissa_1_": 269,
			 "gujarat_1_": 308,
			 "maharashtra_1_": 365,
			 "Goa_1_": 394,
			 "Andhra_Pradesh_2_": 303,
			 "Karnataka_1_": 319,
			 "Kerala_1_": 859,
			 "Tamil_Nadu_1_": 555,
			 "uttar_pradesh_1_": 828,
			 "haryana_1_": 573,
			 "punjab_1_": 	550,
			 "uttaranchal_1_": 	189,
			 "himachal_pradesh_1_":	123,
			 "tripura_1_": 	350,
			 "mizoram_1_": 52,
			 "manipur_1_": 122,
			 "nagaland_1_": 119,
			 "meghalaya_1_": 132,
			 "chandigarh_1_": 0,
			 "delhi_ncr_1_": 0,
			 "dadra_and_nagar_haveli_1_": 0,
			 "yanam_pondicherry_1_": 0,
			 "pudducherry_pondicherry_1_": 0,
			 "karikal_pondicherry_1": 0,
			 "mahe_pondicherry_1_": 0,
			 "assam_1_": 	397,
			 "andaman_and_nicobar_1_": 0,
			 "path3007": 307,//Telangana
			 "arunachal_pradesh_1_": 0,
			 "jammu_and_kashmir_1_": 57,		  
			 "siachen_1_": 57,
			 "path3787":57,
			 "path3799": 57,
			 "path3803": 57,
			 "path3801": 57,
			 "path3781": 57	
			}
		},
"lifeExpectancy2010to14":{ 
			title: "Life Expectancy",
			shortTitle: "Life Expectancy",
			unit: "Years",
			source: "Niti Aayog 2010-14 data",
			sourceLink: "https://niti.gov.in/content/life-expectancy",
			hueColor: "120",
			hueRange: true,
			data: {"Andhra_Pradesh_2_": 68.5,
			"assam_1_": 	63.9,
			 "bihar_1_": 68.9,
			 "chhattisgarh_1_": 64.8,
			 "delhi_ncr_1_": 73.2,
			 "gujarat_1_": 68.7,
			 "haryana_1_": 68.6,
			 "himachal_pradesh_1_":	71.6,
			 "jammu_and_kashmir_1_": 72.6,
			 "siachen_1_": 72.6,
			 "path3787":72.6,
			 "path3799": 72.6,
			 "path3803": 72.6,
			 "path3801": 72.6,
			 "path3781": 72.6,	
			 "jharkhand_1_": 66.6,
			 "Karnataka_1_": 68.8,
			 "Kerala_1_": 74.9, 
			 "madhya_pradesh_1_": 64.2,
			 "maharashtra_1_": 71.6,
			 "orissa_1_": 65.8,
			 "punjab_1_": 	71.6,
			 "rajasthan_1_": 67.7,
			 "Tamil_Nadu_1_": 70.6,
			 "uttar_pradesh_1_": 64.1,
			 "uttaranchal_1_": 	71.7,		 
			 "sikkim_1_": 68.9,
			 "west_bengal_1_": 70.2,
			 "Goa_1_": false,
			 "tripura_1_": 	false,
			 "mizoram_1_": false,
			 "manipur_1_": false,
			 "nagaland_1_": false,
			 "meghalaya_1_": false,
			 "chandigarh_1_": false,
			 "dadra_and_nagar_haveli_1_": false,
			 "yanam_pondicherry_1_": false,
			 "pudducherry_pondicherry_1_": false,
			 "karikal_pondicherry_1": false,
			 "mahe_pondicherry_1_": false,
			 "andaman_and_nicobar_1_": false,
			 "path3007": false,//Telangana
			 "arunachal_pradesh_1_": false,
			}
		},
"sexRatio2013":{ 
			title: "Sex Ratio",
			shortTitle: "Sex Ratio",
			unit: "Females per 1000 Males",
			source: "Niti Aayog 2013 Data",
			sourceLink: "https://niti.gov.in/content/sex-ratio-females-1000-males",
			hueColor: "0",
			hueRange: true,
			data: {"Andhra_Pradesh_2_": 918,
			"assam_1_": 	900,
			 "bihar_1_": 916,
			 "chhattisgarh_1_": 961,
			 "delhi_ncr_1_": 896,
			 "gujarat_1_": 854,
			 "haryana_1_": 831,
			 "himachal_pradesh_1_":	934,
			 "jammu_and_kashmir_1_": 899,
			 "siachen_1_": 899,
			 "path3787":899,
			 "path3799": 899,
			 "path3803": 899,
			 "path3801": 899,
			 "path3781": 899,	
			 "jharkhand_1_": 902,
			 "Karnataka_1_": 939,
			 "Kerala_1_": 967, 
			 "madhya_pradesh_1_": 919,
			 "maharashtra_1_": 878,
			 "orissa_1_": 950,
			 "punjab_1_": 	889,
			 "rajasthan_1_": 861,
			 "Tamil_Nadu_1_": 911,
			 "uttar_pradesh_1_": 879,
			 "uttaranchal_1_": 	844,		 
			 "sikkim_1_": false,
			 "west_bengal_1_": 951,
			 "Goa_1_": false,
			 "tripura_1_": 	false,
			 "mizoram_1_": false,
			 "manipur_1_": false,
			 "nagaland_1_": false,
			 "meghalaya_1_": false,
			 "chandigarh_1_": false,
			 "dadra_and_nagar_haveli_1_": false,
			 "yanam_pondicherry_1_": false,
			 "pudducherry_pondicherry_1_": false,
			 "karikal_pondicherry_1": false,
			 "mahe_pondicherry_1_": false,
			 "andaman_and_nicobar_1_": false,
			 "path3007": false,//Telangana
			 "arunachal_pradesh_1_": false,
			}
		},
"roadsDensity":{ 
			title: "Road Density",
			shortTitle: "Road Density",
			unit: "km road/km<sup>2</sup>",
			source: "Government of India. 2016 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18909",
			hueColor: "0",
			processFunction: "divideByArea",
			hueRange: false,
			data: {"andaman_and_nicobar_1_": 1493,
			"Andhra_Pradesh_2_": 174367,
			 "arunachal_pradesh_1_": 30692,
			 "assam_1_": 	329520,
			 "bihar_1_": 206484,
			 "chandigarh_1_": 2821,
			 "chhattisgarh_1_": 95809,
			 "dadra_and_nagar_haveli_1_": 1134,
			 "delhi_ncr_1_": 17625,
			 "Goa_1_": 16063,
			 "gujarat_1_": 179144,
			 "haryana_1_": 48482,
			 "himachal_pradesh_1_":	55759,
			 "jammu_and_kashmir_1_": 49716,
			 "siachen_1_": 49716,
			 "path3787":49716,
			 "path3799": 49716,
			 "path3803": 49716,
			 "path3801": 49716,
			 "path3781": 49716,	
			 "jharkhand_1_": 66786,
			 "Karnataka_1_": 345515,
			 "Kerala_1_": 200808, 
			 "madhya_pradesh_1_": 289940,
			 "maharashtra_1_": 613418,
			 "manipur_1_": 24776,
			 "meghalaya_1_": 21727,
			 "mizoram_1_": 8108,
			 "nagaland_1_": 36114,
			 "orissa_1_": 288083,
			 "punjab_1_": 	108379,
			 "rajasthan_1_": 254279,		 
			 "uttar_pradesh_1_": 422412,
			 "uttaranchal_1_": 	61018,		 
			 "sikkim_1_": 8243,
			 "west_bengal_1_": 422412,
			 "Tamil_Nadu_1_": 261035,
			 "tripura_1_": 	39365,
			 "yanam_pondicherry_1_": 3174,
			 "pudducherry_pondicherry_1_": 3174,
			 "karikal_pondicherry_1": 3174,
			 "mahe_pondicherry_1_": 3174,
			 "path3007": 123572
,//Telangana
			}
		},
"riceDensity":{ 
			title: "Rice Production Density",
			shortTitle: "Rice Production Density",
			unit: "kilo tonne/km<sup>2</sup>",
			source: "RBI Publications. 2016-17 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18846",
			hueColor: "0",
			processFunction: "divideByArea",
			hueRange: false,
			data: {"andaman_and_nicobar_1_": false,
			"Andhra_Pradesh_2_": 7452,
			 "arunachal_pradesh_1_": 220,
			 "assam_1_": 	4727,
			 "bihar_1_": 8239,
			 "chandigarh_1_": false,
			 "chhattisgarh_1_": 8048,
			 "dadra_and_nagar_haveli_1_": false,
			 "delhi_ncr_1_": 17,
			 "Goa_1_": 113,
			 "gujarat_1_": 1930,
			 "haryana_1_": 4453,
			 "himachal_pradesh_1_":	146,
			 "jammu_and_kashmir_1_": 572,
			 "siachen_1_": 572,
			 "path3787": 572,
			 "path3799": 572,
			 "path3803": 572,
			 "path3801": 572,
			 "path3781": 572,	
			 "jharkhand_1_": 3841,
			 "Karnataka_1_": 2605,
			 "Kerala_1_": 437, 
			 "madhya_pradesh_1_": 4227,
			 "maharashtra_1_": 3110,
			 "manipur_1_": 430,
			 "meghalaya_1_": 203,
			 "mizoram_1_": 62,
			 "nagaland_1_": 337,
			 "orissa_1_": 8326,
			 "punjab_1_": 	11586.2,
			 "rajasthan_1_": 453,		 
			 "uttar_pradesh_1_": 13754,
			 "uttaranchal_1_": 	630,		 
			 "sikkim_1_": 19.7,
			 "west_bengal_1_": 15303,
			 "Tamil_Nadu_1_": 2369,
			 "tripura_1_": 	814.6,
			 "yanam_pondicherry_1_": 52,
			 "pudducherry_pondicherry_1_": 52,
			 "karikal_pondicherry_1": 52,
			 "mahe_pondicherry_1_": 52,
			 "path3007": 5173 
,//Telangana
			}
		},
"fruitDensity":{ 
			title: "Fruit Production Density",
			shortTitle: "Fruit Production Density",
			unit: "tonne/km<sup>2</sup>",
			source: "RBI Publications. 2016-17 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18862",
			hueColor: "0",
			processFunction: "divideByMilliArea",
			hueRange: false,
			data: {"andaman_and_nicobar_1_": false,	"Andhra_Pradesh_2_": 12098, "arunachal_pradesh_1_": 311.5, "assam_1_": 	2391, "bihar_1_": 4273, "chandigarh_1_": false, "chhattisgarh_1_": 2394, "dadra_and_nagar_haveli_1_": false, "delhi_ncr_1_": false, "Goa_1_": false, "gujarat_1_": 8483, "haryana_1_": 900, "himachal_pradesh_1_":	639, "jammu_and_kashmir_1_": 2116, "siachen_1_": 2116, "path3787": 2116, "path3799": 2116, "path3803": 2116, "path3801": 2116, "path3781": 2116, "jharkhand_1_": 1026, "Karnataka_1_": 7425, "Kerala_1_": 2468, "madhya_pradesh_1_": 5937, "maharashtra_1_": 10378, "manipur_1_": 454, "meghalaya_1_": 447, "mizoram_1_": 339, "nagaland_1_": 393, "orissa_1_": 2430, "punjab_1_": 	1857, "rajasthan_1_": 718, "uttar_pradesh_1_": 10354, "uttaranchal_1_": 	665, "sikkim_1_": 27, "west_bengal_1_": 3709, "Tamil_Nadu_1_": 6080, "tripura_1_": 	846, "yanam_pondicherry_1_": 52, "pudducherry_pondicherry_1_": 52, "karikal_pondicherry_1": 52, "mahe_pondicherry_1_": 52, "path3007": 3537
			}
		},
"area":{    hueColor: "0",
			data: {"andaman_and_nicobar_1_": 8249,
			"Andhra_Pradesh_2_": 162970,
			 "arunachal_pradesh_1_": 83743	,
			 "assam_1_": 78438,
			 "bihar_1_": 94163,
			 "chandigarh_1_": 114,
			 "chhattisgarh_1_": 135191	,
			 "dadra_and_nagar_haveli_1_": 491,
			 "delhi_ncr_1_": 1483,
			 "Goa_1_": 3702,
			 "gujarat_1_": 196024,
			 "haryana_1_": 44212,
			 "himachal_pradesh_1_":	55673,
			 "jammu_and_kashmir_1_": 111387,
			 "siachen_1_": 111387,
			 "path3787":111387,
			 "path3799": 111387,
			 "path3803": 111387,
			 "path3801": 111387,
			 "path3781": 111387,	
			 "jharkhand_1_":79714	,
			 "Karnataka_1_": 191791,
			 "Kerala_1_": 38863, 
			 "madhya_pradesh_1_": 308350,
			 "maharashtra_1_": 307713,
			 "manipur_1_": 22327	,
			 "meghalaya_1_": 22429	,
			 "mizoram_1_": 21081	,
			 "nagaland_1_": 16579,
			 "orissa_1_": 155707,
			 "punjab_1_": 50362,
			 "rajasthan_1_": 342238,		 
			 "uttar_pradesh_1_": 243290,
			 "uttaranchal_1_": 	53483,		 
			 "sikkim_1_": 7096,
			 "west_bengal_1_": 88752,
			 "Tamil_Nadu_1_": 130058,
			 "tripura_1_": 10486	,
			 "yanam_pondicherry_1_": 492,
			 "pudducherry_pondicherry_1_": 492,
			 "karikal_pondicherry_1": 492,
			 "mahe_pondicherry_1_": 492,
			 "path3007": 112077
,//Telangana
			}
		},
"nationlHighayDensity":{ 
			title: "National Highway Density",
			shortTitle: "National Highway Density",
			unit: "NH km/km<sup>2</sup>",
			source: "RBI Publications. 2016-17 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18907",
			hueColor: "0",
			processFunction: "divideByArea",
			hueRange: false,
			data: 		{"Andhra_Pradesh_2_":6383,"arunachal_pradesh_1_":2537,"assam_1_":3845,"bihar_1_":4839,"chhattisgarh_1_":3523,"gujarat_1_":5456,"haryana_1_":2741,"himachal_pradesh_1_":2643,"jammu_and_kashmir_1_":2601,"jharkhand_1_":2661,"Karnataka_1_":6991,"Kerala_1_":1782,"madhya_pradesh_1_":8053,"maharashtra_1_":16239,"manipur_1_":1746,"meghalaya_1_":1204,"mizoram_1_":1423,"nagaland_1_":1547,"orissa_1_":5413,"punjab_1_":3228,"rajasthan_1_":8972,"sikkim_1_":463,"Tamil_Nadu_1_":5918,"path3007":3786,"tripura_1_":854,"uttar_pradesh_1_":9017,"uttaranchal_1_":2842,"west_bengal_1_":3004}
	},
"railwayDensity":{ 
			title: "Railway Density",
			shortTitle: "Railway Density",
			unit: "rail km/km<sup>2</sup>",
			source: "RBI Publications. 2016-17 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18907",
			hueColor: "0",
			processFunction: "divideByArea",
			hueRange: false,
			data: 		{"Andhra_Pradesh_2_":3817,"arunachal_pradesh_1_":12,"assam_1_":2440,"bihar_1_":3714,"chhattisgarh_1_":1216,"gujarat_1_":5259,"haryana_1_":1710,"himachal_pradesh_1_":296,"jammu_and_kashmir_1_":298,"jharkhand_1_":2455,"Karnataka_1_":3424,"Kerala_1_":1045,"madhya_pradesh_1_":5113,"maharashtra_1_":5784,"manipur_1_":13,"mizoram_1_":2,"nagaland_1_":11,"orissa_1_":2598,"punjab_1_":2269,"rajasthan_1_":5894,"Tamil_Nadu_1_":4028,"path3007":1823,"tripura_1_":203,"uttar_pradesh_1_":9167,"uttaranchal_1_":340,"west_bengal_1_":4139}
				},
"installedPowerDensity":{ 
			title: "Installed Power Density",
			shortTitle: "Installed Power Density",
			unit: "MW/km<sup>2</sup>",
			source: "RBI Publications. 2017-18 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18905",
			hueColor: "0",
			processFunction: "divideByArea",
			hueRange: false,
			data: 		{"Andhra_Pradesh_2_":23674.17,"arunachal_pradesh_1_":300.56,"assam_1_":1571.18,"bihar_1_":4341.47,"chhattisgarh_1_":13526.79,"gujarat_1_":31043.12,"haryana_1_":11260.32,"himachal_pradesh_1_":4046.81,"jammu_and_kashmir_1_":3389.21,"jharkhand_1_":1770.86,"Karnataka_1_":27157.15,"Kerala_1_":5083.27,"madhya_pradesh_1_":21728.08,"maharashtra_1_":43254.59,"manipur_1_":241.93,"meghalaya_1_":565.45,"mizoram_1_":195.77,"nagaland_1_":159.33,"orissa_1_":7376.6,"punjab_1_":13432.44,"rajasthan_1_":21683.73,"sikkim_1_":962.15,"Tamil_Nadu_1_":30326.71,"path3007":15139.25,"tripura_1_":733.44,"uttar_pradesh_1_":24909.33,"uttaranchal_1_":3399.14,"west_bengal_1_":10518.24}
			},
"decadalPopulationGrowth":{ 
			title: "Decadal Population Growth",
			shortTitle: "Decadal Population Growth",
			unit: "percent",
			source: "RBI Publications. 2001-2010 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18800",
			hueColor: "0",
			hueRange: false,
			data: 		{"Andhra_Pradesh_2_":10.98,"arunachal_pradesh_1_":26.03,"assam_1_":17.07,"bihar_1_":25.4,"chhattisgarh_1_":22.61,"gujarat_1_":19.28,"haryana_1_":19.9,"himachal_pradesh_1_":12.94,"jammu_and_kashmir_1_":23.64,"jharkhand_1_":22.42,"Karnataka_1_":15.6,"Kerala_1_":4.91,"madhya_pradesh_1_":20.35,"maharashtra_1_":15.99,"manipur_1_":24.5,"meghalaya_1_":29.95,"mizoram_1_":23.48,"nagaland_1_":-0.58,"orissa_1_":14.05,"punjab_1_":13.89,"rajasthan_1_":21.31,"sikkim_1_":12.89,"Tamil_Nadu_1_":15.61,"tripura_1_":14.84,"uttar_pradesh_1_":20.23,"uttaranchal_1_":18.81,"west_bengal_1_":13.84}
		},
"powerTransmissionLosses":{
			title: "Power Transmission Losses",
			shortTitle: "Power Transmission Losses",
			unit: "percent",
			source: "RBI Publications. 2016-2017 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18912",
			hueColor: "0",
			hueRange: false,
			data: {"Andhra_Pradesh_2_":16.2,"arunachal_pradesh_1_":49.4,"assam_1_":25,"bihar_1_":30.3,"chhattisgarh_1_":25.6,"gujarat_1_":18.2,"haryana_1_":33.7,"himachal_pradesh_1_":22.4,"jammu_and_kashmir_1_":47,"jharkhand_1_":16.3,"Karnataka_1_":13.4,"Kerala_1_":18.1,"madhya_pradesh_1_":26.8,"maharashtra_1_":18.2,"manipur_1_":36.5,"meghalaya_1_":35.7,"mizoram_1_":35.5,"nagaland_1_":20.8,"orissa_1_":38.2,"punjab_1_":17.6,"rajasthan_1_":29.7,"sikkim_1_":23.8,"Tamil_Nadu_1_":12.6,"path3007":18.7,"tripura_1_":30.4,"uttar_pradesh_1_":23.6,"uttaranchal_1_":25.4,"west_bengal_1_":22.4}
},
"netSownAreaPercent":{
			title: "Net Sown Area",
			shortTitle: "Net Sown Area",
			unit: "percent",
			source: "RBI Publications. 2014-2015 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18842",
			hueColor: "0",
			processFunction: "divideByMilliArea",
			hueRange: false,
			data: {"Andhra_Pradesh_2_":6236,"arunachal_pradesh_1_":225,"assam_1_":2827,"bihar_1_":5278,"chhattisgarh_1_":4681,"Goa_1_":129,"gujarat_1_":10302,"haryana_1_":3522,"himachal_pradesh_1_":550,"jammu_and_kashmir_1_":758,"jharkhand_1_":1385,"Karnataka_1_":10044,"Kerala_1_":2043,"madhya_pradesh_1_":15351,"maharashtra_1_":17345,"manipur_1_":383,"meghalaya_1_":286,"mizoram_1_":145,"nagaland_1_":384,"orissa_1_":4474,"punjab_1_":4119,"rajasthan_1_":17521,"sikkim_1_":77,"Tamil_Nadu_1_":4819,"path3007":4377,"tripura_1_":255,"uttar_pradesh_1_":16598,"uttaranchal_1_":700,"west_bengal_1_":5238}
		},
"netIrrigatedAreaPercent":{
			title: "Net Irrigated Area",
			shortTitle: "Net Irrigated Area",
			unit: "percent",
			source: "RBI Publications. 2014-2015 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18844",
			hueColor: "0",
			processFunction: "divideByMilliArea",
			hueRange: false,
			data: {"Andhra_Pradesh_2_":2927,"arunachal_pradesh_1_":56,"assam_1_":296,"bihar_1_":2987,"chhattisgarh_1_":1466,"Goa_1_":39,"gujarat_1_":4233,"haryana_1_":2974,"himachal_pradesh_1_":113,"jammu_and_kashmir_1_":331,"jharkhand_1_":207,"Karnataka_1_":3589,"Kerala_1_":414,"madhya_pradesh_1_":9584,"maharashtra_1_":3244,"manipur_1_":69,"meghalaya_1_":81,"mizoram_1_":16,"nagaland_1_":97,"orissa_1_":1259,"punjab_1_":4118,"rajasthan_1_":7882,"sikkim_1_":12,"Tamil_Nadu_1_":2726,"path3007":1726,"tripura_1_":79,"uttar_pradesh_1_":14389,"uttaranchal_1_":330,"west_bengal_1_":3102}
		},
"croppingIntensityPercent":{
			title: "Cropping Intensity",
			shortTitle: "Cropping Intensity",
			unit: "percent",
			source: "RBI Publications. 2014-2015 Data",
			sourceLink: "https://m.rbi.org.in/Scripts/PublicationsView.aspx?id=18845",
			hueColor: "0",
			hueRange: false,
			data: {"Andhra_Pradesh_2_":123.3,"arunachal_pradesh_1_":132.8,"assam_1_":144.4,"bihar_1_":145.4,"chhattisgarh_1_":122.4,"Goa_1_":122,"gujarat_1_":124,"haryana_1_":185.6,"himachal_pradesh_1_":167,"jammu_and_kashmir_1_":155.3,"jharkhand_1_":112.2,"Karnataka_1_":121.9,"Kerala_1_":128.5,"madhya_pradesh_1_":155.1,"maharashtra_1_":135.3,"manipur_1_":100,"meghalaya_1_":120,"mizoram_1_":100,"nagaland_1_":130.3,"orissa_1_":115.6,"punjab_1_":190.8,"rajasthan_1_":138.3,"sikkim_1_":176,"Tamil_Nadu_1_":124.4,"path3007":121.5,"tripura_1_":189.3,"uttar_pradesh_1_":157.5,"uttaranchal_1_":156.7,"west_bengal_1_":185}
		},
		
"siesmicZones" : {
			title: "Siesmic Zones",
			shortTitle: "Siesmic Zones",
			unit: "",
			source: "Ministry of Earth Science",
			sourceLink: "https://pib.gov.in/newsite/mbErel.aspx?relid=168661",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	3,
				"delhi": 	4,
				"bengaluru": 	2,
				"kolkata": 	3,
				"chennai": 	3,
				"ahmedabad": 	3,
				"hyderabad": 	2,
				"pune": 	3,
				"surat": 	3,
				"kanpur": 	3,
				"jaipur": 	2,
				"lucknow": 	3,
				"nagpur": 	2,
				"patna": 	4,
				"bhopal": 	2,
				"ludhiana": 4,
				"tirunelveli": 	3,
				"agra": 	3,
				"Vadodara": 3	
}},
"populationOfCities" : {
			title: "Population",
			shortTitle: "Popultaion",
			unit: "lakh",
			source: "Census 2011 Data",
			sourceLink: "https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	124.42,
				"delhi": 	110.08,
				"bengaluru": 	84.37,
				"kolkata": 	44.87,
				"chennai": 	46.81,
				"ahmedabad": 	55.71,
				"hyderabad": 	68.10,
				"pune": 	31.24,
				"surat": 	44.68,
				"kanpur": 	27.65,
				"jaipur": 	30.46,
				"lucknow": 	28.17,
				"nagpur": 	24.06,
				"patna": 	16.84,
				"bhopal": 	17.98,
				"ludhiana": 16.19,
				"agra": 	15.86,
				"Vadodara": 16.71	
		}},
	"moterVehiclesOwnership" : {
			title: "Registered Motor Vehicle Count",
			shortTitle: "Registered Motor Vehicle Count",
			unit: "thousand",
			source: "Ministry of Road Trasport, 1951-2016 Data",
			sourceLink: "https://morth.nic.in/sites/default/files/other_files/Road_Transport_Year_Book_2015_16.pdf",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	2820,
				"delhi": 	8851,
				"coimbatore": 1904,
				"dhanbad": 563,
				"ghaziabad": 972,
				"gwalior": 618,
				"kolkata": 	1402,
				"chennai": 	4938,
				"ahmedabad": 	3653,
				"hyderabad": 	2369,
				"pune": 	2519,
				"raipur": 1213,
				"rajkot": 1804,
				"ranchi": 547,
				"surat": 2459,
				"trichy": 763,
				"vadodara": 1895,
				"vishakhapatnam": 731,
				"surat": 	2666,
				"kanpur": 	1542,
				"jaipur": 	2424,
				"lucknow": 	1818,
				"nagpur": 	1475,
				"kochi": 606,
				"indore": 1811,
				"jabalpur": 638,
				"jamshedpur": 472,
				"kota": 654,
				"kozhikode": 412,
				"jodhpur": 916,
				"patna": 	1063,
				"bhopal": 	1061,
				"ludhiana": false,
				"madhurai": 957,
				"meerut": 525,
				"nasik": 622,
				"agra": 	923,
				"pryagraj":  897,
				"amritsar": false,
				"aurangabad": 426,
				"bengaluru": 6113,
				"chandigarh": 837,
}},
	"gdpOfCities" : {
			title: "GDP (PPP)",
			shortTitle: "GDP (PPP)",
			unit: "billion dollars",
			source: "Brookings Institution",
			sourceLink: "http://www.businessworld.in/article/Richest-Cities-Of-India/28-06-2017-121011/",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	310,
				"delhi": 	293.6,
				"bengaluru": 	110,
				"kolkata": 	150.1,
				"chennai": 	78.6,
				"ahmedabad": 	68,
				"hyderabad": 	75.2,
				"pune": 	69,
				"surat": 	59.8,
				"vishakhapatnam": 43.5,	
		}},
	"wealthOfCities" : {
			title: "Wealth (Private Assets)",
			shortTitle: "Wealth (Private Assets)",
			unit: "billion dollars",
			source: "New World Wealth",
			sourceLink: "https://cafemutual.com/news/industry/13460-mumbai-delhi-and-bengaluru-richest-cities-of-india",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	950,
				"delhi": 	554,
				"bengaluru": 	410,
				"kolkata": 	357,
				"chennai": 	185,
				"hyderabad": 	320,
				"pune": 	236,
				"gurgaon": 135,
		}},
	"billionares" : {
			title: "Billionares HNWIs",
			shortTitle: "Billionares HNWIs",
			unit: "persons",
			source: "New World Wealth",
			sourceLink: "https://cafemutual.com/news/industry/13460-mumbai-delhi-and-bengaluru-richest-cities-of-india",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	28,
				"delhi": 	14,
				"bengaluru": 	5,
				"kolkata": 	6,
				"chennai": 	4,
				"hyderabad": 	5,
				"pune": 	3,
				"gurgaon": 2,
		}},
	"growthOfWealth" : {
			title: "Growth of Wealth",
			shortTitle: "Growth of Wealth (2007 to 2017)",
			unit: "percent",
			source: "New World Wealth",
			sourceLink: "https://cafemutual.com/news/industry/13460-mumbai-delhi-and-bengaluru-richest-cities-of-india",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	155,
				"delhi": 	154,
				"bengaluru": 	175,
				"kolkata": 	148,
				"chennai": 	142,
				"hyderabad": 	163,
				"pune": 	172,
				"gurgaon": 160,
		}},
	"rainfallCities" : {
			title: "Annual Rainfall",
			shortTitle: "Annual Rainfall",
			unit: "mm",
			source: "India Met. Department, 25 year average (1982-2006)",
			sourceLink: "http://www.rainwaterharvesting.org/rainfall_index.htm#",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	2335,
				"delhi": 	755,
				"bengaluru": 	878,
				"kolkata": 	1765,
				"chennai": 	1550,
				"hyderabad": 	822,
				"pune": 	782,
				"ahmedabad": 1437,
				"indore": 995,
				"bhopal": 1148,
				"kanpur": 804,
				"jodhpur": 325,
				"rajkot": 610,
				"shillong": 2270,
				"guwahati": 1758,
				"lucknow": 908,
				"kanpur": 804,
				"coimbatore": 607,
				"kochi": 1733

		}},
		"tempCities" : {
			title: "Temperature Range",
			shortTitle: "Temperature Range",
			unit: "mm",
			source: "India Met. Department, 25 year average (1982-2006)",
			sourceLink: "http://www.rainwaterharvesting.org/rainfall_index.htm#",
			hueColor: "0",
			type:"cityPlot",
			subType: "radius",
			hueRange: false,
			data:{
				"mumbai": 	2335,
				"delhi": 	755,
				"bengaluru": 	878,
				"kolkata": 	1765,
				"chennai": 	1550,
				"hyderabad": 	822,
				"pune": 	782,
				"ahmedabad": 1437,
				"indore": 995,
				"bhopal": 1148,
				"kanpur": 804,
				"jodhpur": 325,
				"rajkot": 610,
				"shillong": 2270,
				"guwahati": 1758,
				"lucknow": 908,
				"kanpur": 804,
				"coimbatore": 607,
				"kochi": 1733

		}},
}
