var ModuleController=function(){
    
    var Expense=function(id,descrip,value){
        this.id=id;
        this.descrip=descrip;
        this.value=value;
    }
    
    var Income=function(id,descrip,value){
        this.id=id;
        this.descrip=descrip;
        this.value=value;
    }
    
    var totals={
        exp:0,
        inc:0
    };
    
    var allItems={
      exp:[],
     inc:[]
    };
    
    return{
        addNewItems(type,val,desciption){
            var newItem,id;
            if(allItems[type].length>0){
                   id= allItem[type][allItems.type.length-1]+1;
                   }else{
                   id=1;
                   }
            if(type=='inc'){
                newItem=new Income(id,desciption,val);
}else if(type=='exp'){
          newItem=new Expense(id,desciption,val);
}
    // allItems[type].push(newItem);
    return newItem;
    }
    }
    
}();




var UIController=function(){

    //Creating Private Variable
    var IDS={
addButton:'.btn',
comboBox:'.combo',        
addValue:'.value',
addDescription:'.description'       
    }
    
    
    var inputFields={
        amountValue: document.querySelector(IDS.addValue),
        description:document.querySelector(IDS.addDescription),
        comboBox:document.querySelector(IDS.comboBox)
}
    
    return{
        //Making private as public by returning it
   getIds:function(){return IDS},
   getInputValues:function(){return inputFields},
        createNewItem:function(item){
            var mainComponent=document.getElementById("ulinc");
            var list=document.createElement("li");
           // var closeSpan=document.createElement("span");
            var valueNode=document.createTextNode(item.descrip);
            list.appendChild(valueNode);
            mainComponent.appendChild(list);
        }
    };
    
}();



var controller=function(mdlCtrl,uiCtrl){
    
    var domIds=uiCtrl.getIds();
    var inputFieldValues=uiCtrl.getInputValues();
    
    document.querySelector(domIds.addButton).addEventListener('click',function(){
      addToGrid();
    });
    
    document.addEventListener('keypress',function(event){
        if(event.keyCode==13){
            addToGrid();
           }
    });
    
    
    function addToGrid(){
        var newItem;
        newItem=mdlCtrl.addNewItems(inputFieldValues.comboBox.value,inputFieldValues.description.value,inputFieldValues.amountValue.value);
        console.log(newItem);
        uiCtrl.createNewItem(newItem);     
    }
    
    
}(ModuleController,UIController);