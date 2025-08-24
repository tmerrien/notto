-- Create updated_at triggers for automatic timestamp updates

-- Function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to email_accounts
CREATE TRIGGER update_email_accounts_updated_at
    BEFORE UPDATE ON email_accounts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to emails
CREATE TRIGGER update_emails_updated_at
    BEFORE UPDATE ON emails
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to tasks
CREATE TRIGGER update_tasks_updated_at
    BEFORE UPDATE ON tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically create notification when task is created from email
CREATE OR REPLACE FUNCTION create_task_notification()
RETURNS TRIGGER AS $$
BEGIN
    -- Only create notification for email-sourced tasks
    IF NEW.source_type = 'email' AND NEW.source_email_id IS NOT NULL THEN
        INSERT INTO notifications (
            user_id,
            title,
            message,
            type,
            task_id,
            email_id,
            priority,
            metadata
        ) VALUES (
            NEW.user_id,
            'New task created from email',
            'Task "' || NEW.title || '" was automatically created from an email',
            'task_created',
            NEW.id,
            NEW.source_email_id,
            CASE 
                WHEN NEW.priority = 'urgent' THEN 'high'
                WHEN NEW.priority = 'high' THEN 'high'
                ELSE 'normal'
            END,
            jsonb_build_object(
                'llm_confidence', NEW.llm_confidence,
                'auto_generated', true
            )
        );
    END IF;
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to tasks table
CREATE TRIGGER create_task_notification_trigger
    AFTER INSERT ON tasks
    FOR EACH ROW
    EXECUTE FUNCTION create_task_notification();

-- Add foreign key constraint to emails table for task_id
ALTER TABLE emails 
ADD CONSTRAINT fk_emails_task_id 
FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE SET NULL;