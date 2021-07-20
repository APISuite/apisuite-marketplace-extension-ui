import React from 'react'
import { useTheme } from '@apisuite/fe-base'
import Editor from 'rich-markdown-editor'

import { MarkdownDisplayerProps } from './types'

export const MarkdownDisplayer: React.FC<MarkdownDisplayerProps> = ({
  content,
}) => {
  const { palette, typography } = useTheme()

  /* For us to 'brand' our markdown, we need to completely override
  the markdown displayer component's (i.e., 'Editor') in-built theme
  (even if we only mean to override some of its properties).
  
  Please refer to 'https://github.com/outline/rich-markdown-editor' for more details. */
  const markdownDisplayerTheming = {
    almostBlack: null,
    almostWhite: null,
    background: null,
    black: null,
    black10: null,
    blockToolbarBackground: null,
    blockToolbarDivider: null,
    blockToolbarHoverBackground: null,
    blockToolbarIcon: null,
    blockToolbarIconSelected: null,
    blockToolbarItem: null,
    blockToolbarText: null,
    blockToolbarTextSelected: null,
    blockToolbarTrigger: null,
    blockToolbarTriggerIcon: null,
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
    cursor: null,
    divider: palette.grey[200],
    fontFamily: typography.fontFamily,
    fontFamilyMono: typography.fontFamily,
    fontWeight: null,
    grey: null,
    greyDark: null,
    greyLight: null,
    greyMid: null,
    horizontalRule: null,
    imageErrorBackground: null,
    lightBlack: null,
    link: palette.info.main,
    noticeInfoBackground: null,
    noticeInfoText: null,
    noticeTipBackground: null,
    noticeTipText: null,
    noticeWarningBackground: null,
    noticeWarningText: null,
    placeholder: null,
    primary: null,
    quote: null,
    scrollbarBackground: null,
    scrollbarThumb: null,
    selected: null,
    tableDivider: null,
    tableSelected: null,
    tableSelectedBackground: null,
    text: palette.text.primary,
    textHighlight: null,
    textHighlightForeground: null,
    textLight: null,
    textSecondary: null,
    toolbarBackground: null,
    toolbarHoverBackground: null,
    toolbarInput: null,
    toolbarItem: null,
    white: null,
    white10: null,
    zIndex: null,
  }

  return (
    <Editor defaultValue={content} readOnly theme={markdownDisplayerTheming} />
  )
}
