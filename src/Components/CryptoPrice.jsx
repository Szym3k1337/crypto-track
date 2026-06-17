import useFetch from "../customHooks/useFetch.js";
import CryptoCard from "./CryptoCard.jsx"
import ChooseCryptoModel from "./ChooseCryptoModel.jsx";

function CryptoPrice(){
    const { data, loading, error, handleFetchData } = useFetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,ripple,solana&vs_currencies=usd");

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-6">
                    <p className="text-5xl font-black text-emerald-400 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Ładowanie danych z serwera...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-6">
                    <h2 className="text-xl font-medium text-slate-400 tracking-wide uppercase">Coś poszło nie tak 💥</h2>
                    <p className="text-5xl font-black text-emerald-400 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">{error}</p>
                    <button onClick={handleFetchData} className="w-full h-12 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-sky-600/20 cursor-pointer text-base tracking-wide"
                    >
                        Spróbuj ponownie
                    </button>
                </div>
            </div>
        );
    }
    return (
        <main id="Screen" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">

            <header className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
                <section id="header-text" className="text-center sm:text-left">
                    <h1 className="text-2xl lg:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-400 tracking-tight">
                        Crypto Dashboard
                    </h1>
                    <p className="text-xs lg:text-sm text-slate-500 mt-1">
                        Dane giełdowe odświeżane w czasie rzeczywistym
                    </p>
                </section>

                <section id="refresh-button" className="w-full sm:w-auto">

                    <button
                        onClick={handleFetchData}
                        className="w-full sm:w-44 h-11 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md cursor-pointer tracking-wide"
                    >
                        Refresh All
                    </button>

                </section>

            </header>

            <ChooseCryptoModel />

            <section id="cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full mb-8">


                <CryptoCard name="bitcoin" shortName="BTC" price={data?.bitcoin?.usd} colorClass="text-amber-500" id='bitcoin' />
                <CryptoCard name="ethereum" shortName="ETH" price={data?.ethereum?.usd} colorClass="text-indigo-400" id='ethereum' />
                <CryptoCard name="tether" shortName="USDT" price={data?.tether?.usd} colorClass="text-emerald-400" id='usdt' />
                <CryptoCard name="binance coin" shortName="BNB" price={data?.binancecoin?.usd} colorClass="text-yellow-500" id='bnb' />
                <CryptoCard name="ripple" shortName="XRP" price={data?.ripple?.usd} colorClass="text-sky-400" id='xrp'/>
                <CryptoCard name="solana" shortName="SOL" price={data?.solana?.usd} colorClass="text-purple-400" id='sol' />

            </section>
            <footer className="w-full max-w-5xl mt-6 p-4 bg-slate-900/50 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <section id="connection-status" className="flex items-center gap-3">

                   <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                   </span>
                    <p className="text-xs text-slate-400 text-center sm:text-left">
                        Status połączenia z API: <span className="text-emerald-400 font-medium">Połączono</span>
                    </p>
                </section>
                <p className="text-xs text-slate-500">
                    Ostatnia aktualizacja: {new Date().toLocaleTimeString()}
                </p>
            </footer>



        </main>
    );

}




export default CryptoPrice;