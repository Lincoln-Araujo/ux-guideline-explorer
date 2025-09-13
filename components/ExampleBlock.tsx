export default function ExampleBlock({
  good,
  bad,
}: {
  good: string;
  bad: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-[15] border p-3 bg-white flex gap-3">
        <img src="/good-icon.svg" alt="check icon" />        
        <div>
          <h4 className="font-medium text-slate-700">Good</h4>
          <p className="mt-1 text-sm text-gray-700">{good}</p>
        </div>
      </div>
      <div className="rounded-[15] border p-3 bg-white flex gap-3">
        <img src="/bad-icon.svg" alt="x icon" />  
        <div>
          <h4 className="font-medium text-slate-700">Bad</h4>
          <p className="mt-1 text-sm text-gray-700">{bad}</p>
        </div>        
      </div>
    </div>
  );
}
