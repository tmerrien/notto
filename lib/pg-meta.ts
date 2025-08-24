export const listTablesSql = (schemas?: string[]) => {
  const schemaFilter = schemas && schemas.length > 0 
    ? `AND schemaname = ANY($1)`
    : `AND schemaname NOT IN ('information_schema', 'pg_catalog')`
    
  return `
    SELECT 
      schemaname as schema,
      tablename as name,
      tableowner as owner
    FROM pg_tables 
    WHERE 1=1 ${schemaFilter}
    ORDER BY schemaname, tablename;
  `
}

export const listColumnsSql = `
  SELECT 
    column_name as name,
    data_type as type,
    is_nullable as nullable,
    column_default as default_value
  FROM information_schema.columns
  WHERE table_schema = $1 AND table_name = $2
  ORDER BY ordinal_position;
`