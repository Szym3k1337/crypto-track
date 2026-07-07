import {ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, Legend} from "recharts";
import useFetch from "../customHooks/useFetch.ts"

interface Props {
    crypto: string,
    url: string,
}

interface ChartOutput {
    date:string;
    price:number;
}
interface DataShape {
    prices: [number, number][];


}
export default function CryptoChart({crypto, url}: Props) {
    const {data, loading, error} = useFetch<DataShape>(url);
    if (loading) {
        return <div className="p-4 bg-slate-900 text-green-400 rounded-lg font-bold">Loading  data ...</div>;
    }
    if (error) {
        return <div className="p-4 bg-slate-900 text-green-400 rounded-lg font-bold">Error: {error}</div>;
    }


    const formattedData = data?.prices?.map(([timestamp, price]): ChartOutput => {

        const dateObject = new Date(timestamp);

        const formattedDate = dateObject.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
        return {
            date: formattedDate,
            price: parseFloat(price.toFixed(2))
        };
    }) || [];

    console.log("Przetransformowane dane dla Recharts:", formattedData);
    return (
        <div className="p-4 bg-slate-900 text-green-400 rounded-lg w-full max-w-3xl">
            <h3 className="font-bold mb-2">{`Wykres cen ${crypto}`}</h3>
            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={formattedData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <XAxis dataKey="date" stroke="#94A3B8" fontSize={9} axisLine={false} tickLine={false}/>

                        <YAxis dataKey="price" stroke="#94A3B8" fontSize={12} tickFormatter={(value) => `$${Math.round(value)}`} axisLine={false} tickLine={false}
                               domain={[
                                   (dataMin) => Math.floor(dataMin * .98),
                                   (dataMax) => Math.ceil(dataMax * 1.02)
                                   ]} />

                        <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#10B981' }}/>

                        <Legend />

                        <Line name="Cena : USD" type="monotone" dataKey="price" stroke="#10B981" strokeWidth={3} dot={false}/>


                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}