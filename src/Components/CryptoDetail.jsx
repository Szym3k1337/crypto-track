import { useParams, Link } from 'react-router-dom';
import CryptoModel3D from "./CryptoModel3D.jsx";
import CryptoMappedModel from "./CryptoMappedModel.jsx";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import CryptoChart from "./CryptoChart.jsx";

function CryptoDetail () {

    const { id } = useParams();

    const CRYPTO_CONFIG = {
        bitcoin: {
            type: 'model',
            path: '/bitcoin.glb',
            scale: 50,
            name: 'Bitcoin (BTC)',
            description: 'Pierwsza i najbardziej znana kryptowaluta na świecie, stworzona w 2009 roku przez anonimową osobę lub grupę o pseudonimie Satoshi Nakamoto. Działa w oparciu o algorytm Proof of Work (PoW) i jest często nazywana "cyfrowym złotem" ze względu na swoją ograniczoną podaż (maksymalnie 21 milionów monet), co czyni ją głównym aktywem tezauryzacyjnym w świecie cyfrowym.',
            chartPath : "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"

        },
        ethereum: {
            type: 'model',
            path: '/ethereum.glb',
            scale: 2,
            name: 'Ethereum (ETH)',
            description: 'Zdecentralizowana platforma o otwartym kodzie źródłowym, uruchomiona w 2015 roku przez Vitalika Buterina. Ethereum zrewolucjonizowało rynek, wprowadzając tzw. inteligentne kontrakty (smart contracts), które umożliwiają tworzenie zdecentralizowanych aplikacji (dApps) oraz tokenów NFT. Obecnie działa w ekologicznym modelu Proof of Stake (PoS).',
            chartPath : "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily"
        },
        bnb: {
            type: 'procedural',
            path: '/bnb.png',
            name: 'Binance Coin (BNB)',
            description: 'Rodzima kryptowaluta ekosystemu Binance, jednej z największych giełd kryptowalutowych na świecie. BNB zasila sieć BNB Chain (dawniej Binance Smart Chain), oferując użytkownikom bardzo niskie opłaty transakcyjne oraz szybki czas przetwarzania bloków. Jest powszechnie używana do opłacania prowizji handlowych oraz w projektach DeFi.',
            chartPath : "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=30&interval=daily"
        },
        xrp: {
            type: 'procedural',
            path: '/xrp.png',
            name: 'Ripple (XRP)',
            description: 'Cyfrowe aktywo stworzone przez firmę Ripple Labs w celu zrewolucjonizowania globalnego systemu bankowego. XRP zostało zaprojektowane jako superszybki i tani most transakcyjny do rozliczeń międzynarodowych dla instytucji finansowych. W przeciwieństwie do Bitcoina, XRP nie opiera się na tradycyjnym blockchainie, lecz na unikalnym protokole konsensusu (RPCA).',
            chartPath : "https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=30&interval=daily"
        },
        usdt: {
            type: 'procedural',
            path: '/usdt.png',
            name: 'Tether (USDT)',
            description: 'Najpopularniejszy na świecie stablecoin, czyli kryptowaluta, której wartość jest bezpośrednio powiązana z kursem tradycyjnej waluty fiat – w tym przypadku z dolarem amerykańskim (USD) w stosunku 1:1. USDT służy inwestorom jako bezpieczna przystań do przeczekiwania gwałtownych wahań rynkowych bez konieczności wychodzenia z ekosystemu krypto.',
            chartPath : "https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=30&interval=daily"
        },
        sol: {
            type: 'procedural',
            path: '/solana.png',
            name: 'Solana (SOL)',
            description: 'Innowacyjny blockchain warstwy pierwszej (Layer 1), stworzony z myślą o maksymalnej skalowalności i prędkości. Dzięki unikalnemu algorytmowi Proof of History (PoH) połączonemu z Proof of Stake, Solana jest w stanie przetwarzać tysiące transakcji na sekundę przy kosztach wynoszących ułamki centa, co czyni ją ogromnym konkurentem dla Ethereum.',
            chartPath : "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=30&interval=daily"
        }
    };

    const config = CRYPTO_CONFIG[id];


    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans gap-4">
            <div className="w-full max-w-3xl h-80 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <Canvas>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} intensity={5} />

                {config.type === 'model' ? (
                    <CryptoModel3D modelPath={config.path} scale={config.scale} />
                ) : (
                    <CryptoMappedModel textureUrl={config.path} />
                )}
                <OrbitControls enableZoom={false}/>
            </Canvas>
            </div>
            <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl text-center space-y-6">

                <Link to={`/`} className="inline-block text-sm text-sky-400 hover:text-sky-300 font-medium mb-4" >← Powrót do Dashboardu</Link>
                <br/>

                <h1 className="text-4xl font-black tracking-tight capitalize text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-400">
                    {id} :
                </h1>

                <p className="text-slate-400">
                    {config.description}
                </p>

            </div>
            <CryptoChart crypto = {config.name} url = {config.chartPath}/>
        </main>
    )

}



export default CryptoDetail;