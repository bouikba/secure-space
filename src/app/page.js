import {
  Header,
  Hero,
  Products,
  Services,
  Footer
} from "@/components";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <div className="bg-dark p-4" />
      <Products />
      <div className="bg-dark p-4" />
      <Services />
      <Footer />
    </main>
  );
}
