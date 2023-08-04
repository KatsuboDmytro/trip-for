export const useWarning = ({ isLoading, error }: { isLoading: boolean; error: Error | null }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div>Error.</div>
    );
  }

  return null;
};