
# Intro
This Repo contains source code for Wyre landing pages for wallet partners. Each page is designed to connect to the corresponding wallet to allow its users a rapid, easy way to buy crypto directly into their wallet. 

# Adding Your Wallet
Any Wyre wallet partner can create a sendwyre landing page with a simple pull request. Please let the Wyre team know that you intend to create a landing page, and make a pull request following these steps:

1) Add your logo as an `.svg` file in `/Assets/WalletLogos`
2) Update `/Components/Connectors.js` to include a [web3-react](https://noahzinsmeister.gitbook.io/web3-react/v/latest/connectors) connector for your project. If a connector does not exist for your project, see documentation on [writing a custom web3-react connector](https://noahzinsmeister.gitbook.io/web3-react/v/latest/custom-connectors) (and consider making a pull request on web3-react to add it to the official list!).
3) Update `config.js` to include an object with details about your landing page, following the pattern laid out in the example.
4) Confirm with the Wyre team who will review your landing page and coordinate deployment.