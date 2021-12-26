async function loginWax() { 
    try { 
        const wax = new waxjs.WaxJS({ rpcEndpoint: 'https://wax.greymass.com', tryAutoLogin: false }); 
        const userAccount = await wax.login(); 
        const element =  document.querySelector('#results')
        element.innerHTML += ` ${userAccount}`
    } catch(e) { 

    } 
}

async function loginAnchor() { 
    try { 
        const transport = new AnchorLinkBrowserTransport()
        const link = new AnchorLink({
            transport,
            verifyProofs: true,
            chains: [
                {
                    chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
                    nodeUrl: 'https://wax.greymass.com',
                },
            ],
        })
        const identity = await link.login('factorywrld')
        const element =  document.querySelector('#results')
        element.innerHTML += ` ${identity.account.account_name}`
    } catch(e) { 
    } 
}
