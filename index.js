'use strict';

module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-switch-code',
        AtRule: {
            switch: atRule => {
                if ( opts.switch && atRule.params === opts.switch ) {
                    atRule.nodes.forEach(node => {
                        atRule.parent.insertAfter(atRule, node)
                    })
                }

                atRule.remove()
            }
        }
    }
}

module.exports.postcss = true