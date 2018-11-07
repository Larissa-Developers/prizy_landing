import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssSimpleVars from 'postcss-simple-vars';

module.exports = () => ({
    plugins: [
      postcssImport(),
      postcssMixins(),
      postcssNested(),
      postcssSimpleVars()
    ],
  })