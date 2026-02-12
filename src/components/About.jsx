function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Me</h2>

      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: "1.6",
          color: "#9ca3af",
        }}
      >
        Saya adalah Fullstack Web Developer yang fokus pada Laravel dan React.
        Saya membangun aplikasi modern, responsif, dan profesional dengan
        pengalaman pada pengembangan sistem informasi dan web application.
      </p>
    </section>
  );
}

export default About;
