import { useMemo } from "react";

export const useSearchFilter = (items: any[], searchQuery: string, keyExtractor: (item: any) => string) => {
  return useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return items.filter((item) =>
      keyExtractor(item).toLowerCase().includes(lowerCaseQuery)
    );
  }, [items, searchQuery, keyExtractor]);
};
