export default function ExampleBlock({
  good,
  bad,
}: {
  good: string;
  bad: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded border p-3">
        <h4 className="font-medium">Good</h4>
        <p className="mt-1 text-sm text-gray-700">{good}</p>
      </div>
      <div className="rounded border p-3">
        <h4 className="font-medium">Bad</h4>
        <p className="mt-1 text-sm text-gray-700">{bad}</p>
      </div>
    </div>
  );
}
