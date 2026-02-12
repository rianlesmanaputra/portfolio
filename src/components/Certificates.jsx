function Certificates() {
  const certificates = [
    {
      title: "Laravel Certificate",
      image: "/certificates/cert1.jpg",
    },
    {
      title: "React Developer",
      image: "/certificates/cert2.jpg",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">My Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-cyan-400">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
