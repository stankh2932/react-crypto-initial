
import { CryptoContextProvider } from './components/context/crypto-context';
import AppLayout from './components/layout/AppLayout';


export default function App() {
  return (  
    <CryptoContextProvider>
  <AppLayout/>
</CryptoContextProvider>
)
}
