import React from "react";

const Output = (props: any) => {
  return (
    <code>
      <pre>{JSON.stringify(props?.queryResult?.data, undefined, 4)}</pre>
    </code>
  )
}

export default Output;