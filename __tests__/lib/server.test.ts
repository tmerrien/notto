import { createClient } from '../../lib/server'

// Mock Supabase SSR
jest.mock('@supabase/ssr', () => ({
  createServerClient: jest.fn().mockReturnValue({
    auth: { getSession: jest.fn() },
    from: jest.fn()
  })
}))

// Mock Next.js headers
const mockCookieStore = {
  getAll: jest.fn().mockReturnValue([
    { name: 'session', value: 'test-session' }
  ]),
  set: jest.fn()
}

jest.mock('next/headers', () => ({
  cookies: jest.fn().mockResolvedValue(mockCookieStore)
}))

// Mock environment variables
const mockEnv = {
  NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY: 'test-anon-key'
}

const originalEnv = process.env

describe('Server Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env = { ...originalEnv, ...mockEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  describe('createClient', () => {
    it('should create and return a Supabase server client', async () => {
      const client = await createClient()
      
      expect(client).toBeDefined()
      expect(typeof client).toBe('object')
    })

    it('should call createServerClient with correct parameters', async () => {
      const { createServerClient } = require('@supabase/ssr')
      
      await createClient()
      
      expect(createServerClient).toHaveBeenCalledWith(
        mockEnv.NEXT_PUBLIC_SUPABASE_URL,
        mockEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY,
        expect.objectContaining({
          cookies: expect.objectContaining({
            getAll: expect.any(Function),
            setAll: expect.any(Function)
          })
        })
      )
    })

    it('should handle cookies configuration', async () => {
      await createClient()
      
      expect(mockCookieStore.getAll).toHaveBeenCalled()
    })

    it('should handle cookie getAll function', async () => {
      const { createServerClient } = require('@supabase/ssr')
      
      await createClient()
      
      const call = createServerClient.mock.calls[0]
      const cookiesConfig = call[2].cookies
      
      const result = cookiesConfig.getAll()
      expect(result).toEqual([{ name: 'session', value: 'test-session' }])
    })

    it('should handle cookie setAll function without errors', async () => {
      const { createServerClient } = require('@supabase/ssr')
      
      await createClient()
      
      const call = createServerClient.mock.calls[0]
      const cookiesConfig = call[2].cookies
      
      // Should not throw when setting cookies
      expect(() => {
        cookiesConfig.setAll([
          { name: 'test', value: 'value', options: {} }
        ])
      }).not.toThrow()
      
      expect(mockCookieStore.set).toHaveBeenCalledWith('test', 'value', {})
    })

    it('should handle cookie setAll function with server component error', async () => {
      const { createServerClient } = require('@supabase/ssr')
      
      // Mock cookie store to throw error
      mockCookieStore.set.mockImplementationOnce(() => {
        throw new Error('Server component error')
      })
      
      await createClient()
      
      const call = createServerClient.mock.calls[0]
      const cookiesConfig = call[2].cookies
      
      // Should not throw even when cookie setting fails
      expect(() => {
        cookiesConfig.setAll([
          { name: 'test', value: 'value', options: {} }
        ])
      }).not.toThrow()
    })
  })
})