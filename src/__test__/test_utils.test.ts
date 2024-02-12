import { createMarkup } from '../utils'

describe('createMarkup', () => {
  it('should sanitize and return the HTML as __html property', () => {
    const html = '<script>alert("Hello, World!")</script>'
    const expectedCleanedHtml = 'alert("Hello, World!")'

    const result = createMarkup(html)

    expect(result.__html).toEqual(expectedCleanedHtml)
  })

  it('should remove code blocks from the HTML', () => {
    const html = 'Some text ```html <script>alert("Hello, World!")</script> ``` More text'
    const expectedCleanedHtml = 'Some text  More text'

    const result = createMarkup(html)

    expect(result.__html).toEqual(expectedCleanedHtml)
  })
})
