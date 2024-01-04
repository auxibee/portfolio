import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Header />
        <div className="container mx-auto px-6 py-10 text-center">
            {children}
        </div>
      <Footer />
      </>
    );
  }