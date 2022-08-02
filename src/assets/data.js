import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const aboutData = [
  {
    id: 1,
    icon: <SiHiveBlockchain/>,
    heading: "Reliable, tamper-proof network",
    text: `Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.`,
  },
  {
    id: 2,
    icon: <SiFsecure/>,
    heading: "Seamless connection to any API",
    text: `Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.`,
  },
  {
    id: 3,
    icon: <SiStrapi/>,
    heading: "Proven, ready-made solutions",
    text: `Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.`,
  },
  {
    id: 4,
    icon: <VscServerProcess/>,
    heading: "Secure off-chain computation",
    text: `Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.`,
  },
];

export {aboutData} 