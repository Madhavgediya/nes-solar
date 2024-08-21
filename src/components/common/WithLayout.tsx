import React from "react";

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}: any) {
  return (
    <div>
      <Layout>
        <Component {...rest} />
      </Layout>
    </div>
  );
}
