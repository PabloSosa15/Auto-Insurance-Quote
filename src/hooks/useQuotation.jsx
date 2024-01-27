import { useContext } from "react";
import QuotationContext from "../context/QuoteProvider";

const useQuotation = () => {
 return useContext(QuotationContext)
}

export default useQuotation