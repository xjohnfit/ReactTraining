import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

function App() {
    return (
        <div className="flex flex-wrap justify-center p-4 gap-5 mb-[100px]">
            <Accordion />
            <RandomColor />
            <StarRating />
        </div>
    );
}

export default App;
