import { cn } from '../utils'

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('foo', 'bar')
    expect(result).toBe('foo bar')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const result = cn('base', isActive && 'active', 'always')
    expect(result).toBe('base active always')
  })

  it('should merge Tailwind classes and resolve conflicts', () => {
    const result = cn('px-2', 'px-4')
    expect(result).toBe('px-4') // tailwind-merge should keep the last one
  })

  it('should handle arrays', () => {
    const result = cn(['foo', 'bar'], 'baz')
    expect(result).toBe('foo bar baz')
  })

  it('should handle undefined and null', () => {
    const result = cn('foo', undefined, null, 'bar')
    expect(result).toBe('foo bar')
  })

  it('should handle objects', () => {
    const result = cn({ foo: true, bar: false, baz: true })
    expect(result).toBe('foo baz')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })
})


