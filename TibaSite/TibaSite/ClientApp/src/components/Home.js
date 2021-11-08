import React, { Component, setState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import './Home.css';
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            movie1: CommonMethods.memoryMethodURL + '\\ClientApp\\src\\media\\video\\SampleMovie.mp4'
        };
    }

    async componentDidMount() {

    }

    async getMemory(path) {

    };

    render () {
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display&display=swap" rel="stylesheet" />
                <div className="mainV">
                    <h1>論理的思考は強さになる</h1>
                    <video autoPlay loop muted >
                        <source src={require('../media/video/SampleMovie2.mp4')} type="video/mp4" />
                    </video>
                </div>
                <div className="mainV">
                    <h1>強さは論理的思考にある</h1>
                    <video autoPlay loop muted >
                        <source src={require('../media/video/SampleMovie.mp4')} type="video/mp4" />
                    </video>
                </div>

                  <section className="mb-5 position-relative">
                    <div className="jumbotron wf-penta rounded-0">
                      <div className="container py-4">
                            <h1 className="wf-slope-text pb-lg-4 font-weight-bold mb-3 white-text">プログラム×ゲーム！？</h1>
                        <div className="row">
                          <h2 className="col-lg-6 font-weight-bold">
                                    <p className="d-block d-lg-none white-text">フォートナイト千葉講座</p>
                                    <p className="d-none d-lg-block white-text">フォートナイト千葉講座<br className="d-none d-lg-block" />
                                        <span className="float-right white-text">プログラミング千葉講座</span>
                                    </p>
                          </h2>
                        </div>
                            <p className="col-lg-8 white-text">
                                ・ フォートナイトでどうしたら敵に勝てるのか？徹底攻略！ひとりひとり違う講義内容！動画ファイルから傾向を分析！
                        </p>
                            <p className="col-lg-8 d-none d-lg-block white-text">
                                ・ IT業界に転職・就職するあなたをサポート！実際にアプリを開発して、GitHubにコードを公開！あなたのポートフォリオを作りましょう！
                        </p>
                      </div>
                    </div>
                    <div className="mx-auto" style={{ bottom: '40px', left: 0, right: 0, zIndex:'999px !important ',}}>
                        <div className="text-center">
                            <a className="btn btn-dark btn-lg p-4" href="https://twitter.com/NeetTiba_Vtuber" role="button">
                                千葉講座をお申し込み
                                <i className="fas fa-arrow-right ml-3"></i>
                            </a>
                        </div>
                    </div>
                    </section>
    
                    {/*３つの円*/}
                    <section className="mb-5">
                    <div className="container">
                      <div className="row">
                        <h3 className="col-md-4">
                          <p className="circle">受講生<br/>満足度<br/>98％</p>
                        </h3>
                        <h3 className="col-md-4">
                          <p className="circle">安心の<br/>アフター<br/>フォロー</p>
                        </h3>
                        <h3 className="col-md-4">
                          <p className="circle">変化を<br/>実感<br/>できる</p>
                        </h3>
                      </div>
                    </div>
                </section>

                <section className="container-fluid text-center bg-secondary py-5">
                <h3 className="text-white font-weight-bold ls mb-0">
                    あなたは今の自分で本当に満足していますか？
                </h3>
                </section>

                <section className="py-5">
                <div className="container">
                    <p>
                            2017年から日本で流行した「APEX Legends」「Fortnite」「PUBG」「荒野行動」、これらのシューティングゲームは一世を風靡しました。
                            切磋琢磨して強くなりたいと願うユーザーが増加しました。
                            それに伴って、e-sports業界が発足。今では様々な企業がスポンサーとなり、大会を盛り上げています。
                    </p>

                    <div className="row mt-4">
                    <div className="col-lg-9 col-12 order-lg-2">
                        <div className="wf-balloon wf-balloon-left px-4">
                        <h3 className="font-weight-bold">自分が嫌いで自信がないAさん</h3>
                        <p className="font-weight-bold text-muted">サブタイトル</p>
                        <p>木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の位置も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 order-lg-1">
                        <img src={require('../media/img/personA.jpg')} alt="" className="img-fluid rounded-circle mt-2" />
                    </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-lg-9 col-12">
                        <div className="wf-balloon wf-balloon-right px-4">
                        <h3 className="font-weight-bold">人生に夢や希望が持てないBさん</h3>
                        <p className="font-weight-bold text-muted">サブタイトル</p>
                        <p>木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の位置も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={require('../media/img/personB.jpg')} alt="" className="img-fluid rounded-circle mt-2" />
                    </div>
                    </div>
                </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <h3 className="border-bottom border-secondary col-lg-8 bw-2 p-3 mb-3">「フォートナイト千葉講座」はこんな方におすすめ</h3>
                        <p>日々、様々なお問い合わせが来ています。</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <div className="card-body bg-light p-4">
                                        <p className="card-subtitle text-muted text-center">初心者の方</p>
                                        <h5 className="card-title font-weight-bold mt-2 text-center">建築ってどうしたらいいの？</h5>
                                        <p className="card-text">・建築ができないため、何もできずにうまい人にやられてしまう・・・</p>
                                        <p className="card-text">→あなたにあった初歩的な技と初歩的な立ち回りを教えます！</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <div className="card-body bg-light p-4">
                                        <p className="card-subtitle text-muted text-center">中級者の方</p>
                                        <h5 className="card-title font-weight-bold mt-2 text-center">建築はできるけど、立ち回りが難しい</h5>
                                        <p className="card-text">・エイム勝負や死角から打たれてやられてしまう・・・</p>
                                        <p className="card-text">→ヘイト管理、チーム戦術、即時判断、その他練習メニューなど、更に細かい立ち回りを教えます！</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <div className="card-body bg-light p-4">
                                        <p className="card-subtitle text-muted text-center">上級者の方</p>
                                        <h5 className="card-title font-weight-bold mt-2 text-center">大会で実績を目指したい。進行やキルムーブを行いたい。</h5>
                                        <p className="card-text">チャンピオンリーグに到達したが、プロに負けてしまう。</p>
                                        <p className="card-text">→動画ファイルを送っていただきます。それに対して千葉がより細かい指摘を行います。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="border-bottom border-secondary col-lg-8 bw-2 p-3 mb-3">「プログラミング千葉講座」はこんな方におすすめ</h3>
                        <p>日々、様々なお問い合わせが来ています。</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <div className="card-body bg-light p-4">
                                        <p className="card-subtitle text-muted text-center">学生さん</p>
                                        <h5 className="card-title font-weight-bold mt-2 text-center">IT業界の動向が知りたい</h5>
                                        <p className="card-text">IT業界の動向や知り合いのIT業界の方から得た情報をお伝えします。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <div className="card-body bg-light p-4">
                                        <p className="card-subtitle text-muted text-center">学生さんなど</p>
                                        <h5 className="card-title font-weight-bold mt-2 text-center">アプリ開発について教えてほしい</h5>
                                        <p className="card-text">ゲームエンジンであるUnityやWebアプリケーション開発についての質問に答えます。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <div className="card-body bg-light p-4">
                                        <p className="card-subtitle text-muted text-center">大人の方</p>
                                        <h5 className="card-title font-weight-bold mt-2 text-center">開発を依頼できますか？</h5>
                                        <p className="card-text">小規模開発であればお手伝いすることもございます。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-secondary text-white">
                    <div className="container">
                        <div className="w-75 mx-auto">
                            <h3 className="text-center font-weight-bold ls mb-3">
                                フォートナイト千葉講座・プログラミング千葉講座
                        </h3>
                            <div className="container">
                                <div className="row">
                                    <h4 className="col-lg-8 text-center border p-4 h5 font-weight-bold">
                                        1時間のマンツーマン指導
                            </h4>
                                    <p className="col-lg-4 text-center h2 p-3 font-weight-bold">
                                        1,000 <small>円&ensp;/&ensp;1h</small></p>
                                </div>
                            </div>
                            <a href="https://twitter.com/NeetTiba_Vtuber" className="btn btn-outline-light active btn-block btn-lg p-3" role="button" aria-pressed="true">
                                千葉講座に申し込む<i className="fas fa-arrow-right ml-3"></i>
                            </a>
                        </div>
                    </div>
                </section>

                  <section className="container-fluid text-center bg-secondary py-5">
                    <h3 className="text-white font-weight-bold ls mb-0">
                      人は自分ひとりきりでは決して変われません！
                    </h3>
                  </section>


                  <div className="container-fluid text-center bg-light wf-bg-balloon">
                    <h3 className="font-weight-bold ls p-3">
                      同志とともに切磋琢磨しませんか？
                    </h3>
                  </div>

                    <section className="py-5">
                        <div className="container">
                            <div className="row">

                            <div className="row">
                                <img src={require('../media/img/openChat1.png')} alt="" className="img-fluid h-100" />
                            </div>

                            <div className="col-md-12">
                                <h3 className="text-center font-weight-bold h2 mb-3">
                                千葉のオープンチャット<br className="d-none d-lg-block"/>(Fortnite専用)
                                </h3>
                                <p className="lead text-center">千葉軍団</p>
                                <p className="mb-3">
                                    主に千葉のフレンドで構成されているフォートナイト専用のオープンチャット。<br />
                                    全員が大人の方で構成されており、優しくて礼儀ある方です！<br />
                                    なお、匿名アカウント(カスタムネーム)で参加して頂くので、LINEアカウントが特定されることはありません。<br />
                                    ご安心ください。<br />
                                    また、マナーがあまりにも悪い場合は強制退会という処置を行う場合がございますのでご了承ください。
                                </p>
                                <h4 className="text-center border p-4 h5">
                                    千葉のオープンチャット
                                </h4>

                                <div className="row mt-2">
                                <div className="col-md-7">
                                        <a href="https://twitter.com/NeetTiba_Vtuber" className="btn btn-dark btn-block btn-lg mb-3 font-weight-bold p-3" role="button" aria-pressed="true">
                                    いますぐ参加する<i className="fas fa-arrow-right ml-3"></i>
                                    </a>
                                </div>
                                <div className="col-md-5">
                                        <a href="https://twitter.com/NeetTiba_Vtuber" className="btn btn-secondary btn-block btn-lg font-weight-bold p-3" role="button" aria-pressed="true">詳しく見る<i className="fas fa-arrow-right ml-3"></i>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-5 bg-light">
                        <div className="container py-5">
                            <div className="row mb-5">
                            <div className="col-md-6 mb-3">
                                <img src={require('../media/img/boss1.png')} alt="boss" className="img-fluid h-100" />
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-center font-weight-bold mb-3">代表挨拶</h3>
                                <p className="text-center mb-3 h5">ニートプログラマ千葉</p>
                                <p>
                                    こんにちは。<br />
                                    Vtuberとなったニートプログラマ千葉と申します。<br />
                                    正社員プログラマー・塾講師という経験を生かして様々な活動を展開しています。<br />
                                    人はみんな多種多様な能力を持っています。なかでも地頭として求められる論理的思考はゲームやプログラミングにおいてかなり重要な力として考えられています。<br />
                                    IT業界の方々はゲームが好きな方が多いです。それは論理的思考力が直結してゲームの強さとして現れ、実力を実感しやすいからかもしれません。また、プログラミングにおいてもその力が製品の品質に直結します。<br />
                                    切磋琢磨し、文武両道（プログラミング・ゲーム）となれるように自分自身精進しています。<br />
                                    また、ゲームから人生を学ぶこともできると考えています。<br />
                                    人とコミュニケーションが十分でなければ、ゲームでもプログラミングでも成果は得られません。<br />
                                    社会とゲームは似ています。<br />
                                </p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <p>
                                    東京で出生。3才から神戸市に移住。またこの頃「Windows95・98・2000」を操作し、ブラウザの検索欄にローマ字で文字を入力していた。<br />
                                    ゲームも毎日欠かさずやり続けていた。<br />
                                    9才の頃、「カメムシの生息分布」というPowerPointのプレゼン資料が金賞となり、青少年科学館に展示された。<br />
                                    18才から大手の塾講師で理系科目を担当する。<br />
                                    21才のとき、分校での人気No1.講師として活躍した。<br />
                                    21才の時、大学をやめて独学で初めてプログラミングに触れる。<br />
                                    22才の時、アプリをリリースし、正社員プログラマーとして勤務する。<br />
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={require('../media/img/boss2.jpg')} alt="" className="img-fluid h-100" />
                            </div>
                            </div>
                        </div>
                    </section>

                <section className="py-5">
                    <div className="container py-4">
                        <h3 className="border-bottom border-secondary col-lg-8 bw-2 p-3 mb-3">更新履歴</h3>
                        <div className="container">
                            <dl className="h5">
                                <hr/>
                                    <dt>2021/11/06 <span className="badge badge-secondary">サイト制作開始</span></dt>
                                    <dd><a href="#"></a></dd>
                            </dl>
                            <p className="mt-2 text-right"><a href="./sample/" className="icon-link">一覧を見る</a></p>
                        </div>
                    </div>
                </section>
          </div>
      );
    }
}
