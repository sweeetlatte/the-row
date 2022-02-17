import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="mx-auto">
                <div className="w-screen h-screen banner-img grid content-center">
                    <div
                        className="2xl:text-9xl xl:text-8xl md:text-6xl sm:text-4xl font-bold"
                        style={{ color: "#3C3B3B" }}
                    >
                        THE ROW
                    </div>
                </div>
                <div className="row">
                    Shop
                    <div className="flex">
                        <div className="basis-1/2">men</div>
                        <div className="basis-1/2">women</div>
                    </div>
                </div>
                <div className="row">menu</div>
            </div>
        </div>
    );
}

export default App;
