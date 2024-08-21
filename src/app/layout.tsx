'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo.client';


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <ApolloProvider client={client}>
          <AntdRegistry>
            {children}
          </AntdRegistry>
      </ApolloProvider>
    </body>
  </html>
);
export default RootLayout;
