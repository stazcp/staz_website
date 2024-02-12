import { cleanHTML } from '../utils'

describe('cleanHTML', () => {
  it('should ```html and ``` from HTML and trim whitespace', () => {
    const html = '```html <h1> TITLE </h1> ```'
    const expectedCleanedHtml = '<h1> TITLE </h1>'

    const result = cleanHTML(html)

    expect(result).toEqual(expectedCleanedHtml)
  })

  it('should not remove code blocks if not surrounded by triple backticks', () => {
    const html = 'Some text <script>alert("Hello, World!")</script> More text'
    const expectedCleanedHtml = 'Some text <script>alert("Hello, World!")</script> More text'

    const result = cleanHTML(html)

    expect(result).toEqual(expectedCleanedHtml)
  })

  it('should remove 【0†source】if it exists', () => {
    const html = '【0†source】'
    const expectedCleanedHtml = ''

    const result = cleanHTML(html)

    expect(result).toEqual(expectedCleanedHtml)
  })
})
