interface AccentProps {
  children: React.ReactNode;
}
export const Accent: React.FC<AccentProps> = ({ children }) => (
  <span>{children}</span>
);
