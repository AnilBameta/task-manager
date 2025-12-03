export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return <div className="toggle-button" onClick={toggleTheme}>Toggle Theme</div>;
}
