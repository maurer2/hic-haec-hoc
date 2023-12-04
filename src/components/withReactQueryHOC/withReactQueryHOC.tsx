import React from "react";

import { useSwapiQuery } from "@/queries/useSwapiQuery/useSwapiQuery";

// todo add proper typing
export const withReactQueryHOC = (WrappedComponent: any) => {
  // todo add proper typing
  return function WrappedComponentWithReactQuery(props: any) {
    const url = props?.url;
    const queryResult = useSwapiQuery(url, ["swapi"]);

    if (queryResult.isLoading || queryResult.isFetching) {
      return <span>Loading</span>;
    }

    return (
      <WrappedComponent {...props} queryResult={queryResult} />
    )
  }
};

export default withReactQueryHOC;
