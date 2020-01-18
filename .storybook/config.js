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
// It's actually kind of ridiculous trying to get the stories to
// be shown in the Storybook table of contents in the order you want,
// so this weird function grabs all the stories and then reverses
// them so that the intro doc comes first, since I want that to act
// as the landing page.
configure(() => {
  const allStories = []
  importAll(require.context('../docs/', true, /^.*\.demo\.js$/), allStories)
  importAll(require.context('../src/', true, /^.*\.demo\.js$/), allStories)
  return allStories.reverse()
}, module)
