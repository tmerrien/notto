import { z } from 'zod'

export const secretSchema = z.object({
  name: z.string().min(1, 'Secret name is required'),
  value: z.string().min(1, 'Secret value is required'),
})

export const secretsSchema = z.object({
  secrets: z.array(secretSchema),
})

export type SecretSchema = z.infer<typeof secretSchema>
export type SecretsSchema = z.infer<typeof secretsSchema>