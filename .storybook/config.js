import { configure } from '@storybook/react'
import './storybook.css'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.demo\.js$/), module)
