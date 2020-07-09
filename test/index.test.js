import unique from '../src';

describe('Unique Action Types', () => {
  it('should throw an error if types are duplicating', () => {
    expect(() => {
      unique('UPDATE_PARENT')
      unique('UPDATE_PARENT')
    }).toThrow('The \'UPDATE_PARENT\' action type already exists.')
  })
  it('should not throw an error if types are different', () => {
    expect(() => {
      unique('PARENT')
      unique('CHILD')
    }).not.toThrow()
  })
})
