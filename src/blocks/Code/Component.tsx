import React from 'react'

import { Code } from './Component.client'
export type CodeBlockProps = {
  code: string
  language?: string
  blockType: 'code'
}

type Props = CodeBlockProps & {
  className?: string
  theme?: 'light' | 'dark'
}

export const CodeBlock: React.FC<Props> = ({ className, code, language, theme }) => {
  return (
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <Code code={code} theme={theme} language={language} />
    </div>
  )
}
