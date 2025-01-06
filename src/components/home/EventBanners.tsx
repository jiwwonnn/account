import Link from 'next/link'
import Image from 'next/Image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { css } from '@emotion/react'
import useEventBanners from "@components/home/hooks/useEventBanners";
import withSusepnse from '@shared/hocs/withSuspense'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Skeleton from '@shared/Skeleton'

const EventBanners = () => {

  const { data } = useEventBanners()

  return (
    <div>
      <Swiper spaceBetween={'8'}>
        {data?.map((banner)=> {
          return (
            <SwiperSlide key={banner.id}>
              <Link href={banner.link}>
                <Flex style={{ backgroundColor: banner.backgroundColor}} justify={'space-between'}
                css={bannerStyles}
                >
                  <Flex direction={'column'}>
                    <Text bold={true}>{banner.title}</Text>
                    <Text typography={'t6'}>{banner.subTitle}</Text>
                  </Flex>
                  <Image src={banner.iconUrl} width={40} height={40}/>
                </Flex>

              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

const bannerStyles = css`
  padding: 24px;
  border-radius: 8px;
`

export default withSusepnse(EventBanners, {
  fallback : <Skeleton width={'100%'} height={100} style={{borderRadius: 8}}/>
})