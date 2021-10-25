import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatar } from 'taro-ui'

import { Get } from '../../global-data/index'
import { OptionsCard } from '../../components/options_card'
import avatar from '../../asset/images/icon/default-avatar.png'
import pendingPaymentIcon from '../../asset/images/icon/pending-payment.png'
import pendingReceiptIcon from '../../asset/images/icon/pending-receipt.png'
import pendingAppraiseIcon from '../../asset/images/icon/pending-appraise.png'
import returnExchangeIcon from '../../asset/images/icon/return-exchange.png'

import * as homeApi from './service';
import './index.css'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarUrl: avatar,
            nickName: Get('languages').defaultName,
            hasUserInfo: false,
            loading: true,
            activity: '',
            phone: Get('languages').bindPhone
        }
    }

    componentDidMount() {
        this.loading()
    }

    componentDidShow() {
        this.loading()
    }

    async loading() {
        Taro.showLoading({
            title: Get('languages').loading,
        })

        const activityImages = await homeApi.activityImages()

        this.setState({
            activity: activityImages.data.activity,
            loading: false,
        })

        Taro.hideLoading()
    }

    getUserProfile() {
        wx.getUserProfile({
            desc: 'xxx',
            success: (res) => {
                console.log(res)
                this.setState({
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                    hasUserInfo: true
                })
                console.log(this.state.userInfo)
            }
        })
    }

    login() {
        Taro.login({
            success: function (res) {
                if (res.code) {
                    const code = res.code
                    console.log(code)

                    Taro.request({
                        url: '192.168.124.13:8000/api/v1/user/login',
                        data: {
                            code: res.code
                        },
                        success: (res) => { console.log(res.data) },
                    })
                } else {
                    console.log(res.errMsg)
                }
            }
        })
    }

    render() {
        const ordersCardContent = [
            {text:Get('languages').pendingPayment, icon:pendingPaymentIcon,path:'/pages/orders/index'},
            {text:Get('languages').pendingReceipt, icon:pendingReceiptIcon,path:'/pages/orders/index'},
            {text:Get('languages').pendingAppraise, icon:pendingAppraiseIcon,path:'/pages/orders/index'},
            {text:Get('languages').returnExchange, icon:returnExchangeIcon,path:'/pages/orders/index'},
        ]

        return (
            this.state.loading
                ? null
                : <View>
                    <View id='nameCard' className='card' onClick={this.getUserProfile.bind(this)}>
                        {/* <View onClick={this.login.bind(this)}>
                    login
                </View> */}
                        <AtAvatar
                            circle
                            size='large'
                            image={this.state.avatarUrl}
                        />
                        <View id='name'>
                            {this.state.nickName}
                        </View>
                        <View id='phone'>
                            {this.state.phone}
                        </View>
                    </View>
                    <View id='content'>
                        <OptionsCard
                            title={Get('languages').myorDers}
                            headNavigate='true'
                            headNavigateText={Get('languages').allDers}
                            headNavigatePath='/pages/orders/index'
                            content={ordersCardContent}
                        />
                        <Image
                            id='activity'
                            className='card'
                            style='width: 92%;background: #fff;'
                            src={this.state.activity}
                            mode='widthFix'
                        />
                        <OptionsCard
                            title={Get('languages').commonFeatures}
                            // content={[
                            //     {text:'',icon:'',path:''},
                            //     {text:'',icon:'',path:''},
                            //     {text:'',icon:'',path:''},
                            //     {text:'',icon:'',path:''},
                            // ]}
                        />
                    </View>

                    <View className='.at-article__info technicalSupport'>
                        {Get('languages').technicalSupport}
                    </View>
                </View>
        )
    }
}
