'use strict';

class Airport{

    constructor(){
        this._hanger = []
    };

    planes(){
        return this._hanger;
    };

    clearForLanding(plane){
        this._hanger.push(plane);
    };
};