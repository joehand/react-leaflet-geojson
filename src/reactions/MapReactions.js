'use strict';

import State from '../state/AppState';
import api from '../api/api';
import { getAllBounds, getBoundsForFeature } from '../components/utils';

import { sample } from 'turf';

State
    .on('map:setBounds', function(){
        const layers = State.get().dataLayers;
        const bounds = getAllBounds(layers);
        State.get().set({
            mapProps: {
                bounds: bounds
            }
        });
    })
;

State
    .on('clicked:feature', function(feature){
        console.log(feature)
        State.get().mapProps.set({
            bounds: getBoundsForFeature(feature)
        });
        let name = '';
        if ('name' in feature.properties) {
            name = feature.properties.name;
        }
        else if ('title' in feature.properties) {
            name = feature.properties.title;
        }
        else {
            const obj = feature.properties;
            name = obj[Object.keys(obj)[0]];
        }

        let route = feature.id || name;

        State.get().set({
            route : route,
            pageTitle : name,
            currentFeature : feature
        });
    })
;