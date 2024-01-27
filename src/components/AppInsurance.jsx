import Formulary from "./Formulary"
import Spinner from "./Spinner"
import Result from "./Result"
import useQuotation from "../hooks/useQuotation"

export default function AppInsurance() {

    const {loading} = useQuotation()
  return (
      <>
          <header className="my-10">
              <h1 className="text-white text-center text-4xl font-black">
              Auto Insurance Quotation
              </h1>
          </header>
          
          <main className="bg-white md:2/3 lg:2/4 mx-auto shadow rounded-lg p-10">
              <Formulary />

              {loading ? <Spinner/> : <Result/>}
          </main>
      </>
  )
}
