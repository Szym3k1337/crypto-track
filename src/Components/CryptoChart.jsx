import {Line} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);


function CryptoChart({ chartData }) {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false }, // Ukrywa pionowe linie siatki (odpowiednik tickLine={false})
                border: { display: false },
                ticks: { color: '#475569', font: { size: 11 } }, // Kolor czcionki dni tygodnia
            },
            y: {
                display: false, // Ukrywa całą oś Y (identycznie jak hide={true} w Recharts)
                grid: { display: false },
            },
        },
    };

    const data = {
        labels: chartData.day, // Oś X (dni)
        datasets: [     // <-- SPRAWDŹ CZY TU JEST "datasets" Z LITERĄ "s" NA KOŃCU!
            {
                data: chartData.price, // Oś Y (ceny)
                borderColor: '#34d399',
                borderWidth: 2.5,
                tension: 0.3,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#10b981',
                fill: false,
            },
        ],
    };
    // Zabezpieczenie na wypadek, gdyby jakaś waluta nie miała jeszcze historii danych
    if (!chartData || chartData.length === 0) {
        return <p className="text-slate-500 text-sm">Brak danych historycznych dla tego aktywa.</p>;
    }
    console.log("Dane, które dostał wykres:", chartData);
    return (
        <div className="w-full h-52 bg-slate-950/50 border border-slate-800/60 rounded-2xl p-4 mt-6">
            <Line data={data} options={options} />
        </div>
    );
}

export default CryptoChart;