import useQuotation from "../hooks/useQuotation"
export default function Error() {
    const {error} = useQuotation()
  return (
    <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700">
      <p>{error}</p>
    </div>
  )
}
