const EditorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto grid items-center gap-10[y-8">
      {children}
    </main>
  );
};

export default EditorLayout;
