import { useQuery } from '@tanstack/react-query';
import { fetchWithTimeout } from '@/lib/api';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/posts`;
      return fetchWithTimeout(url);
    },
  });
}
