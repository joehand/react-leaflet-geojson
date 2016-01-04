'use strict';

import State from '../state/AppState';
import api from '../api/api';
import { getAllBounds, getBoundsForFeature } from '../components/utils';

import { sample } from 'turf';

State
    .on('data:fetch', function(){
        const urls = State.get().dataUrls;
        urls.map(function(url){
            api.getDataUrl(url, function(data) {
                State.get().dataLayers.set(url, data);
                State.trigger('app:ready'); //TODO take this out
            });
        });
    })
;

