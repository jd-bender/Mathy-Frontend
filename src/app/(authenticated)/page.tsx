import NavButton from "components/NavButton";

const Page = () => {
    return (
        <div className="p-12 mx-48 flex justify-evenly">
            <NavButton text="Addition 1" path="/arithmetic/addition-1" />
            <NavButton text="Subtraction 1" path="/arithmetic/subtraction-1" />
        </div>
    );
};

export default Page;
