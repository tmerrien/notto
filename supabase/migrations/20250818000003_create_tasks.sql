-- Create tasks table for auto-generated and manual tasks
CREATE TABLE tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    
    -- Task content
    title VARCHAR(500) NOT NULL,
    description TEXT,
    
    -- Task metadata
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status VARCHAR(20) DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'completed', 'cancelled')),
    
    -- Dates
    due_date TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    
    -- Source information
    source_type VARCHAR(20) DEFAULT 'manual' CHECK (source_type IN ('manual', 'email', 'calendar')),
    source_email_id UUID REFERENCES emails(id) ON DELETE SET NULL,
    
    -- LLM analysis data
    llm_confidence DECIMAL(3,2), -- 0.00 to 1.00 confidence score
    llm_reasoning TEXT, -- Why the LLM thought this was a task
    
    -- Categorization
    category VARCHAR(100),
    tags JSONB, -- Array of tag strings
    
    -- Notifications
    notification_sent BOOLEAN DEFAULT false,
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_due_date ON tasks(due_date) WHERE due_date IS NOT NULL;
CREATE INDEX idx_tasks_source_email ON tasks(source_email_id) WHERE source_email_id IS NOT NULL;
CREATE INDEX idx_tasks_created_at ON tasks(created_at DESC);

-- Full text search for tasks
CREATE INDEX idx_tasks_search ON tasks USING gin(to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '')));

-- Enable RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- RLS policy
CREATE POLICY "Users can manage their own tasks"
    ON tasks FOR ALL
    USING (auth.uid() = user_id);