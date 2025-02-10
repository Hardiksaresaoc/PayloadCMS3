import { Block } from 'payload'

import {
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import { Code } from '../Code/config'

export type TechnicalGuideType = {
  blockType?: 'technical_guide'
  blockName?: string
  mainTitle: any
  smallTitle: any
  theme: any
  description: any
  BoxData: any
  scrollerId?: any
}

export const TechnicalGuide: Block = {
  slug: 'technical_guide',
  imageURL: 'https://d1rdz15x9x7c4f.cloudfront.net/assets/payload-images/landingpage-banner.png',
  labels: {
    singular: 'technical guide',
    plural: 'technical guides',
  },
  fields: [
    {
      type: 'radio',
      name: 'showInScroller',
      label: 'Display block in scroller',
      defaultValue: 'notShow',
      options: [
        {
          label: 'Not Show',
          value: 'notShow',
        },
        {
          label: 'Show',
          value: 'Show',
        },
      ],
    },
    {
      type: 'text',
      name: 'scrollerTitle',
      label: 'Enter Scroller Title',
    },
    {
      type: 'radio',
      name: 'theme',
      label: 'Select Theme',
      defaultValue: 'dark',
      options: [
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Light',
          value: 'light',
        },
      ],
    },
    {
      name: 'smallTitle',
      type: 'text',
      label: 'Add small Title',
      required: true,
    },
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Add Main Title',
      required: true,
    },
    {
      name: 'BoxData',
      type: 'array',
      label: 'Add Card data',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Add Title',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',

          editor: lexicalEditor({
            features: ({ rootFeatures, defaultFeatures }) => {
              return [
                ...rootFeatures,
                ...defaultFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
                IndentFeature(),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                InlineCodeFeature(),
                LinkFeature(),
                OrderedListFeature(),
                UnorderedListFeature(),
                EXPERIMENTAL_TableFeature(),
                BlocksFeature({ blocks: [Code] }),
              ]
            },
          }),
          label: false,
          required: true,
        },
      ],
    },
  ],
}

export default TechnicalGuide
