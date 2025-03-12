module.exports = {
  apps: [
    {
      name: 'main-bot',
      script: 'src/bots/main.js',
      watch: true,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        MAIN_BOT_TOKEN: '7845198255:AAG0qyfoIOja96THkyhyboEy7zuWhDh1ksE',
        ADMIN_BOT_TOKEN: '7006687421:AAHPkWN2R41A6PrlDDTKrYBhAhLZc3urln0',
        SUBSCRIPTION_PRICE: '999',
        VITE_SUPABASE_URL: 'https://zfdpqlakvkyuuuutkszf.supabase.co',
        VITE_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZHBxbGFrdmt5dXV1dXRrc3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2Mzg5OTEsImV4cCI6MjA1NzIxNDk5MX0.CSHl9AreaPtWUTFm6ELfeqekw3OoihgT9WOgwtYotSI',
        ADMIN_CHAT_ID: '962947120'
      }
    },
    {
      name: 'admin-bot',
      script: 'src/bots/admin.js',
      watch: true,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        MAIN_BOT_TOKEN: '7845198255:AAG0qyfoIOja96THkyhyboEy7zuWhDh1ksE',
        ADMIN_BOT_TOKEN: '7006687421:AAHPkWN2R41A6PrlDDTKrYBhAhLZc3urln0',
        SUBSCRIPTION_PRICE: '999',
        VITE_SUPABASE_URL: 'https://zfdpqlakvkyuuuutkszf.supabase.co',
        VITE_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmZHBxbGFrdmt5dXV1dXRrc3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2Mzg5OTEsImV4cCI6MjA1NzIxNDk5MX0.CSHl9AreaPtWUTFm6ELfeqekw3OoihgT9WOgwtYotSI',
        ADMIN_CHAT_ID: '962947120'
      }
    }
  ]
};