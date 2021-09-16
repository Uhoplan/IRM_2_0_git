var evt = new CustomEvent("submit", { "bubbles":true, "cancelable": true });  
var tempColumns = {
	mud: [{"id":"_s4rz5qvxvfj","name":"Тип","field":"Тип"},{"id":"_xk16pg0m52l","name":"Тип раствора","field":"Тип раствора"},{"id":"_8rxc7u2cxf9","name":"\"Плотность\n (гр/см3)\"","field":"\"Плотность\n (гр/см3)\""},{"id":"_hjc3ryn4vt","name":"\"Условная вязкость\n(сек)\"","field":"\"Условная вязкость\n(сек)\""},{"id":"_u52el7crqrg","name":"\"Водоотдача по ФП\n(мл/30 мин)\"","field":"\"Водоотдача по ФП\n(мл/30 мин)\""},{"id":"_157tz4z4img","name":"\"Пласт. вязкость\n (мПа*с)\"","field":"\"Пласт. вязкость\n (мПа*с)\""},{"id":"_jcc24d9adgt","name":"\"Глинистая корка \n(мм)\"","field":"\"Глинистая корка \n(мм)\""},{"id":"_dmgnp6au1qc","name":"\"Тверд. Фаза \n(%)\"","field":"\"Тверд. Фаза \n(%)\""},{"id":"_bsixhjlgxj8","name":"\"ДНС\n(Па)\"","field":"\"ДНС\n(Па)\""},{"id":"_9gy8grbpo8","name":"\"МВТ\n (кг/м3)\"","field":"\"МВТ\n (кг/м3)\""},{"id":"_0h1xxz5akuga","name":"\"СНС\n (Па)\"","field":"\"СНС\n (Па)\""},{"id":"_m3yr23407r","name":"\"Смазка\n(%)\"","field":"\"Смазка\n(%)\""},{"id":"_7ytgs480iqv","name":"\"Песок\n(%)\"","field":"\"Песок\n(%)\""},{"id":"_xtqq9wqnkc","name":"\"Хлориды\n(мг/л)\"","field":"\"Хлориды\n(мг/л)\""},{"id":"_sa8le0ikgvb","name":"pH","field":"pH"},{"id":"_bbuy28l9kt5","name":"V в скв.","field":"V в скв."},{"id":"_7ekv02mnf7r","name":"V приг.","field":"V приг."},{"id":"_p14udq732ls","name":"V общ.","field":"V общ."}],
	bit: [{"id":"_4vienyl3s3k","name":"№ долота","field":"№ долота"},{"id":"_mxfdspqmh5r","name":"№ спуска","field":"№ спуска"},{"id":"_6b61lcwesp8","name":"Диам., мм","field":"Диам., мм"},{"id":"_rm6ohkz1wz","name":"Модель","field":"Модель"},{"id":"_47psrd59vuh","name":"сер. №","field":"сер. №"},{"id":"_wgk3rit7no","name":"Насадки","field":"Насадки"},{"id":"_300av5b1zch","name":"Глубина от","field":"Глубина от"},{"id":"_b1jpnjvzg87","name":"Глубина до","field":"Глубина до"},{"id":"_cf1a1pdkcf","name":"Прох., м","field":"Прох., м"},{"id":"_m9sqind3hin","name":"Часы бур.","field":"Часы бур."},{"id":"_2bwb03tk18q","name":"М/час","field":"М/час"},{"id":"_5jzcngn0fhn","name":"Состояние долота","field":"Состояние долота"},{"id":"_d2ya34wpsp9","name":"Причина подъема","field":"Причина подъема"}],
	NNB: [{"id":"_4kuxdjivypv","name":"Дата","field":"Дата"},{"id":"_h3ejf8f2o3i","name":"№ долота","field":"№ долота"},{"id":"_rte5or036vn","name":"№ спуска","field":"№ спуска"},{"id":"_x5omid9za2","name":"Диам., мм","field":"Диам., мм"},{"id":"_u2idbz8z2um","name":"Модель","field":"Модель"},{"id":"_87ud8vbdoha","name":"сер. №","field":"сер. №"},{"id":"_3t83rz3s1z2","name":"Насадки","field":"Насадки"},{"id":"_z8x4l6ladz9","name":"Глуб. от","field":"Глуб. от"},{"id":"_w2keo18gof","name":"До","field":"До"},{"id":"_x286dpgdkds","name":"Прох., м","field":"Прох., м"},{"id":"_kkjploiet1","name":"Часы бур.","field":"Часы бур."},{"id":"_xa3gt3vbzog","name":"М/час","field":"М/час"},{"id":"_1v01mm1v6d5","name":"Состояние долота","field":"Состояние долота"},{"id":"_hndhgt94a4","name":"Причина подъема","field":"Причина подъема"},{"id":"_a7ifuhm3vd7","name":"КНБК","field":"КНБК"},{"id":"_rljvahx81xj","name":"Объём шлама, м3","field":"Объём шлама, м3"}],
	concrete: []
};

function Table(id, columns, type) {
	this.id = id;
	this.table = document.getElementById(id);
	this.data = {
		columns: [],
		rows: []
	};
	if (columns) this.data.columns = columns
	//this.currentData = deepClone(this.data);
	this.name = null;
	if (type) {
		if (type.name) this.name = type.name;
		if (type.type) this.type = type.type;
	}
	this.input = null;
	this.form = null;
	this.classes = {
		header: "table__header",
		headerDomain: "table__header-domain",
		row: "table__row",
		rowDomain: "table__row-domain"
	};
	

	var matchReg = /.*_.*-.*/;
	var that = this;
	var currentlyEditing = {};
	var button = null;
	var form = null;
	var inputValue;
	
	var tbodyStyles = "overflow:scroll;max-width:100%;max-height:100%;display:block;";
	//var rowsDivInnerTable = "<tbody id=" + this.id + "_table__rows data-table=body name=tbody></tbody>"
	//var headingDivInnerTable = "<tbody id=" + this.id + "_table__heading data-table=heading name=theading></tbody>";
	//var rowsDiv = "<table id=" + this.id + "_table__rows-container styles=" + tbodyStyles + ">" + rowsDivInnerTable + "</table>";
	//var headingDiv = "<table id=" + this.id + "_table__heading-container>" + headingDivInnerTable + "</table>";
	//console.log(this);
	var headingDiv = "<tbody id=" + this.id + "_table__heading data-table=heading name=theading></tbody>";
	var rowsDiv = "<tbody id=" + this.id + "_table__rows data-table=body name=tbody></tbody>";
	this.table.innerHTML = "";
	if (this.type != "plan") {
		this.table.onclick = function(e) {
			if (e.target.id.includes("delete")) {
				deleteRow(e); 
				return
			}
			editing(e.target);
			
			//getValueObjectFromId(e.target.id, that);
		}
	}
	
	this.table.insertAdjacentHTML("beforeend", headingDiv);
	this.table.insertAdjacentHTML("beforeend", rowsDiv);
	//this.table.ondblclick = function(e) {
		//editing(e.target);
	//}
	
	
	if (this.table.parentElement.id.includes("table")) {
		this.table.parentElement.addEventListener("scroll", function() {
			//replaceInputPosition(currentlyEditing.element);
			//that.input.style.visibility = "hidden";
			submit();
		})
	}	
	
	var rowsContainer = document.getElementById(this.id + "_table__rows");
	rowsContainer.addEventListener("scroll", function() {			
		that.input.style.visibility = "hidden";
		submit();	
	});
	
	function deleteRow(e) {
		var rowNumber = e.target.id.replace(/[^\d]/g, "");
		//console.log(rowNumber);
		var row = document.getElementById(that.id + "_tr_" + rowNumber);
		
		//console.log(that.id + "_tr_" + rowNumber);
		row.remove();
		that.data.rows.splice(rowNumber, 1);
		submit();
		that.render(that.data.rows);
	}

	function submit() {
	// *** on input submit ***
		if (Object.keys(currentlyEditing).length < 1) return
		
		//webMI.data.write(inputVar, currentlyEditing.path.row[currentlyEditing.path.domain])
		
		//webMI.data.read(inputVar, function(e) {		
			//inputValue = e.value;
			
			currentlyEditing.path.row[currentlyEditing.path.domain] = that.input.value;
			//currentlyEditing.path.row[currentlyEditing.path.domain] = inputValue;
			currentlyEditing.element.innerHTML = "";
			currentlyEditing.element.insertAdjacentHTML("beforeend", that.input.value);
			//currentlyEditing.element.insertAdjacentHTML("beforeend", inputValue);
			currentlyEditing = {};
			that.input.style.visibility = "hidden";
			//temp
			//that.data.timestamp = new Date();
			//tableToSend = that.data;
			//console.log(that.data)
			
		//})
	}

	function replaceInputPosition(e) {
		var rect = e.getBoundingClientRect();
		
		that.input.style.top = rect.top + "px";
		that.input.style.left = rect.left + "px";
		that.input.style.width = rect.width + "px";
		that.input.style.height = rect.height + "px";
		that.input.style.color = e.style.color;
		that.input.style.background = e.style.background;
	}	
	
	function editing(element) {
	/*
		if (!button) {
			button = document.getElementById("button");
			button.onclick = function() {
				submit();
			}
		}
	*/
		function addSubmitEvent(form) {
			form.addEventListener("submit", function(e) {
				e.preventDefault();
				//console.log("submit");
				submit();			
			})			
		}
		if (!that.form) {
			that.form = document.getElementById(that.id + "_table__input-form");
			addSubmitEvent(that.form);
			
		} 
		if (!element.id.match(matchReg)) return
		//if (Object.keys(currentlyEditing).length > 0) return

		// var vObj = getValueObjectFromId(element.id);
		submit();
		currentlyEditing.element = element;
		currentlyEditing.path = getValueObjectFromId(element.id);
		replaceInputPosition(element);
		//should put pub-sub or observer pattern here
		that.input.style.visibility = "visible";
		that.input.value = element.innerHTML;
		
		//webMI.data.write(inputVar, currentlyEditing.path.row[currentlyEditing.path.domain])
	}

	function getValueObjectFromId(id) {
		if (!id.match(matchReg)) return

		var data = id.replace(/.*_/g, "");
		var domainId = data.replace(/.*-/, "");
		var rowId = data.replace(/-.*/, "");
		// get reference from event.target.id 
		// row_domain -> row-index_object.keys()-index
		var value = that.data.rows[rowId][Object.keys(that.data.rows[rowId])[domainId]];
		var row = that.data.rows[rowId];
		var domain = [Object.keys(that.data.rows[rowId])[domainId]]

		return { row: row, domain: domain }
	}
}

Table.prototype.addRow = function(rowValues, rowObj) {
	// *** ADD ROW TO DATA ***
	//var currentRow = Object.keys(that.data.rows[i]);
	var rowElement = "";
	var rowData = {};
	var that = this;	
	
	for (var j = 0; j < that.data.columns.length; j++) {
		//rowElement += "<td id=td_" + that.data.rows.length + "-" + j + ">" + "0" + "</td>";
		rowData[that.data.columns[j].field] = "";
	}
	
	that.data.rows.push(rowData);
	that.render(that.data.rows);
}

Table.prototype.render = function (rowsData) {
	var rows = "";
	var that = this;
	//var tableElement = document.querySelector("[data-table='body']");
	var tableElement = document.getElementById(that.id + "_table__rows");
	
	this.data.rows = rowsData;
	
	function deleteButton(id) {
		var reversedCross = "<span class=reversed-cross> <span class=reversed-cross__first-line></span> <span class=reversed-cross__second-line></span> </span>"
		var orangeRound = "<span class=orange-round>" + reversedCross +  "</span>"
		var button = "<button id=" + that.id + "_button_" + id + "_delete" + " class='table__delete-button table__button'>" + orangeRound + "</button>"
	
		return "<td id=" + that.id + "_id_" + id + "_delete class=table__row-domain >" + button + "</td>"
	}

	function addRow(rowObj, index) {
		// *** RETURN ROW ***
		var rowValues = Object.keys(rowObj);
		var row = "";
		for (var j = 0; j < rowValues.length; j++) {
			row += "<td id=" + that.id + "_td_" + index + "-" + j + " class=" + that.classes.rowDomain + ">" + rowObj[rowValues[j]] + "</td>";
		}
	
		return row
	}
	function button(deleteButton) {
		return that.type == "plan" ? "" : deleteButton
	}	
	
	for (var i = 0; i < this.data.rows.length; i++) {
		rows += "<tr id=" + that.id + "_tr_" + i + " class=" + this.classes.row + ">" + addRow(that.data.rows[i], i) + button(deleteButton(i)) + "</tr>";
	}
	
	tableElement.innerHTML = ""
	tableElement.insertAdjacentHTML("beforeend",  rows);
	
	//temp
	//that.data.timestamp = new Date();
	//tableToSend = that.data;
}

Table.prototype.init = function() {
	// *** RENDER THE TABLE ***
	var columns = "";
	//var rows = "";
	var that = this;
	//var tableElement = document.querySelector("[data-table='heading']");
	var tableElement = document.getElementById(that.id + "_table__heading");
	var form = (function() {
		//var buttonAddRow = 	"<button id=buttonAddRow class='table__add-button table__button'>Add row</button>";
		var inputForm = "<form id=" + that.id + "_table__input-form><input id=" + that.id + "_table__input class=table__input /></form>";
		//var buttonSubmit = "<button id=button class='table__submit-button table__button'>Submit</button>";
	
		return inputForm
	})();
	
	for (var i = 0; i < this.data.columns.length; i++) {
		columns += "<th id=th_" + i + " class=" + this.classes.headerDomain + ">" + this.data.columns[i].name + "</th>";
	}
	
	if (that.type !== "plan") columns += "<th id=th_" + i + " class=" + this.classes.headerDomain + ">" + "Удалить строку" + "</th>"	
	
	// temporary decision
	//if (this.form) this.form = null;
	tableElement.insertAdjacentHTML("beforeend",  "<caption class=table__caption><div class=table__caption-container>" + form + "</div></caption>");
	tableElement.insertAdjacentHTML("beforeend", "<tr class=" + this.classes.header + ">" + columns + "</tr>");
	
	this.input = document.getElementById(that.id + "_table__input");
	this.input.style.visibility = "hidden";
	
	if (that.type != "plan") {
		var buttonAddRow = document.getElementById(that.id + "_buttonAddRow");
		buttonAddRow.onclick = function() {
			that.addRow();
		}
		this.input.style.position = "fixed";
		this.input.style.zIndex = 99;
		this.input.addEventListener('keydown', function(f) {
		if (f.srcElement.getAttribute('readonly') != 'true') {
			if (f.key == 'Backspace') {
				f.srcElement.value = f.srcElement.value.slice(0,-1);
				//console.log("backspace")
			}
			if (f.key == 'Enter') {
				!document.getElementById(that.id + "_table__input-form").dispatchEvent(evt);
				//console.log("212");
				//!f.srcElement.dispatchEvent(evt);
			}
		}
			/*	
			} else if (!isNaN(f.key)) {
			}
			else {
				f.srcElement.value=f.srcElement.value.slice(0,-1)
			}}
			else{}
			*/
			
		})
	}
}