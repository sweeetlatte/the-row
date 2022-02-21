import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="mx-auto">
                <div className="w-screen h-screen bg-[url('../src/assets/images/Image-1.png')] bg-no-repeat bg-cover grid content-center">
                    <div
                        className="2xl:text-9xl xl:text-8xl md:text-6xl sm:text-4xl font-bold banner-img"
                        style={{ color: "#3C3B3B" }}
                    >
                        THE ROW
                    </div>
                </div>
                <div className="row mt-14">
                    <div
                        className="2xl:text-9xl xl:text-8xl md:text-6xl sm:text-4xl font-light mb-12"
                        style={{ color: "#4D4D4D" }}
                    >
                        SHOP
                    </div>
                    <div className="flex mt-14">
                        <div
                            className="basis-1/2 mx-24 bg-[url('../src/assets/images/Image-3.png')] grid content-center"
                            style={{ height: "909px" }}
                        >
                            <div
                                className="2xl:text-9xl xl:text-8xl md:text-6xl sm:text-4xl font-bold banner-img"
                                style={{ color: "#f0f0f0" }}
                            >
                                MEN
                            </div>
                        </div>
                        <div
                            className="basis-1/2 mx-24 bg-[url('../src/assets/images/Image-2.png')] grid content-center"
                            style={{ height: "909px" }}
                        >
                            <div
                                className="2xl:text-9xl xl:text-8xl md:text-6xl sm:text-4xl font-bold banner-img"
                                style={{ color: "#f0f0f0" }}
                            >
                                WOMEN
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">navbar</div>
            </div>
        </div>
    );
}

export default App;
