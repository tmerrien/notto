import { createClient } from '../../lib/client'

// Mock Supabase SSR
jest.mock('@supabase/ssr', () => ({
  createBrowserClient: jest.fn().mockReturnValue({
    auth: { getSession: jest.fn() },
    from: jest.fn()
  })
}))

// Mock environment variables
const mockEnv = {
  NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY: 'test-anon-key'
}

const originalEnv = process.env

describe('Client Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env = { ...originalEnv, ...mockEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  describe('createClient', () => {
    it('should create and return a Supabase browser client', () => {
      const client = createClient()
      
      expect(client).toBeDefined()
      expect(typeof client).toBe('object')
    })

    it('should call createBrowserClient with correct parameters', () => {
      const { createBrowserClient } = require('@supabase/ssr')
      
      createClient()
      
      expect(createBrowserClient).toHaveBeenCalledWith(
        mockEnv.NEXT_PUBLIC_SUPABASE_URL,
        mockEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
      )
    })

    it('should create client with environment variables', () => {
      const { createBrowserClient } = require('@supabase/ssr')
      
      createClient()
      
      expect(createBrowserClient).toHaveBeenCalledTimes(1)
    })
  })
})