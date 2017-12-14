import React from 'react';
import feather from 'feather-icons';

/**
 * @function featherUtil
 * @param {Object} - with name, width and height properties
 * @description Utility function to create feather icons
 * by passing an object as the argument with name of icon, width
 * and height as properties.
 */

export default function featherUtil({ name, width, height }) {
  const htmlString = feather.icons[name].toSvg({ width, height });
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
