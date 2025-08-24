-- Create email accounts table to store multiple email account configurations
CREATE TABLE email_accounts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    provider VARCHAR(20) NOT NULL CHECK (provider IN ('microsoft', 'gmail')),
    email_address VARCHAR(255) NOT NULL,
    display_name VARCHAR(255),
    
    -- OAuth tokens (encrypted)
    access_token TEXT,
    refresh_token TEXT,
    expires_at TIMESTAMPTZ,
    
    -- Provider specific data
    tenant_id VARCHAR(255), -- For Microsoft accounts
    
    -- Sync settings
    is_active BOOLEAN DEFAULT true,
    last_sync_at TIMESTAMPTZ,
    sync_error TEXT,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    UNIQUE(user_id, email_address)
);

-- Create index for efficient lookups
CREATE INDEX idx_email_accounts_user_id ON email_accounts(user_id);
CREATE INDEX idx_email_accounts_provider ON email_accounts(provider);
CREATE INDEX idx_email_accounts_active ON email_accounts(is_active) WHERE is_active = true;

-- Enable RLS
ALTER TABLE email_accounts ENABLE ROW LEVEL SECURITY;

-- RLS policy - users can only see their own accounts
CREATE POLICY "Users can view their own email accounts"
    ON email_accounts FOR ALL
    USING (auth.uid() = user_id);