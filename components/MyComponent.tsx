'use client';

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

// Make sure that this component is wrapped with ConnectKitProvider
export default function MyComponent() {
    const { address, isConnecting, isConnected, isDisconnected, } = useAccount();
    const [tip, setTip] = useState<string>();
    const [connectedWallet, setConnectedWallet] = useState<string>()

    useEffect(() => {
        if (isConnecting) {
            setTip('Connecting...');
        }
    }, [isConnecting])

    useEffect(() => {
        if (isConnected) {
            setTip('Connected');
        }
    }, [isConnected])


    useEffect(() => {
        if (isDisconnected) {
            setTip('Disconnected');
        }
    }, [isDisconnected])

    useEffect(() => {
        setConnectedWallet(address);
    }, [address])

    //  if (isConnecting || isDisconnected) return <div>{tip}</div>;

    return <>
        <div>{tip}</div>
        <div>Connected Wallet: {connectedWallet}</div>
    </>;
}