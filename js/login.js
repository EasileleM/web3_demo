(function () {
    if (localStorage.getItem('accountName')) {
        window.location.replace('/inventory')
    }

    const LOGIN_WAX_BUTTON_SELECTOR = '#loginWax'
    const LOGIN_ANCHOR_BUTTON_SELECTOR = '#loginAnchor'

    async function loginWax() { 
        try { 
            const wax = new waxjs.WaxJS({ rpcEndpoint: 'https://wax.greymass.com', tryAutoLogin: false }); 
            const userAccount = await wax.login(); 
            login(userAccount)
        } catch(e) {} 
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
            login(identity.account.account_name)
        } catch(e) {} 
    }

    async function login(accountName) { 
        localStorage.setItem('accountName', accountName)
        window.location.replace('/inventory')
    }

    document.querySelector(LOGIN_WAX_BUTTON_SELECTOR).addEventListener('click', loginWax)
    document.querySelector(LOGIN_ANCHOR_BUTTON_SELECTOR).addEventListener('click', loginAnchor)
})()