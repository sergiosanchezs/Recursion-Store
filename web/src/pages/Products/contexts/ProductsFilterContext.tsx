import React, { createContext, useState, useCallback, useContext } from 'react';
import capitalizeWords from '../../../utils/capitalizeWords';
import { SortByProvider } from './SortByContext';

interface Filter {
  sessionTitle: string;
  filterNames: string[];
}

interface ProductsFilterContextData {
  filters: Filter[];
  addFilter(sessionTitle: string, filter: string): void;
  removeFilter(sessionTitle: string, filter: string): void;
  removeAllFilters(): void;
}

const ProductsFilterContext = createContext<ProductsFilterContextData>(
  {} as ProductsFilterContextData,
);

const ProductsFilterProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<Filter[]>([
    { sessionTitle: 'Size', filterNames: [] },
    { sessionTitle: 'Category', filterNames: [] },
  ]);

  const addFilter = useCallback(
    (sessionTitle: string, filter: string) => {
      const newFiltersArray = [...filters];

      const existentSessionTitle = newFiltersArray.find(
        f => f.sessionTitle === sessionTitle,
      );

      if (existentSessionTitle) {
        existentSessionTitle.filterNames.push(capitalizeWords(filter));

        setFilters(newFiltersArray);
      } else {
        setFilters(prevFilters => [
          ...prevFilters,
          { sessionTitle, filterNames: [capitalizeWords(filter)] },
        ]);
      }
    },
    [filters],
  );

  const removeFilter = useCallback(
    (sessionTitle: string, filter: string) => {
      const newFiltersArray = [...filters];

      const filterToRemove = newFiltersArray.find(
        f => f.sessionTitle === sessionTitle,
      );

      if (filterToRemove) {
        for (let i = 0; i < filterToRemove.filterNames.length; i++) {
          if (filterToRemove.filterNames[i] === filter)
            filterToRemove.filterNames.splice(i, 1);
        }
      }

      setFilters(newFiltersArray);
    },
    [filters],
  );

  const removeAllFilters = useCallback(() => {
    const defaultFiltersState = [...filters];

    defaultFiltersState[0].filterNames = [];
    defaultFiltersState[1].filterNames = [];

    setFilters(defaultFiltersState);
  }, [filters]);

  return (
    <ProductsFilterContext.Provider
      value={{ filters, addFilter, removeFilter, removeAllFilters }}
    >
      <SortByProvider>{children}</SortByProvider>
    </ProductsFilterContext.Provider>
  );
};

const useProductsFilter = (): ProductsFilterContextData => {
  const context = useContext(ProductsFilterContext);

  return context;
};

export { ProductsFilterProvider, useProductsFilter };
