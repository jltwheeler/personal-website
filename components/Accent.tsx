interface AccentProps {
  children: React.ReactNode;
}
export const Accent: React.FC<AccentProps> = ({ children }) => (
  <span className="dark:text-blue-700 text-blue-800 no-italic font-bold">
    {children}
  </span>
);
