"use client"; // Error components must be Client components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      Error
      <button onClick={reset}>Retry</button>
    </div>
  );
}
