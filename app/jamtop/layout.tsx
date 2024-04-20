export const metadata = {
  title: "Spotify Jamtop",
};

export default function JamtopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>This is Jamtop Nav Bar</nav>
      {children}
    </section>
  );
}
