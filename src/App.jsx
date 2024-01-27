import AppInsurance from "./components/AppInsurance"
import { QuotationProvider} from './context/QuoteProvider'
function App() {

  return (
    <>
      <QuotationProvider>
        <AppInsurance />
        </QuotationProvider>
    </>
  )
}

export default App
