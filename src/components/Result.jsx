import useQuotation from "../hooks/useQuotation";
import { useCallback, useMemo, useRef } from "react";
import { BRANDS, PLANS } from "../constants";
const Result = () => {
  const { result, data } = useQuotation();
  const { brand, plan, year } = data;
  const yearRef = useRef(year)

  const [brandName] = useMemo( () => BRANDS.filter((b) => b.id == Number(brand)),
    [result]
  );
  const [planSelected] = useCallback(PLANS.filter((p) => p.id == Number(plan)),
    [result]
  );

  if (result === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resume</h2>

      <p className="my-2">
        <span className="font-bold">Brand: </span>
        {brandName.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {planSelected.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Year Of Car: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;
