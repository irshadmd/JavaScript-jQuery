const counter=(function(){
    let count=0;
    return {
        increment:function(){ count++ },
        display:function(){ console.log(count) },
    }
})();
counter.display();
counter.increment();
counter.display();
