# [💉レッツゴーワクチン(仮)💉](https://lets-go-vaccine-jp.vercel.app)

### [https://lets-go-vaccine-jp.vercel.app](https://lets-go-vaccine-jp.vercel.app)

日本における新型コロナワクチン高齢者等1日当たり接種回数がひと目でわかるダッシュボードを、[政府のオープンデータ](https://cio.go.jp/c19vaccine_opendata)を基に自動生成しています。

- [Next.js](https://nextjs.org)を用いて開発し、作者([@chibicode](https://twitter.com/chibicode))の勤務先である[Vercel](https://vercel.com)にデプロイしています
- [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching)を用いることでページを静的生成しつつ、一定期間を経ると自動で更新されるようにしています
- URLをシェアするとページのスクリーンショットを基に`og:image`が自動生成されます([コード](pages/api/og.js))

### 詳細

- **データ:** [政府CIOポータル「新型コロナワクチンの接種状況」](https://cio.go.jp/c19vaccine_opendata) ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ja))
- **絵文字:** [Twemoji](https://github.com/twitter/twemoji) ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/))
- **作成**: 上杉周作 ([@chibicode](https://twitter.com/chibicode))
- **プライバシーポリシー**: 作者は個人情報は一切収集していません。
- **ライセンス**: [MIT](LICENSE.md)
- **クレジット**: [参考1](https://twitter.com/i/events/1396010787966099456)(ご退院おめでとうございます)・[参考2](https://ja.wikipedia.org/wiki/%E8%83%8C%E6%B0%B4%E3%81%AE%E9%80%86%E8%BB%A2%E5%8A%87)・その他各種まとめサイトや匿名掲示板への投稿
- **新型コロナワクチンについて**: [厚生労働省のページをご覧ください](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccine_00184.html)