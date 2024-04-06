// import styles from '../styles/Marketplace.module.scss';
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESSS } from "../const/contractAddresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { useEffect,useRef } from 'react';
import CompanyCollection from '../components/campanyCollections';
import { createChart } from 'lightweight-charts';
export default function MarketPlace() {
    // const chart = createChart(document.body, { width: 400, height: 300, color: "#000" });
    // const graph = useRef(null)
    // const lineSeries = chart.addLineSeries();
    // lineSeries.setData([
    //     { time: '2019-04-11', value: 80.01 },
    //     { time: '2019-04-12', value: 96.63 },
    //     { time: '2019-04-13', value: 76.64 },
    //     { time: '2019-04-14', value: 81.89 },
    //     { time: '2019-04-15', value: 74.43 },
    //     { time: '2019-04-16', value: 80.01 },
    //     { time: '2019-04-17', value: 96.63 },
    //     { time: '2019-04-18', value: 76.64 },
    //     { time: '2019-04-19', value: 81.89 },
    //     { time: '2019-04-20', value: 74.43 },
    // ]);
    return (
        <div >
            <div className="title">MarketPlace</div>
            <div className="compContainer">
                {NFT_COLLECTION_ADDRESSS.map((company, i) =>
                    <CompanyCollection company={company} key={i} />
                )}
                {/* <div ref={graph}></div> */}
            </div>
        </div>
    );
}