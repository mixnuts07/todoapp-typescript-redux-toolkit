type Props = {
  message: string;
  children: React.ReactNode;
};
const Child: React.FC<Props> = ({ message, children }) => {
  return (
    <>
      <p>{message}</p>
      {children}
    </>
  );
};

export default Child;
