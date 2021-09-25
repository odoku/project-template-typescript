import main from '../src/index'

describe('Test main', () => {
  test('OK', () => {
    const result = main()
    expect(result).toBeTruthy()
  })
})
