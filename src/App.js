import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import WalletAddress from './pages/components/WalletAddress';
import Menu from './components/Menu';

function App() {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };

  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>🔪 Octo War 🐙</h1>
          <p>Only you can save us from the Killer Octos</p>
        </div>

      </header>

      {/* If not connected, show XYZ */}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img src="posessed.png" id="Octopus Image" alt="Octopus" />
        </div>
      )}

      {/* Show the menu after connection */}
      {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <Menu />
          </div>
        )}
        

      {renderConnectButton()}
    </main>
  );
}

export default App;