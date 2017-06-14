console.info('js is up..');

var Docummentation = {

	cacheDOM: function(){

		this.button = document.querySelector('button');
		this.body = document.querySelector('body');
		this.documentation = document.querySelector('.documentation-box');
		this.image = document.querySelector('img');
		this.nextButton = document.querySelector('.next');

	},

	init : function(){

		this.cacheDOM();
		console.log(this.button);
		
		this.button.addEventListener('click',this.openDoc.bind(this));
		this.nextButton.addEventListener('click',this.toggleSlide.bind(this));
	},

	openDoc : function(){
		console.log('open doc');
		console.log(this.body);
		this.body.classList.add('overlay');
		this.documentation.classList.add('open');
		document.querySelector('ul').children[0].style.display = 'block';
		this.button.disabled = true;

	},

	toggleSlide : function(direction){
		var elements = document.querySelectorAll('.hideable');
		var visibleID = this.getVisible(elements);
		console.log(elements);

		elements[visibleID].style.display = 'none';
		if(!direction){
			var makeVisible = this.prev(visibleID, elements.length);
		} else {
			var makeVisible = this.next(visibleID,elements.length);
		}
		elements[makeVisible].style.display = "block";

	},
	getVisible: function(elements){
		var visibleID = -1;
		for(var i=0;i<elements.length;i++){
			if(elements[i].style.display=='block'){
				visibleID = i;
			}
		}

		return visibleID;
	},

	prev: function(num,arrayLength){
		if(num == 0){
			return arrayLength-1;
		} else {
			return num-1;
		}
	},
	next: function(num,arrayLength){
		if(num == arrayLength-1) {
			this.documentation.classList.remove('open');
			this.button.disabled = false;
			return;
		} else {
			return num+1;
		}	

	}
	


}

Docummentation.init();

