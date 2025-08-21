import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/Blocks/About";

export default function Home() {
    return (
        <div style={{ width: "100%" }} className="">
            <Header />
            <About />
            <Footer />
        </div>
    );
}
