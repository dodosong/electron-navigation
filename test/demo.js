const {
    app,
    BrowserWindow
} = require('electron');

let demoLight;
let demoDark;
let demoCustom;

app.on('ready', () => {

    demoLight = new BrowserWindow()
    demoLight.loadURL(`file:///${__dirname}/demo-light.html`)
    demoLight.on('close', () => { demoLight = null })

    demoDark = new BrowserWindow()    
    demoDark.loadURL(`file:///${__dirname}/demo-dark.html`)
    demoDark.on('close', () => { demoDark = null })    

});