'use strict';

import { log, adInstance, template } from './creativeAPI';

const { product, settings } = adInstance;

export const logVideoEvent = (eventName, videoInstance) => {
    const { currentTime, duration } = videoInstance;

    log.videoEvent({
        // TODO
    });
};

export const logClickThrough = () => {
    log.cpeClickThrough({
        // TODO
    });
};
