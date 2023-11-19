/**
 * @function setClipboardData
 * @description Get clipboard data from event or navigator
 * @param {ClipboardEvent} e Clipboard event
 * @returns {Promise<string>} The clipboard data
 * @example
 * import { setClipboardData } from 'src/lib/clipboard';
 *
 * setClipboardData(e).then((data) => {
 *  console.log(data);
 * });
 */
export function getClipboardData(e: ClipboardEvent): Promise<string> {
  if (navigator.clipboard) {
    return navigator.clipboard.readText().then(
      (text) => text,
      () => ''
    );
  }

  if (e.clipboardData) {
    return Promise.resolve(e.clipboardData.getData('text'));
  }

  return Promise.resolve('');
}
