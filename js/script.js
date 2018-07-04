
 var btnsearch = document.querySelector(".modal-btn-search");
 var modalform = document.querySelector(".modal");
 var arrival = modalform.querySelector("[name=date-arrival]")
 var form = modalform.querySelector(".search-form")
 var departure = modalform.querySelector("[name=date-departure]")
 var adults = modalform.querySelector("[name=adults]")
 var children = modalform.querySelector("[name=children]")

btnsearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalform.classList.toggle("modal-show");
	form.classList.toggle("form-show");
	arrival.focus();
	
});

form.addEventListener("submit", function (evt){
	
	if (!arrival.value || !departure.value || !adults.value || !children.value) 
		{evt.preventDefault();
		alert("Пожалуйста, заполните все поля");
	}	else {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
	}
})




