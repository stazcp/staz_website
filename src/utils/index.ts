import DOMPurify from 'dompurify'

export const cleanHTML = (html: string) => html.replace(/```html|```|【0†source】/g, '').trim()

export const createMarkup = (html: string) => ({
  __html: DOMPurify.sanitize(html),
})

export * from './types'
export * from './api'
export * from './constants'
export * from './styles'
export * from './breakpoints'
