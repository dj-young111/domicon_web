<template>
    <div class="footer-layout-container">
        <div class="footer-layout-wrapper">
            <div class="logo-msg">
                <img class="logo" src="../assets/logo.svg"/>
                <div class="media">
                    <a class="twitter" href="https://twitter.com/Domiconlabs" target="_blank">
                        <img src="../assets/twitter.svg" alt="">
                    </a>
                    <a class="telegram"  href="">
                        <img src="../assets/telegram.svg" alt="">
                    </a>
                    <a href="" class="medium">
                        <img src="../assets/vector.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="right-item">
                <div class="msg-items">
                    <div class="title">Developers</div>
                    <a class="msg-item" href="https://github.com/domicon-labs/document/blob/main/pages/add-domicon-from-source_english.md" target="_blank">Run a Node</a>
                    <a class="msg-item" href="https://github.com/domicon-labs/document" target="_blank">Docs</a>
                    <a class="msg-item" href="https://github.com/domicon-labs" target="_blank">Github</a>
                </div>
                <div class="msg-items" >
                    <div class="title">About</div>
                    <a class="msg-item" href="https://docsend.com/view/b356nwj6k6mpukkp" target="_blank">Whitepaper</a>
                    <a class="msg-item" href="" target="_blank">Careers</a>
                </div>
                <div class="msg-items" >
                    <div class="title">Contact</div>
                    <a class="msg-item" href="https://github.com/domicon-labs/document" target="_blank">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@function sn($data){
  @return $data/414*100 + vw;
}
@function fn($data){
  @return $data/1920*100 + vw;
}
@media (min-width:959.95px) {
    .footer-layout-container{
        width: 100%;
        border-top: 5px solid #191919;
        margin-top: 182px;
        .footer-layout-wrapper{
            width: fn(1560);
            margin: 0 auto;
            padding: 93px 80px 72px 0px;
            display: flex;
            flex-direction: row;
            // justify-content: space-between;
            align-items: center;
            .logo-msg {
                min-height: 200px;
                .media {
                    margin-top: 50px;
                    display: flex;
                    align-items: center;
                    .twitter {
                        margin-right: fn(22.8);
                    }
                    .telegram {
                        margin-right: fn(27);
                    }
                }
            }
            .right-item {
                display: flex;
            }
            .msg-items {
                display: flex;
                flex-direction: column;
                margin-left: fn(187);
                min-height: 200px;
                .title {
                    font-family: Sofia Sans;
                    font-size: fn(32);
                    font-weight: 400;
                    line-height: 32.93px;
                    text-align: left;
                    color: #fff;
                }
                .msg-item {
                    font-family: Sofia Sans;
                    font-size: fn(25);
                    font-weight: 300;
                    line-height: 25.72px;
                    text-align: left;
                    color: #8C8C8C;
                    margin-top: 20px;
                }
            }
        }
    }
}
@media (max-width:959.95px) {
     .footer-layout-container{
        width: 100%;
        border-top: 3px solid #191919;
        margin-top: 97px;
        .footer-layout-wrapper{
            width: sn(333);
            margin: 0 auto;
            // padding: 93px 80px 72px 0px;
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
            align-items: center;
            .logo-msg {
                // min-height: 200px;
                margin-top: 47px;
                margin-bottom: 41px;
                display: flex;
                .logo {
                    width: sn(140);
                }
                .media {
                    // margin-top: 50px;
                    display: flex;
                    align-items: center;
                    .twitter {
                        margin-left: sn(83);
                        margin-right: sn(13);
                        img {
                            width: sn(23);
                        }
                    }
                    .telegram {
                        img {
                            width: sn(23);
                        }
                        margin-right: sn(15);
                    }
                    .medium {
                        img {
                            width: sn(28);
                        }
                    }
                }
            }
           .right-item {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            .msg-items {
                display: flex;
                flex-direction: column;
                min-height: 180px;
                .title {
                    font-family: Sofia Sans;
                    font-size: sn(16);
                    font-weight: 400;
                    line-height: 16px;
                    text-align: left;
                    color: #fff;
                }
                .msg-item {
                    font-family: Sofia Sans;
                    font-size: sn(13);
                    font-weight: 300;
                    line-height: 13.38px;
                    text-align: left;
                    color: #8C8C8C;
                    margin-top: 16px;
                }
            }
        }
    }
}

</style>
