function s(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{postcssPlugin:"postcss-switch",AtRule:{switch:function(e){if(s.switch&&e.params===s.switch){var t=e.raws.before.replace(/[\S\n]/g,"");e.nodes.forEach((function(s){s.raws.before="\n"+t,e.parent.append(s)}))}e.remove()}}}}s.postcss=!0;export{s as default};
//# sourceMappingURL=index.mjs.map
