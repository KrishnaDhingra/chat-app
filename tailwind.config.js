module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        chatSecondary: 'var(--color-text-chat-secondary)'
      },
      backgroundColor: {
        primary: 'var(--color-body-bg-primary)',
        secondary: 'var(--color-body-bg-secondary)',
        navbarBg: 'var(--color-navbar-bg)',
        chatPrimary: 'var(--color-chat-primary)',
        chatSecondary: 'var(--color-chat-secondary)',
        chatContainer: 'var(--color-chat-container)',
        otheruserContainer: 'var(--color-other-user-container)',
        inputBg: 'var(--color-input-bg)',
        modeswithcerBg: 'var(--color-mode-switcher-bg)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        focus: 'var(--color-navbar-bg)'
      }
    },

  },
  plugins: [],
}