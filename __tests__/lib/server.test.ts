import { createClient } from '../../lib/server'

// Mock Supabase SSR
jest.mock('@supabase/ssr', () => ({
  createServerClient: jest.fn().mockReturnValue({
    auth: { getSession: jest.fn() },
    from: jest.fn()
  })
}))

// Mock Next.js headers
jest.mock('next/headers', () => ({
  cookies: jest.fn().mockResolvedValue({
    getAll: jest.fn().mockReturnValue([
      { name: 'session', value: 'test-session' }
    ]),
    set: jest.fn()
  })
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
      const { cookies } = require('next/headers')
      
      await createClient()
      
      expect(cookies).toHaveBeenCalled()
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
    })

    it('should handle cookie setAll function with server component error', async () => {
      // Create a mock that throws on set
      const errorMockStore = {
        getAll: jest.fn().mockReturnValue([]),
        set: jest.fn().mockImplementation(() => {
          throw new Error('Server component error')
        })
      }

      const { cookies } = require('next/headers')
      cookies.mockResolvedValueOnce(errorMockStore)
      
      const { createServerClient } = require('@supabase/ssr')
      
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