import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/Blocks/About";
import Swap from "@/components/Blocks/Swap";
import Compare from "@/components/Blocks/Compare";
import Documentations from "@/components/Blocks/Documentations";
import Provide from "@/components/Blocks/Provide";

export default function Home() {
    return (
        <div style={{ width: "100%" }} className="">
            <Header />
            <Swap />
            <About />
            <Compare />
            <Documentations />
            <Provide />
            <Footer />
        </div>
    );
}
