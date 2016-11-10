'use strict';
var GulpConfig = (function () {

    function GulpConfig() {
        this.tsOutputPath = './lib';
        this.allTypeScript = [
            './src/**/*.ts!(*.d.ts)',
            './demo-app/**/*.ts!(*.d.ts)'];
        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*index.d.ts';
        this.allFiles = [this.allTypeScript];
        this.tsConfig = {
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "target": "es6",
            "module": "commonjs",
            "moduleResolution": "node",
            "removeComments": true,
            "sourceMap": true,
            "outDir": "../lib",
            "declaration": true
        };
    }
    return GulpConfig;
})();
module.exports = GulpConfig;