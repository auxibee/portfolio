import Footer from "@/ui/footer";
import Header from "@/ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Header />
        <div className="container mx-auto px-6 py-10">
            {children}
        </div>
      <Footer />
      </>
    );
  }