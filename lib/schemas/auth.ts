import { z } from 'zod'

export const authGeneralSettingsSchema = z.object({
  site_url: z.string().url().optional(),
  uri_allow_list: z.string().optional(),
  jwt_expiry: z.number().min(0).optional(),
  disable_signup: z.boolean().optional(),
  external_email_enabled: z.boolean().optional(),
  external_phone_enabled: z.boolean().optional(),
  mailer_autoconfirm: z.boolean().optional(),
  sms_autoconfirm: z.boolean().optional(),
  mailer_secure_email_change_enabled: z.boolean().optional(),
  sms_secure_phone_change_enabled: z.boolean().optional(),
})

export type AuthGeneralSettingsSchema = z.infer<typeof authGeneralSettingsSchema>

export const authEmailProviderSchema = z.object({
  enabled: z.boolean(),
  double_confirm_changes: z.boolean().optional(),
  enable_signup: z.boolean().optional(),
  enable_confirmations: z.boolean().optional(),
})

export const authPhoneProviderSchema = z.object({
  enabled: z.boolean(),
  enable_signup: z.boolean().optional(),
  enable_confirmations: z.boolean().optional(),
})

export const authGoogleProviderSchema = z.object({
  enabled: z.boolean(),
  client_id: z.string().optional(),
  secret: z.string().optional(),
  redirect_uri: z.string().url().optional(),
})

export const authFieldLabels = {
  site_url: 'Site URL',
  uri_allow_list: 'URI Allow List',
  jwt_expiry: 'JWT Expiry (seconds)',
  disable_signup: 'Disable Signup',
  external_email_enabled: 'Email Auth Enabled',
  external_phone_enabled: 'Phone Auth Enabled',
  mailer_autoconfirm: 'Auto-confirm Email',
  sms_autoconfirm: 'Auto-confirm SMS',
  mailer_secure_email_change_enabled: 'Secure Email Changes',
  sms_secure_phone_change_enabled: 'Secure Phone Changes',
} as const