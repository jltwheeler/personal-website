interface ContainerProps {
  children: React.ReactNode;
}
export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="flex flex-col justify-center items-center w-full">
    <div className="max-w-prose">{children}</div>
  </div>
);
