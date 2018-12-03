import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssSimpleVars from 'postcss-simple-vars';

module.exports = () => ({
    plugins: [
      postcssPresetEnv(),
      postcssImport(),
      postcssMixins(),
      postcssNested(),
      postcssSimpleVars()
    ],
  })