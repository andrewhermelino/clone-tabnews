import SocialButton from "../components/SocialButton";

function Home() {
  return (
    <main className="text-center flex items-center justify-center h-screen fixed">
      <section className="p-6 w-screen">
        <h1 className="text-theme" style={{ fontSize: 100, lineHeight: 0.9 }}>
          Andrew Batista
        </h1>
        <h2 className="text-secondary text-base/10" style={{ fontSize: 20 }}>
          Desenvolvedor frontend e backend
        </h2>
        <div className="my-8">
          <SocialButton type="github" href="https://github.com/oandrewhb">
            Github
          </SocialButton>
          <SocialButton type="linkedin" href="https://www.linkedin.com/in/andrew-batista-52ba21269/">LinkedIn</SocialButton>
        </div>
      </section>
    </main>
  );
}

export default Home;
