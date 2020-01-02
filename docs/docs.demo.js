import { doc } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import WELCOME from './WELCOME.md'

storiesOf('Introduction|Docs', module).add('Welcome', doc(WELCOME))
