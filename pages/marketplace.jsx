// import styles from '../styles/Marketplace.module.scss';
import { NFT_COLLECTION_ADDRESSS } from "../const/contractAddresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { useEffect,useRef } from 'react';
import CompanyCollection from '../components/campanyCollections';
export default function MarketPlace() {
    return (
        <div >
            <div className="title">MarketPlace</div>
            <div className="compContainer">
                {NFT_COLLECTION_ADDRESSS.map((company, i) =>
                    <CompanyCollection company={company} key={i} />
                )}
            </div>
        </div>
    );
}