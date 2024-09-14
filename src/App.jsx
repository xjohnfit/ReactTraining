import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";

function App() {
    return (
        <div className="flex flex-wrap justify-center p-4 gap-5">
            <Accordion />
            <RandomColor />
        </div>
    );
}

export default App;
