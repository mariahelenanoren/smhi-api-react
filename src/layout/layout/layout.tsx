import Header from '../../components/header/Header';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
