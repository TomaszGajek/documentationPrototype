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
		document.querySelector('.documentation-box').style.display = 'block';
		this.nextButton.innerHTML = 'next';
		this.body.classList.add('overlay');
		this.documentation.classList.add('open');
		document.querySelector('ul').children[0].style.display = 'block';
		this.button.disabled = true;

	},

	toggleSlide : function(direction){
		var elements = document.querySelectorAll('.hideable');
		var visibleID = this.getVisible(elements);

		elements[visibleID].style.display = 'none';
		if(!direction){
			var makeVisible = this.prev(visibleID, elements);
		} else {
			var makeVisible = this.next(visibleID,elements);
		}
		elements[makeVisible].style.display = "block";



	},
	getVisible: function(elements){
		var visibleID = -1;
		for(var i=0;i<elements.length;i++){
			if(elements[i].style.display=='block'){
				visibleID = i;	
				if(visibleID == elements.length-2) {
					this.nextButton.innerHTML = 'Finish';
				}

			}

		}

		return visibleID;
	},

	prev: function(num,arr){
		if(num == 0){
			return arr.length-1;
		} else {
			return num-1;
		}
	},
	next: function(num,arr){

		if(num == arr.length-1) {
			this.documentation.classList.remove('open');
			this.button.disabled = false;
			document.querySelector('.documentation-box').style.display = 'none';
			return 0;
			
		} else {
			return num+1;
		}

	}
	


}

Docummentation.init();

