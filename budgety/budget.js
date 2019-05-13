var ModuleController=function(){
    
}();




var UIController=function(){
    
    var IDS={
addButton:'btn',
addValue:'value',
addDescription:'description';       
    }
    
    return function(){
   getIds:function(){
            return IDS;
        }
    }
    
}();



var controller=function(mdlCtrl,uiCtrl){
    
console.log(uiCtrl.getIds());    
    
    
}(ModuleController,UIController);