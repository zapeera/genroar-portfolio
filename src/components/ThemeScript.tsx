export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // Only check localStorage (user preference) - ignore system settings
              const stored = localStorage.getItem('theme');
              if (stored === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                // Default to light mode if no preference stored
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              // Fallback to light mode if there's an error
              document.documentElement.classList.remove('dark');
            }
          })();
        `,
      }}
      suppressHydrationWarning
    />
  );
}
