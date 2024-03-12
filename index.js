'use strict';

module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-switch',
    AtRule: {
      switch: atRule => {
        if ( opts.switch && atRule.params === opts.switch ) {
          const indent = atRule.raws.before.replace(/[\S\n]/g, '');
          atRule.nodes.forEach(node => {
            node.raws.before = '\n' + indent;

            atRule.parent.append(node);
          });
        }

        atRule.remove();
      }
    }
  };
};

module.exports.postcss = true;
