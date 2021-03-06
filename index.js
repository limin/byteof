/**
 * @file
 * 
 * @copyright 2018 {@link https://limin.github.io Min Li}
 * 
 * @license Licensed under {@link https://www.apache.org/licenses/LICENSE-2.0.html Apache License 2.0}
 * 
 */


const BYTES=require('./BYTES')

/**
 * Calculate the approximate memory usage of javascript object in bytes.
 * 
 * @param {*} object - The object to be calcuated memory usage in bytes
 * 
 * @returns {number} The memory usage in bytes
 * 
 * @example
 * // returns 8
 * byteof(2)
 * 
 * // returns 8
 * byteof(2.0)
 * 
 * // return 4
 * byteof(false)
 * 
 * // return 2*3=6
 * byteof("abc")
 * 
 * // return 32
 * const object={
 *  "n":1,
 *  "b":true,
 *  "s":"1234567890"
 * };
 * 
 * byteof(object)      
 */
function byteof(object){
  const objects = [object]
  let bytes    = 0;
  for (let index = 0; index < objects.length; index ++){
    const object=objects[index]
    switch (typeof object){
      case 'boolean': 
        bytes += BYTES.BOOLEAN
        break
      case 'number': 
        bytes += BYTES.NUMBER
        break
      case 'string': 
        bytes += BYTES.CHAR * object.length
        break
      case 'object':
        //ignore the key's memory usage
        for (let key in object){
          let processed = false
          for (let search = 0; search < objects.length; search ++){
            if (objects[search] === object[key]){
              processed = true
              break
            }
          }
          if (!processed) {
            objects.push(object[key])
          }
        }
    }
  }
  return bytes
}

module.exports=byteof