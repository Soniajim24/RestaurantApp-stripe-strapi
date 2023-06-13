/* /lib/apollo.js */

import { withData } from "next-apollo";
import { HttpLink } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`, // Server URL (must be absolute)
  })
};
export default withData(config);