const { ethers } = require("ethers")
const abi = require("./abi")

const BTC_USD_PRICE_FEED_ADDRESS = "0xb3DF0a9582361db08EC100bd5d8CB70fa8579f4B"
const CRONOS_MAINNET_RPC = "https://evm-cronos.crypto.org"

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(CRONOS_MAINNET_RPC)
    const priceFeed = new ethers.Contract(BTC_USD_PRICE_FEED_ADDRESS, abi, provider)
    const decimals = await priceFeed.decimals()
    const latestRoundData = await priceFeed.latestRoundData()
    const price = ethers.utils.formatUnits(latestRoundData.answer, decimals)
    console.log(`Current BTC price is ${price} USD`)
}

main().catch((e) => console.log(e))
