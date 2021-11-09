try{
    var x = myframe.document.querySelectorAll('textarea');
    var i = 0;
    for (i = 0; i < x.length; i++){
      x[i].value="NIL";
    }

    x = myframe.document.querySelectorAll('font');
    for(var i=0; i<x.length; i++) {
    	if(x[i].innerHTML == "Excellent" || x[i].innerHTML == "Just Right" || x[i].innerHTML == "Heavy") {
      	x[i].previousSibling.click();
      }
    }
  }catch(err){
    console.log(err);
  }
