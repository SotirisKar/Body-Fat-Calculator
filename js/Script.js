function Hide(){
	
	document.getElementById('trHip').style.display ='none';
}
function Show(){
	
	document.getElementById('trHip').style.display ='';
}
function swapStyleSheet(sheet){
	
	document.getElementById('pagestyle').setAttribute('href',sheet);
}

function Metric(){
	
	document.getElementById('weight').placeholder = 'kg';
	document.getElementById('height').placeholder = 'cm';
	document.getElementById('height2').style.display = 'none';
	document.getElementById('waist').placeholder = 'cm';
	document.getElementById('hip').placeholder = 'cm';
	document.getElementById('neck').placeholder = 'cm';
	document.getElementById('height').style.width = '';
}
function USA(){
	
   	document.getElementById('weight').placeholder = 'lbs';
	document.getElementById('height').placeholder = 'ft';
	document.getElementById('waist').placeholder = 'in';
	document.getElementById('hip').placeholder = 'in';
	document.getElementById('neck').placeholder = 'in';
	document.getElementById('height2').style.display = 'inline';
	document.getElementById('height').style.width = '50%';
	document.getElementById('height2').style.width = '';
}
function Calculate(){
	
	var weight = parseFloat(document.getElementById('weight').value);
	var height = parseFloat(document.getElementById('height').value);
	var height2 = parseFloat(document.getElementById('height2').value);
	var waist = parseFloat(document.getElementById('waist').value);
	var hip = parseFloat(document.getElementById('hip').value);
	var neck = parseFloat(document.getElementById('neck').value);
	var male = document.getElementById('male');
	var female = document.getElementById('female');
	
	if(metric.checked == true){
		if(male.checked == true){
			var bodyfat = Math.round(495/(1.0324-.19077*Math.log10(waist-neck)+.15456*Math.log10(height))-450);
			var fatmass = Math.round((bodyfat/100)*weight);
			document.getElementById("fatmass").innerHTML = "Fat Mass: "+fatmass+" kg";
			var leanmass = Math.round(weight-fatmass);
			document.getElementById("leanmass").innerHTML ="Lean Mass: "+leanmass+" kg";
		}else{
			var bodyfat = Math.round(495/(1.29579-.35004*Math.log10(waist+hip-neck)+.22100*Math.log10(height))-450);
			var fatmass = Math.round((bodyfat/100)*weight);
			document.getElementById("fatmass").innerHTML = "Fat Mass: "+fatmass+" kg";
			var leanmass = Math.round(weight-fatmass);
			document.getElementById("leanmass").innerHTML ="Lean Mass: "+leanmass+" kg";
		}
	}else{
		if(male.checked == true){
			var bodyfat = Math.round(495/(1.0324-.19077* Math.log10(waist*2.54-neck*2.54)+.15456*Math.log10((height*12+height2)*2.54))-450);
			var fatmass = Math.round((bodyfat/100)*weight);
			document.getElementById("fatmass").innerHTML = "Fat Mass: "+fatmass+" lbs"
			var leanmass = Math.round(weight-fatmass);
			document.getElementById("leanmass").innerHTML ="Lean Mass: "+leanmass+" lbs";
		}else{
			var bodyfat = Math.round(495/(1.29579-.35004*Math.log10((waist*2.54)+(hip*2.54)-(neck*2.54))+.22100*Math.log10(((height*12+height2)*2.54)))-450);
			var fatmass = Math.round((bodyfat/100)*weight);
			document.getElementById("fatmass").innerHTML = "Fat Mass: "+fatmass+" lbs"
			var leanmass = Math.round(weight-fatmass);
			document.getElementById("leanmass").innerHTML ="Lean Mass: "+leanmass+" lbs";
		}
	}
	document.getElementById("results").innerHTML = "Results:";
	document.getElementById("bodyfat").innerHTML = "bodyfat: " +bodyfat +" %";
	if(female.checked == true){
		if(bodyfat<=10){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Dangerously Low";
		}else if(bodyfat>=10 && bodyfat<=13){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Essential Fat";
		}else if(bodyfat>=14 && bodyfat<=20){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Athletic";
		}else if(bodyfat>=21 && bodyfat<=24){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Fit";
		}else if(bodyfat>=25 && bodyfat<=31){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Acceptable";
		}else if(bodyfat>=32){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Obese";
		}
	}else{
		if(bodyfat<=1){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Dangerously Low";
		}else if(bodyfat>=2 && bodyfat<=5){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Essential Fat";
		}else if(bodyfat>=6 && bodyfat<=13){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Athletic";
		}else if(bodyfat>=14 && bodyfat<=17){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Fit";
		}else if(bodyfat>=18 && bodyfat<=25){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Acceptable";
		}else if(bodyfat>=26){
			document.getElementById("bodyfatcategory").innerHTML = "Body Fat Category: Obese";
		}
	}
}
