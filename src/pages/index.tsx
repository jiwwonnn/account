import dynamic from 'next/dynamic'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Skeleton from "@shared/Skeleton";
import Account from '@components/home/Account'
import {BannerSkeleton} from "@components/home/EventBanners";
import Spacing from "@shared/Spacing";

const EventBanners = dynamic(() => import("@components/home/EventBanners"),{
  ssr: false,
  loading : () => <BannerSkeleton />
})

const CreditScore = dynamic(() => import("@components/home/CreditScore"),{
  ssr: false,
  loading : () => null
})

export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
      <Spacing size={8} backgroundColor={'gray100'} />
      <CreditScore />
    </>
  );
}

