describe('sanitize()', () => {

  let sanitize

  beforeEach(angular.mock.module('io.cfp.front.services.util'))

  beforeEach(inject((_sanitize_) => {
    sanitize = _sanitize_
  }))

  it('should sanitize HTML in object properties', () => {

    const object = {foo: '<img src="fake" onerror="alert(\'Pawned!\')">'}

    expect(sanitize(object, ['foo'])).toEqual({foo: '<img src="fake">'})
  })

  it('should sanitize only existing String properties', () => {

    const object = {
      foo: `<img src="fake" onerror="alert(\'Pawned!\')">
<p></p>`,
      bar: 666
    }

    expect(sanitize(object, ['foo', 'bar', 'baz'])).toEqual({
      foo: `<img src="fake">
<p></p>`,
      bar: 666
    })
  })
})
