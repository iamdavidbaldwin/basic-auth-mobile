/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import { WelcomeScreen } from '../WelcomeScreen'

describe('WelcomeScreen', () => {
  it('renders user email and welcome message', () => {
    const mockLogout = vi.fn()
    const testEmail = 'test@example.com'
    
    const { container } = render(<WelcomeScreen userEmail={testEmail} onLogout={mockLogout} />)
    
    // Check if user email is displayed
    expect(container.textContent).toContain(testEmail)
    
    // Check if welcome message is shown
    expect(container.textContent).toContain('Welcome!')
    
    // Check if dashboard title exists
    expect(container.textContent).toContain('Dashboard')
  })
})