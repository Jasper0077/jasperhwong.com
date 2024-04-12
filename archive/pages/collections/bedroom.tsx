import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { PinnableItemConnection } from "types/Github";

import Wrapper from "@ui/commons/Wrapper";
import { Repository } from "types/Github";
import client from "utils/apolloClient";
import { gql } from "@apollo/client";
import { enCommon } from "../../locales/en";
import { chCommon } from "../../locales/ch";
import { useRouter } from "next/router";
import Bedroom from "components/3dModels/Bedroom";

const BedroomPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? enCommon : chCommon;
  return (
    <Wrapper>
      <Bedroom />
    </Wrapper>
  );
};

export default BedroomPage;
