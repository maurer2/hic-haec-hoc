import { useQuery } from '@tanstack/react-query';
import { getDataFromApi } from '@/services/getDataFromApi';

export const useSwapiQuery = (url: string, queryKey: string[] = []) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => getDataFromApi('http://localhost:3000/api/swapi'),
    enabled: true,
  });
}
