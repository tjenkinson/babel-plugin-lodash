import _ from 'lodash';
import mapping from './mapping';

/*----------------------------------------------------------------------------*/

function resolvePath(name, base='') {
  if (!mapping.module.get(base).has(name)) {
    base = (base || mapping.module.has('fp'))
      ? ''
      : mapping.module.findKey(set => set.has(name));

    if (!base) {
      throw new Error([
        `Lodash method ${ name } is not a known module.`,
        'Please report bugs to https://github.com/lodash/babel-plugin-lodash/issues.'
      ].join('\n'));
    }
  }
  return mapping.id + (base ? '/' + base : '') + '/' + name;
}

function importModule(name, file, base='', importName=name) {
  return file.addImport(resolvePath(name, base), 'default', importName);
}

export default _.memoize(importModule, function(name, file, base) {
  return (base ? base + '/' : '') + name;
});
