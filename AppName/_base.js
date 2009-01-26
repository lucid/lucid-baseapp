dojo.provide("desktop.apps.AppName._base");
//add dojo.require()s here
dojo.requireLocalization("desktop.apps.AppName", "main");

dojo.declare("desktop.apps.AppName", desktop.apps._App, {
    init: function(args){
        //  init code goes here
        var nls = dojo.i18n.getLocalization("desktop.apps.AppName", "main");
        this.windows = [];
        var win = new desktop.widget.Window({
            title: nls.title,
            width: "500px",
            height: "400px",
            main: true
        });
        this.windows.push(win);
        
        // draw UI here
        
        win.show();
    },
    kill: function(){
        //  cleanup code goes here
        dojo.forEach(this.windows, function(win){
            if(!win.closed)
                win.close();
        }, this);
    }
});
