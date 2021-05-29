import Head from 'next/head'
import { useRouter } from 'next/router'
import Syringe from '../components/syringe'
import Twitter from '../components/twitter'
import GitHub from '../components/github'
import styles from '../styles/index.module.css'
import { url } from '../lib/constants'
import { useEffect } from 'react'
import crypto from 'crypto'

const description = '新型コロナワクチン 高齢者等1日当たり接種回数'
const title = '💉レッツゴーワクチン(仮)💉'
const tweetIds = [
  '1398454311663718400',
  '1398456142695571458',
  '1398456864535302145',
  '1398459461077925889',
  '1398465619738075138'
]

export default function Home({
  year,
  month,
  day,
  prevYear,
  prevMonth,
  prevDay,
  avg,
  prevAvg,
  latestChange,
  dateCacheKey,
  ratio,
  dayOfWeek
}) {
  const { query, replace, isReady } = useRouter()
  useEffect(() => {
    if (isReady && (!query.v || query.v !== dateCacheKey) && !query.share) {
      replace(`/?v=${dateCacheKey}`)
    }
  }, [isReady, replace, query.v, query.share, dateCacheKey])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:locale' content='ja_JP' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={title} />
        <meta name='twitter:creator' content='@chibicode' />
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:description' content={description} />
        <meta name='description' content={description} />
        <meta
          property='og:image'
          content={`${url}/api/og/${dateCacheKey}`}
        ></meta>
        <link rel='icon' href='/1f489.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=DotGothic16&display=swap'
          rel='stylesheet'
        />
        {isReady && !query.share && (
          <script
            async
            src='https://platform.twitter.com/widgets.js'
            charset='utf-8'
          />
        )}
      </Head>
      <div className='text-gray-900 xs:tracking-wider'>
        <div className={`min-h-screen flex flex-col ${styles.bg}`}>
          <header className='text-center pb-3 xs:pb-4 sm:pb-5 pt-2 xs:pt-3 sm:pt-4 px-4 text-xl xs:text-2xl sm:text-3xl  bg-green-50'>
            <Syringe />
            <span className={`${styles.greenHighlight} align-middle`}>
              レッツゴーワクチン
              <span className='text-gray-500'>(仮)</span>
            </span>
            <Syringe />
          </header>
          <main className='text-center py-8 px-1 sm:px-2 flex-1 flex items-center'>
            <div className='w-full'>
              <div className='mb-7'>
                <div className='text-base xs:text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3'>
                  コロナワクチン<span className='hidden xs:inline'> </span>
                  高齢者等
                  <span className={styles.blueHighlight}>1日当たり</span>
                  接種回数
                </div>
                <div className='text-lg xs:text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4'>
                  {prevYear}/
                  <span className={styles.blueHighlight}>
                    {prevMonth}/{prevDay}〜{prevYear !== year ? year : ''}
                    {month}/{day}
                  </span>
                  <span className='text-base xs:text-lg sm:text-xl md:text-2xl ml-1'>
                    の直近1週間平均
                  </span>
                </div>
                <div className='text-xxs xs:text-xs sm:text-sm md:text-base text-gray-500'>
                  ※四捨五入。医療従事者を除く(
                  <a
                    href='https://cio.go.jp/c19vaccine_opendata'
                    target='_blank'
                    className='hover:underline'
                    rel='noopener'
                  >
                    データ元
                  </a>
                  未対応)
                </div>
              </div>
              <div className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 md:mb-8'>
                <Syringe />
                <span className='align-middle'>
                  <span className={styles.yellowHighlight}>約{avg}万回</span>
                </span>
                <Syringe />
              </div>
              <div className='text-base xs:text-lg sm:text-xl md:text-2xl sm:mb-10 mb-8 md:mb-12'>
                {month}/{day}({dayOfWeek}):
                <span className={`${styles.greenHighlight} ml-1`}>
                  +{latestChange}万
                </span>
              </div>
              <div className='text-lg xs:text-xl sm:text-2xl md:text-3xl'>
                前週平均:
                <span className={styles.yellowHighlight}>約{prevAvg}万回</span>
                <span className='text-base xs:text-lg sm:text-xl md:text-2xl ml-1'>
                  (前週比:
                  <span
                    className={`${
                      ratio > 1 ? styles.greenHighlight : styles.redHighlight
                    }`}
                  >
                    {ratio}倍
                  </span>
                  )
                </span>
              </div>
              {query.share ? (
                <div id='share' />
              ) : (
                <div className='mt-12'>
                  <div className='flex justify-center mb-3'>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `${url}/?v=${dateCacheKey}`
                      )}`}
                      className='mx-1 border border-transparent focus:ring-offset-2 inline-flex items-center text-white px-5 text-sm xs:text-base sm:text-lg py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400 hover:border-gray-900'
                      style={{ background: '#1D9BF0' }}
                      target='_blank'
                      rel='noopener'
                    >
                      <span className='inline-flex mr-1 -ml-1 text-2xl'>
                        <Twitter />
                      </span>
                      ツイート
                    </a>
                    <a
                      href='https://github.com/chibicode/lets-go-vaccine-jp'
                      className='mx-1 border border-transparent focus:ring-offset-2 inline-flex items-center px-4 sm:px-5 text-sm xs:text-base sm:text-lg py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400 bg-gray-100 hover:border-gray-900'
                      target='_blank'
                      rel='noopener'
                    >
                      <span
                        className='inline-flex mr-1 -ml-1 text-3xl'
                        style={{ marginTop: '-1px' }}
                      >
                        <GitHub />
                      </span>
                      ソース
                      <span className='sm:text-xs text-xxs inline-flex mt-1'>
                        (Next.js)
                      </span>
                    </a>
                  </div>
                  <div className='text-xxs xs:text-xs sm:text-sm text-gray-500'>
                    <a
                      href='https://cio.go.jp/c19vaccine_dashboard'
                      className='hover:underline'
                      target='_blank'
                      rel='noopener'
                    >
                      詳しい接種状況を見る(政府CIOポータル) →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </main>
          <footer className='bg-gray-50'>
            <div className='text-center py-4 text-gray-500 text-xxs leading-loose px-3 sm:px-4'>
              データ入力の遅れにより過去の接種回数が変更される場合があります。
              <br className='hidden xs:block lg:hidden' />
              データ:
              <a
                href='https://cio.go.jp/c19vaccine_opendata'
                target='_blank'
                className='hover:underline text-gray-600'
                rel='noopener'
              >
                政府CIOポータル「新型コロナワクチンの接種状況」
              </a>
              (
              <a
                href='https://creativecommons.org/licenses/by/4.0/deed.ja'
                target='_blank'
                className='hover:underline'
                rel='noopener'
              >
                CC BY 4.0
              </a>
              )<span className='inline xs:hidden md:inline'>・</span>
              <br className='hidden xs:block md:hidden' />
              絵文字:
              <a
                href='https://github.com/twitter/twemoji'
                target='_blank'
                className='hover:underline text-gray-600'
                rel='noopener'
              >
                Twemoji
              </a>
              (
              <a
                href='https://creativecommons.org/licenses/by/4.0/'
                target='_blank'
                className='hover:underline'
                rel='noopener'
              >
                CC BY 4.0
              </a>
              )・作成:
              <a
                href='https://twitter.com/chibicode'
                target='_blank'
                className='hover:underline text-gray-600'
                rel='noopener'
              >
                @chibicode
              </a>
            </div>
          </footer>
        </div>
        {tweetIds.length > 0 && (
          <div className='bg-gray-50 pt-6 pb-12 px-4'>
            {tweetIds.map((tweetId) => (
              <div className='py-5' key={tweetId}>
                <blockquote
                  className='twitter-tweet'
                  data-conversation='none'
                  data-align='center'
                  data-lang='ja'
                  data-dnt='true'
                  aria-label='ツイート'
                >
                  <a href={`https://twitter.com/chibicode/status/${tweetId}`} />
                </blockquote>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'http://vrs-data.cio.go.jp/vaccination/opendata/latest/summary_by_date.csv'
  )
  if (!res.ok) {
    throw new Error()
  }
  const text = (await res.text()).trim()
  const data = text
    .split('\n')
    .slice(1)
    .map((x) => x.split(/[\-,]+/).map((x) => parseInt(x, 10)))

  if (data.length <= 1 || data[data.length - 1].length < 5) {
    throw new Error()
  }

  const latestChange = Math.round(
    (data[data.length - 1][3] + data[data.length - 1][4]) / 10000
  )

  const avg = Math.round(
    data
      .slice(data.length - 7)
      .map((x) => x[3] + x[4])
      .reduce((prev, current) => prev + current) / 70000
  )

  const prevAvg = Math.round(
    data
      .slice(data.length - 14, data.length - 7)
      .map((x) => x[3] + x[4])
      .reduce((prev, current) => prev + current) / 70000
  )

  if (latestChange < 0 || avg <= 0 || prevAvg <= 0) {
    throw new Error()
  }

  const year = data[data.length - 1][0]
  const month = data[data.length - 1][1]
  const day = data[data.length - 1][2]

  const prevYear = data[data.length - 7][0]
  const prevMonth = data[data.length - 7][1]
  const prevDay = data[data.length - 7][2]

  const dateCacheKey = crypto
    .createHash('sha256')
    .update(`${year}-${month}-${day}`)
    .digest('hex')
    .slice(0, 6)

  const dayOfWeek = new Date(year, month - 1, day).toLocaleString('ja-JP', {
    weekday: 'short'
  })

  const ratio = Math.round((avg / prevAvg) * 10) / 10
  return {
    props: {
      latestChange,
      avg,
      year,
      month,
      day,
      prevAvg,
      dateCacheKey,
      prevYear,
      prevMonth,
      prevDay,
      ratio,
      dayOfWeek
    },
    revalidate: 300
  }
}
