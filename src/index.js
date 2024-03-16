/**
 * @returns {import('postcss').Plugin}
 */
export default function postcssSwitch(opts = {}) {
  return {
    postcssPlugin: 'postcss-switch',
    AtRule: {
      switch: (atRule) => {
        if (opts.switch && atRule.params === opts.switch) {
          const indent = atRule.raws.before.replace(/[\S\n]/g, '');
          atRule.nodes.forEach((node) => {
            node.raws.before = '\n' + indent;

            atRule.parent.append(node);
          });
        }

        atRule.remove();
      }
    }
  };
}

postcssSwitch.postcss = true;
