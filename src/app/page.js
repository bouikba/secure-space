import {
  Header,
  Hero,
  Products,
  Services,
  Footer,
  Links
} from "@/components";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Links/>
      <Products />
      <Services />
      <Footer />
    </main>
  );
}
