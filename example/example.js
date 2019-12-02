import ColonelKurtz from '../src/Colonel'
import MediumBlock from '../addons/medium'
import HtmlEmbedBlock from '../addons/html-embed'
import ImageBlock from '../addons/image'
import YouTubeBlock from '../addons/youtube'
import SectionBlock from './blockTypes/Section'

const blockTypes = [
  {
    id: 'medium',
    label: 'Medium Editor',
    component: MediumBlock
  },
  {
    id: 'embed',
    label: 'Embed',
    component: HtmlEmbedBlock
  },
  {
    id: 'child-text',
    label: 'Child Text',
    component: MediumBlock
  },
  {
    id: 'image',
    label: 'Image',
    component: ImageBlock
  }
]

let editor = new ColonelKurtz({
  el: document.getElementById('app'),
  blockTypes: blockTypes,
  maxChildren: 5,
  maxDepth: 3
})

editor.start()
