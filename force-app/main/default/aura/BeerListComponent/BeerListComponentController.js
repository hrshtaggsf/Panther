({
    showinfo : function(component, event, helper) {
        var eventSource = event.getSource();
        var beerObj = eventSource.get("v.name");
        console.log("method " + beerObj);
        component.set('v.beerId', beerObj);
        console.log("method ends" + 'v.beerId');
    }
})