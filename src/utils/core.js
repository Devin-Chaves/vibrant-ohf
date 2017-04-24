'use strict';

import { channel, utils } from './creativeAPI';
import { CHANNEL_OPEN, CHANNEL_CLOSE } from './constants';

/**
 * Registers when the application loads
 * Call from main
 * @function registerOpen
 */
export const registerOpen = () => utils.once(() => {
    channel.fire(CHANNEL_OPEN);
});

/**
 * Registers when the application should close
 * Call from close button
 */
export const registerClose = () => {
    channel.fire(CHANNEL_CLOSE);
};
