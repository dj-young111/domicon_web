<template>
    <div class="header-layout-container container-web">
        <div class='header-layout-left'>
            <div class="header-layout-img-wrapper" @click="gohome">
                <img src="../assets/logo.svg"/>
            </div>
            <a-dropdown placement="bottomCenter">
                <div class="dev">Developers</div>
                <a-menu slot="overlay">
                <a-menu-item>
                    <a href="https://github.com/domicon-labs/document/blob/main/pages/add-domicon-from-source_english.md" target="_blank">Run a Node</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="https://github.com/domicon-labs/document/blob/main/domiconRollup/Domicon-OP-Stack-EN.md" target="_blank">Integrated with <br> Domicon</a>
                </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown placement="bottomCenter">
                <div class="about">About</div>
                <a-menu slot="overlay">
                <a-menu-item>
                    <a href="https://docsend.com/view/b356nwj6k6mpukkp" target="_blank">Whitepaper</a>
                </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
        <div class='header-layout-content-h5'>
            <img src="../assets/menu.svg" class="right-icon" alt="" @click="showDrawer">
            <!-- <a-icon type="align-right" class="right-icon" @click="showDrawer"/> -->
        </div>
        <a-drawer
            title=""
            placement="top"
            :closable="false"
            :visible="visible"
            @close="onClose"
            height='100%'
            
        >
        <div class='drawer-content' >
            <div class='header-layout-left h5'>
                <div class="header-layout-img-wrapper" @click="gohome">
                    <img src="../assets/logo.svg"/>
                </div>
                <div class="close">
                    <img src="../assets/close.svg" alt="" @click="onClose">
                </div>
            </div>
            <div class="list-items">
                <div class="item">
                    <div class="item-title">Developers</div>
                    <div class="item-text">
                        <a href="https://github.com/domicon-labs/document/blob/main/pages/add-domicon-from-source_english.md" target="_blank">Run a Node</a>
                        <a href="https://github.com/domicon-labs/document/blob/main/domiconRollup/Domicon-OP-Stack-EN.md" target="_blank">Integrated with Domicon</a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">About</div>
                    <div class="item-text">
                        <a href="https://docsend.com/view/b356nwj6k6mpukkp" target="_blank">Whitepaper</a>
                    </div>
                </div>
            </div>
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
        </a-drawer>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            account: '',
            num: 1,
            visible: false,
            languageValue: 'zh-CN'
        }
    },
    filters: {
      getAccount(account) {
          return account.substr(0, 6) + '...' +  account.substr(38);
      }
    },
    mounted() {
    },
    methods: {
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
        go(path) {
            this.visible = false;
            this.$router.push(path)
        },
        gohome() {
            this.$router.push('/')
        },
    }
}
</script>

<style lang="scss" scoped>
@function sn($data){
  @return $data/414*100 + vw;
}
@function fn($data){
  @return $data/1920*100 + vw;
}
@media (min-width:959.95px) {
    .header-layout-container{
        width: fn(1560);
        height: 180px;
        margin-left: fn(180);
        display: flex;
        flex-direction: row;
        align-items: center;
        .header-layout-left{
            display: flex;
            flex-direction: row;
            .header-layout-img-wrapper{
                width: 210px;
                height: 47px;
                img{
                    width: 100%;
                }
            }
            .dev {
                font-family: Sofia Sans;
                font-size: 32px;
                font-weight: 400;
                margin-left: fn(144);
                cursor: pointer;
                // background: linear-gradient(90deg, #FFAD4D 13.5%, #86E1D1 51.5%, #00B3FF 100%);
                // -webkit-background-clip: text; /* Safari/Chrome */
                // -moz-background-clip: text; /* Firefox */
                // color: transparent;
            }
            .about {
                font-family: Sofia Sans;
                font-size: 32px;
                font-weight: 400;
                margin-left: fn(118);
                cursor: pointer;
            }
        }
    .header-layout-content-h5 {
        display: none;
    }
    .header-layout-right{
        width: 200px;
    }
}
}
@media (max-width:959.95px) {
    .header-layout-container{
        width: sn(356);
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 40px;
        margin-bottom: 70px;
        justify-content: space-between;
        position: relative;
        z-index: 1;
        .header-layout-left{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .header-layout-img-wrapper{
                width: sn(137);
                img{
                    width: 100%;
                }
            }
            .dev {
                display: none;
            }
            .about {
                display: none;
            }
        }
        .header-layout-content-h5 {
            display: flex;
        }
    .header-layout-right{
        display: none;
    }
    .right-icon {
        width: sn(57);
    }
    .ant-drawer-content {
        background-color: #000 !important;
    }
   
}
 .drawer-content {
        display: flex;
        flex-direction: column;
         width: sn(356);
        .header-layout-left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 60px;
            padding-left: sn(20);
            .header-layout-img-wrapper {
                img {
                    width: sn(137);
                }
            }
            .close {
                img {
                    width: sn(57);
                }
            }
        }
        .list-items {
            padding-left: sn(20);
            .item-title {
                font-family: Sofia Sans;
                font-size: sn(26);
                font-weight: 700;
                line-height: 26.75px;
                text-align: left;
                color: #FFAD4D;
            }
            .item-text {
                margin-top: 20px;
                margin-left: 40px;
                display: flex;
                flex-direction: column;
                a {
                    font-family: Sofia Sans;
                    font-size: sn(22);
                    font-weight: 400;
                    line-height: 22.64px;
                    text-align: left;
                    color: #fff;
                    margin-bottom: 28px;

                }
            }

        }
        .media {
            position:absolute;
            bottom: 82px;
            left: 40px;
            .twitter {
                img {
                    width: sn(35);
                    margin-right: sn(19);
                }
            }
            .telegram {
                img {
                    width: sn(36);
                    margin-right: sn(23);
                }
            }
            .medium {
                img {
                    width: sn(44);
                }
            }
        }
       
    }
   
}

</style>