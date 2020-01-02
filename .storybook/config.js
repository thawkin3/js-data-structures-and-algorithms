import { configure } from '@storybook/react'
import './storybook.css'

// import all files ending in *.demo.js (excluding node modules)
configure(
  require.context('../', true, /^((?!node_modules).)*\.demo\.js$/),
  module
)
