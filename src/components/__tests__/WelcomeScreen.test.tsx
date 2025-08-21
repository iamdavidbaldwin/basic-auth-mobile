import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { WelcomeScreen } from '../WelcomeScreen'

describe('WelcomeScreen', () => {
  const mockOnLogout = vi.fn()
  const testEmail = 'test@example.com'

  beforeEach(() => {
    mockOnLogout.mockClear()
  })

  it('renders welcome screen with user email', () => {
    render(<WelcomeScreen userEmail={testEmail} onLogout={mockOnLogout} />)
    
    expect(screen.getByText('Welcome!')).toBeInTheDocument()
    expect(screen.getByText(testEmail)).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Quick Actions')).toBeInTheDocument()
  })

  it('displays all dashboard elements', () => {
    render(<WelcomeScreen userEmail={testEmail} onLogout={mockOnLogout} />)
    
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText("You're all set!")).toBeInTheDocument()
    expect(screen.getByText('This is your mobile app dashboard. Start building amazing features!')).toBeInTheDocument()
  })

  it('displays all quick action buttons', () => {
    render(<WelcomeScreen userEmail={testEmail} onLogout={mockOnLogout} />)
    
    expect(screen.getByText('View Profile')).toBeInTheDocument()
    expect(screen.getByText('Account Settings')).toBeInTheDocument()
    expect(screen.getByText('Help & Support')).toBeInTheDocument()
  })

  it('calls onLogout when logout button is clicked', async () => {
    const user = userEvent.setup()
    render(<WelcomeScreen userEmail={testEmail} onLogout={mockOnLogout} />)
    
    const logoutButton = screen.getByRole('button', { name: /logout/i })
    await user.click(logoutButton)
    
    expect(mockOnLogout).toHaveBeenCalledTimes(1)
  })

  it('truncates long email addresses', () => {
    const longEmail = 'verylongemailaddress@verylongdomainname.com'
    render(<WelcomeScreen userEmail={longEmail} onLogout={mockOnLogout} />)
    
    const emailElement = screen.getByText(longEmail)
    expect(emailElement).toHaveClass('truncate', 'max-w-[200px]')
  })
})