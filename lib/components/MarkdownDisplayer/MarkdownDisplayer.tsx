import React from 'react'
import { useTheme } from '@apisuite/fe-base'
import Editor, { theme } from 'rich-markdown-editor'

import { MarkdownDisplayerProps } from './types'

export const MarkdownDisplayer: React.FC<MarkdownDisplayerProps> = ({
  content,
}) => {
  const { palette, typography } = useTheme()

  /* For us to 'brand' our markdown, we need to completely override
  the markdown displayer component's (i.e., 'Editor') in-built theme.
  
  Please refer to 'https://github.com/outline/rich-markdown-editor' for more details. */
  const markdownDisplayerTheming = {
    ...theme,
    code: palette.secondary.contrastText,
    codeAttr: null,
    codeBackground: palette.secondary.main,
    codeBorder: null,
    codeComment: null,
    codeEntity: null,
    codeFunction: null,
    codeImportant: null,
    codeInserted: null,
    codeKeyword: null,
    codeNumber: null,
    codePlaceholder: null,
    codeProperty: null,
    codePunctuation: null,
    codeSelector: null,
    codeStatement: null,
    codeString: palette.primary.main,
    codeTag: palette.primary.main,
    divider: palette.grey[200],
    fontFamily: typography.fontFamily,
    fontFamilyMono: typography.fontFamily,
    link: palette.info.main,
    text: palette.text.primary,
  }

  return (
    <Editor defaultValue={content} readOnly theme={markdownDisplayerTheming} />
  )
}
