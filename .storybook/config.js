import { configure } from '@storybook/react'
import './storybook.css'

// Helper method for extracting stories
function importAll(requireContextResult, allStories) {
  requireContextResult.keys().forEach(key => {
    if ('default' in requireContextResult(key)) {
      allStories.push(requireContextResult(key))
    }
  })
}

// import all files from 'src' and 'docs' ending in *.demo.js
// NOTE: I want the docs to come first so that they can serve
// as the landing page.
configure(() => {
  const allStories = []
  importAll(require.context('../docs/', true, /^.*\.demo\.js$/), allStories)
  importAll(require.context('../src/', true, /^.*\.demo\.js$/), allStories)
  return allStories
}, module)
