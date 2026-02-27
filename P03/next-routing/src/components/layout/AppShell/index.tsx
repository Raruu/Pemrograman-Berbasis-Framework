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
      <div>Nambah footer min</div>
    </main>
  );
};
