<template>
    <div class="home-container">
       
        <div class="home-wrapper">
            <div class="recommend">
                <div class="recommend-left">
                    <img src="../../assets/most.svg" alt="">
                    <div class="msg">Domicon is the first Ethereum-native DA scaling solution, relieving Layer2 from concerns about  performance, cost, and security.</div>
                    <a class="learn-btn" href="https://github.com/domicon-labs/document" target="_blank">Learn Domicon</a>
                </div>
                <div class="recommend-right">
                    <img src="../../assets/recommend.png" alt="">
                </div>
            </div>
            <div class="domicon-info">
                <div class="title">Why Domicon?</div>
                <img class="ellipse" src="../../assets/ellipse.png" alt="">
                <div class="info-items">
                    <div class="item">
                        <img class="item-img" src="../../assets/verified_user.svg" alt="">
                        <div class="item-title">Ethereum-Centric</div>
                        <div class="item-msg">Domicon is an Ethereum L2 that seamlessly communicates with mainnet without third party bridges, offering a secure, trust-minimized DA Layer for all Ethereum L2.</div>
                    </div>
                    <div class="item">
                        <img class="item-img" src="../../assets/security.svg" alt="">
                        <div class="item-title security">Full Security</div>
                        <div class="item-msg">Domicon leverages Rollup architecture with Ethereum Blobs for DA, inheriting Ethereum's robust security features, and uses innovative Aggregated KZG for data auditing, making it the only DA solution ensuring 100% data integrity.</div>
                    </div>
                    <div class="item">
                        <img class="item-img" src="../../assets/blur_on.svg" alt="">
                        <div class="item-title aggregated">Aggregated KZG</div>
                        <div class="item-msg">Domicon utilizes Aggregated KZG to aggregate polynomials, boosting verification efficiency and significantly enhancing system performance and scalability.</div>
                    </div>
                    <div class="item">
                        <img class="item-img" src="../../assets/crossword.svg" alt="">
                        <div class="item-title">Modularity</div>
                        <div class="item-msg">Domicon offers versatility with support for various execution environments like EVM, SolanaVM, and MoveVM, empowering developers to push boundaries beyond infrastructure constraints.</div>
                    </div>
                    <div class="item">
                        <img class="item-img" src="../../assets/open_run.svg" alt="">
                        <div class="item-title scalability">Scalability</div>
                        <div class="item-msg">Domicon enhances scalability with optimized block header architecture and expanded data bodies, supporting structured data for improved programmability and a more developer-friendly platform.</div>
                    </div>
                    <div class="item">
                        <img class="item-img" src="../../assets/savings.svg" alt="">
                        <div class="item-title cheaper">Cheaper to Use</div>
                        <div class="item-msg">Domicon employs Stateless Verification to minimize storage network costs and Aggregated KZG technology to decrease auditing expenses. Utilizing Ethereum as its DA Layer allows Domicon to benefit from cost reductions via EIP4844 and Danksharding, greatly reducing developers' usage costs..</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        handleVoteClick() {
            this.$router.push({ path: '/node/rules'})
        }
    }
}
</script>
<style lang="scss">
@function sn($data){
  @return $data/414*100 + vw;
}
@function fn($data){
  @return $data/1920*100 + vw;
}
@media (min-width:959.95px) {
.home-container{
    width: 100%;
    height: 100%;
    .h5-bg {
        display: none;
    }
    .home-wrapper{
        width: fn(1560);
        margin: 0 auto;
       .recommend {
            display: flex;
            justify-content: space-between;
            .recommend-left {
                img {
                    margin-top: 90px;
                    width: fn(832);
                }
                .msg {
                    max-width: fn(679);
                    margin-top: 52px;
                    font-family: Nunito, sans-serif;
                    font-size: fn(28);
                    font-weight: 400;
                    line-height: 28.8px;
                    text-align: left;
                }
                .learn-btn {
                    font-family: Sofia Sans, sans-serif;
                    font-size: fn(24);
                    font-weight: 700;
                    line-height: 24.7px;
                    text-align: center;
                    width: fn(290);
                    height: fn(68);
                    border-radius: fn(36);
                    background: #FFAD4D;
                    color: #000000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 113px;
                    cursor: pointer;
                }
            }
            .recommend-right {
                margin-left: 100px;
                img {
                    width: fn(693);
                }
            }
       }
        .domicon-info {
            margin-top: 352px;
            position: relative;
            z-index: 1;
            .title {
                font-family: Sofia Sans, sans-serif;
                font-size: fn(103);
                font-weight: 800;
                line-height: 106.81px;
                text-align: center;
                background: linear-gradient(90deg, #FFAD4D 13.5%, #86E1D1 51.5%, #00B3FF 100%);
                -webkit-background-clip: text; /* Safari/Chrome */
                -moz-background-clip: text; /* Firefox */
                color: transparent;
            }
            .ellipse {
                width: fn(1091);
                position: absolute;
                z-index: -1;
                left: 50%;
                transform: translateX(-50%);
                top: 200px;
            }
            .info-items {
                margin-top: 75px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .item {
                    width: fn(496);
                    height: fn(513);
                    border-radius: fn(30);
                    background: linear-gradient(180deg, #191919 0%, #111111 100%);
                    padding-left: fn(37) ;
                    padding-right: fn(41) ;
                    padding-top: fn(65);
                    margin-bottom: 29px;
                    .item-img {
                        width: fn(111);
                        height: fn(111);
                    }
                    .item-title {
                        font-family: Sofia Sans, sans-serif;
                        font-size: fn(32);
                        font-weight: 700;
                        line-height: 38.72px;
                        text-align: left;
                        color: #FFAD4D;
                        margin-top: fn(42);
                        &.security {
                            color: #86E1D1;
                        }
                        &.aggregated {
                            color: #00B2FF;
                        }
                        &.aggregated {
                            color: #00B2FF;
                        }
                        &.scalability {
                            color: #86E1D1;
                        }
                        &.cheaper {
                            color: #00B2FF
                        }
                    }
                    .item-msg {
                        font-family: Nunito, sans-serif;
                        font-size: fn(20);
                        font-weight: 400;
                        line-height: 24.2px;
                        text-align: left;
                        color: #8C8C8C;
                        margin-top: fn(30);
                    }
                }
            }
        }
    }
   
}
}

@media (max-width:959.95px) {
    .home-container{
        width: 100%;
        .home-wrapper{
            width: sn(333);
            margin: 0 auto;
        .recommend {
            position: relative;
            z-index: 1;
                display: flex;
                flex-direction: column-reverse;
                justify-content: space-between;
                .recommend-left {
                    img {
                        margin-top: 90px;
                        width: sn(329);
                    }
                    .msg {
                        margin-top: 24px;
                        font-family: Nunito, sans-serif;
                        font-size: sn(16);
                        font-weight: 400;
                        text-align: left;
                    }
                    .learn-btn {
                        font-family: Sofia Sans , sans-serif;
                        font-size: sn(16);
                        font-weight: 700;
                        line-height: 24.7px;
                        text-align: center;
                        width: sn(190);
                        height: sn(44.4);
                        border-radius: sn(24);
                        background: #FFAD4D;
                        color: #000000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 59px;
                        cursor: pointer;
                    }
                }
                .recommend-right {
                    img {
                        width: sn(333);
                    }
                }
        }
            .domicon-info {
                margin-top: 197px;
                position: relative;
                z-index: 1;
                .title {
                    font-family: Sofia Sans, sans-serif;
                    font-size: sn(38);
                    font-weight: 700;
                    line-height: 39px;
                    text-align: center;
                    background: linear-gradient(90deg, #FFAD4D 13.5%, #86E1D1 51.5%, #00B3FF 100%);
                    -webkit-background-clip: text; /* Safari/Chrome */
                    -moz-background-clip: text; /* Firefox */
                    color: transparent;
                }
                .ellipse {
                    width: fn(1091);
                    position: absolute;
                    z-index: -1;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 200px;
                }
                .info-items {
                    margin-top: 75px;
                    display: flex;
                    flex-direction: column;
                    .item {
                        width: sn(333);
                        height: sn(345);
                        border-radius: sn(30);
                        background: linear-gradient(180deg, #191919 0%, #111111 100%);
                        padding-left: sn(24) ;
                        padding-right: sn(41) ;
                        padding-top: sn(43);
                        margin-bottom: 12px;
                        .item-img {
                            width: sn(75);
                            height: sn(75);
                        }
                        .item-title {
                            font-family: Sofia Sans, sans-serif;
                            font-size: sn(24);
                            font-weight: 700;
                            line-height: 38.72px;
                            text-align: left;
                            color: #FFAD4D;
                            margin-top: sn(28);
                            &.security {
                                color: #86E1D1;
                            }
                            &.aggregated {
                                color: #00B2FF;
                            }
                            &.aggregated {
                                color: #00B2FF;
                            }
                            &.scalability {
                                color: #86E1D1;
                            }
                            &.cheaper {
                                color: #00B2FF
                            }
                        }
                        .item-msg {
                            font-family: Nunito, sans-serif;
                            font-size: sn(14);
                            font-weight: 400;
                            line-height: 17px;
                            text-align: left;
                            color: #8C8C8C;
                            margin-top: sn(20);
                        }
                    }
                }
            }
        }
   
    }
}
</style>