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
        VITE_SUPABASE_URL: 'https://oqsbsamqaxihtoqgyunw.supabase.co',
        VITE_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xc2JzYW1xYXhpaHRvcWd5dW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NTM1MTksImV4cCI6MjA1NzEyOTUxOX0.YH8jFKAopsS9vCWsVcUvlPPhYbxcCb3FXjUhWHwhI-M',
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
        VITE_SUPABASE_URL: 'https://oqsbsamqaxihtoqgyunw.supabase.co',
        VITE_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xc2JzYW1xYXhpaHRvcWd5dW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NTM1MTksImV4cCI6MjA1NzEyOTUxOX0.YH8jFKAopsS9vCWsVcUvlPPhYbxcCb3FXjUhWHwhI-M',
        ADMIN_CHAT_ID: '962947120'
      }
    }
  ]
};