import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Built with React and Vite by {profile.name}. All text is set in the{' '}
        <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a> typeface.
      </p>
    </footer>
  );
}
