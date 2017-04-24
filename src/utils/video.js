'use strict';

import { videoplayer } from './creativeAPI';

const player = videoplayer(window, document);

/**
 * Builds a video instance
 * Takes standard options and callback which returns the video instance
 *
 * @function buildVideo
 * @param {Object} options
 * @param {Function} callback
 * @return videoplayer instance
 */
export const buildVideo = (options, callback) => player.load(options, null, callback);
