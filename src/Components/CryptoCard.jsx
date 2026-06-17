import {Link} from "react-router-dom";

function CryptoCard({ name, shortName, price, colorClass, id }) {


    const cardStyle = "block bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4 hover:scale-105 cursor-pointer transition-all duration-500"
    return (

        <article className={cardStyle} onClick={() => {}}>
            <Link to={`/crypto/${id}`}>
            <h2 className={`text-sm font-medium tracking-wide uppercase ${colorClass}`}>
                <span className="cursor-text">{name} ({shortName})</span>
            </h2>
            <p className="text-3xl font-black text-slate-100">
                <span className="cursor-text">${price ? price.toLocaleString() : "---"}</span>
            </p>
           </Link>
        </article>
    );
}

export default CryptoCard;