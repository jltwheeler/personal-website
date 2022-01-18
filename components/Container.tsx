interface ContainerProps {
  children: React.ReactNode;
}
export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="px-8 md:px-0 flex flex-col justify-center items-center w-full">
    <div className="max-w-prose">{children}</div>
  </div>
);
