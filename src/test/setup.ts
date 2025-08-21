import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Make vitest globals available
globalThis.vi = vi
globalThis.expect = expect

afterEach(() => {
  cleanup()
})