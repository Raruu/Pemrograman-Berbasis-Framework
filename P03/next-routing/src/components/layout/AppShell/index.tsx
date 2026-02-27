import Navbar from "../navbar/ index";

type AppShellProps = {
  children: React.ReactNode;
};

export const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <footer className="navbar">Nambah footer min</footer>
    </main>
  );
};
