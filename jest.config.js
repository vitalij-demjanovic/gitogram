const { defaults } = require('jest-config')
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'json', 'vue'],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    ".*\\.(js)$": "babel-jest"
  }
}
