import ecommerceLogo from './assets/ecommerce.svg';

function App() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div>
                <img src={ecommerceLogo} className="logo" alt="Ecommerce logo" />
            </div>
        </main>
    );
}

export default App;
