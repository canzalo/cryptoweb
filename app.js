


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd').then((data) => {
    console.log(data)
    return data.json()
}).then((completeData) => {
    document.getElementById('bitcoin').innerHTML = completeData.bitcoin.usd
    document.getElementById('ethereum').innerHTML = completeData.ethereum.usd
    document.getElementById('dogecoin').innerHTML = completeData.dogecoin.usd
})
