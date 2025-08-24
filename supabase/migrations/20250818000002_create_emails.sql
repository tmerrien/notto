-- Create emails table to store synchronized emails
CREATE TABLE emails (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    account_id UUID REFERENCES email_accounts(id) ON DELETE CASCADE NOT NULL,
    
    -- Email identifiers
    message_id VARCHAR(255) NOT NULL, -- Provider's unique message ID
    thread_id VARCHAR(255), -- Provider's thread ID
    
    -- Email content
    subject TEXT,
    from_address VARCHAR(255),
    from_name VARCHAR(255),
    to_addresses JSONB, -- Array of recipient objects
    cc_addresses JSONB, -- Array of CC recipient objects
    bcc_addresses JSONB, -- Array of BCC recipient objects
    body_text TEXT,
    body_html TEXT,
    
    -- Email metadata
    received_at TIMESTAMPTZ,
    is_read BOOLEAN DEFAULT false,
    is_important BOOLEAN DEFAULT false,
    has_attachments BOOLEAN DEFAULT false,
    folder_name VARCHAR(255), -- Inbox, Sent, etc.
    
    -- Task conversion
    is_converted_to_task BOOLEAN DEFAULT false,
    task_id UUID, -- Will reference tasks table
    
    -- Sync metadata
    provider_data JSONB, -- Store provider-specific metadata
    synced_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Constraints
    UNIQUE(account_id, message_id)
);

-- Create indexes for efficient queries
CREATE INDEX idx_emails_user_id ON emails(user_id);
CREATE INDEX idx_emails_account_id ON emails(account_id);
CREATE INDEX idx_emails_received_at ON emails(received_at DESC);
CREATE INDEX idx_emails_is_read ON emails(is_read);
CREATE INDEX idx_emails_converted_to_task ON emails(is_converted_to_task);
CREATE INDEX idx_emails_folder ON emails(folder_name);

-- Full text search index for subject and body
CREATE INDEX idx_emails_search ON emails USING gin(to_tsvector('english', coalesce(subject, '') || ' ' || coalesce(body_text, '')));

-- Enable RLS
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- RLS policy - users can only see emails from their accounts
CREATE POLICY "Users can view emails from their accounts"
    ON emails FOR ALL
    USING (auth.uid() = user_id);