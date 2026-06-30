import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import { reactRefresh } from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

const { configs: _typescriptConfigs, ...typescriptPlugin } = tseslint.plugin
const { configs: _reactHooksConfigs, ...reactHooksPlugin } = reactHooks
const reactRefreshViteConfig = reactRefresh.configs.vite()

export default [
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'react-hooks': reactHooksPlugin,
      ...reactRefreshViteConfig.plugins,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[1].rules,
      ...tseslint.configs.recommended[2].rules,
      ...reactHooks.configs.flat['recommended-latest'].rules,
      ...reactRefreshViteConfig.rules,
    },
  },
]
