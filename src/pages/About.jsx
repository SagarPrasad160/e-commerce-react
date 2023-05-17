function About() {
  return (
    <div className="flex items-center">
      <div className="w-4/5 py-5  mx-auto flex">
        <div className="w-64 mr-5">
          <img
            src="https://images.unsplash.com/photo-1545224144-b38cd309ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="rounded-full object-cover"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Generics Merchandise!
          </h1>
          <p className="text-lg mb-4">
            Generics is a dynamic and passionate music band that thrives on
            creating unique and unforgettable experiences through their music.
            With a blend of genres and an energetic stage presence, Generics has
            captured the hearts of music enthusiasts worldwide.
          </p>
          <p className="text-lg mb-4">
            Our merchandise page is designed to bring you closer to the spirit
            of Generics. Each item in our collection has been carefully crafted
            with the same dedication and creativity that we pour into our music.
            By owning our merchandise, you become a part of the Generics
            community, representing a shared love for our art and a connection
            to our message.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
