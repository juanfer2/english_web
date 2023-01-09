module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true
    // vitest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "plugin:prettier/recommended"
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser', // should be already existing
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'prettier',
    'vitest'
  ],
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true
    // vitest: true,
    // jest: true
  },
  settings: {
    react: {
      version: "detect"
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    'max-len': ['warn', { code: 100 }],
    '@typescript-eslint/dot-notation': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-unneeded-ternary": "off"
  }
}
