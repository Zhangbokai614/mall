import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import { AtDivider, AtCountdown, AtTag } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { SwiperPosters } from '../../components/detail_swiper'
import { GoodsSelection } from '../../components/at_radio/index'
import { Bottomdetail } from '../../components/detail_bottom/index'
import { Introduction } from '../../components/detail_introduction/index'
import Share from '../../asset/images/icon/share-select.png'

import * as homeApi from './service'
import { Get } from '../../global-data/index'

import './index.css'

export default class Index extends Component {

	constructor(props) {
		super(props)
		this.state = {
			goodsInfo: {},
			afterSales: [],
			loading: true,
			showElem: true,
		}
	}

	onTimeUp() {
		this.setState({
			showElem: !this.state.showElem
		})
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

		const { id } = getCurrentInstance().router.params
		const goodsInfo = await homeApi.goodsInfo(+id)
		const afterSales = await homeApi.afterSales()
		const activity = await homeApi.activity()
		this.setState({
			goodsInfo: goodsInfo.data.filter((e) => e.id === +id),
			afterSales: afterSales.data.detail,
			afterSalesFree: afterSales.data.free,
			activityName: activity.data[0].activity_name,
			endTime: activity.data[0].end_time,
			loading: false,
		})
		Taro.hideLoading()
	}

	render() {

		const info = this.state.goodsInfo
		const afterSalesDetail = this.state.afterSales
		const afterSalesFree = this.state.afterSalesFree
		const activityName = this.state.activityName
		const time = this.state.endTime
		const address = this.state.address

		const nowTime = new Date()
		const endDate = new Date(time)
		const newEndDate = endDate.getTime() - nowTime.getTime()
		const days = Math.floor(newEndDate / (1000 * 60 * 60 * 24))
		const hours = Math.floor((newEndDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((newEndDate % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((newEndDate % (1000 * 60)) / 1000)

		return (
			this.state.loading
				? null
				: <View className='main'>
					<SwiperPosters
						images={info[0].images}
					/>
					<View className='top-banner'>
						<View className='top-banner-price'>
							￥{info[0].price}
						</View>
						{
							this.state.showElem ? (
								<View className='top-show'>
									<AtTag className='top-show-title'>
										{activityName}
									</AtTag>
									<AtCountdown
										isCard
										isShowDay
										format={{ day: Get('languages').day, hours: ':', minutes: ':', seconds: '' }}
										day={days}
										hours={hours}
										minutes={minutes}
										seconds={seconds}
										onTimeUp={this.onTimeUp.bind(this)}
										className='top-show-count'>
									</AtCountdown>
								</View>
							) : null
						}
						<button
							open-type='share'
							className='top-show-share'>
							<Image
								src={Share}
								style='width:6vw; height:6vw;'
							/>
						</button>
					</View>
					<View className='top-show-info'>
						{info[0].title}
					</View>
					<GoodsSelection
						image={info[0].images[0]}
						specs={info[0].specs}
						inventory={info[0].inventory}
						price={info[0].price}
						id={info[0].id}
						address={address}
					/>
					<Introduction
						detailImages={info[0].detailImages}
					/>
					<View className='main-bottom-service'>
						<View className='main-bottom-container'>
							<Image
								className='container-intro-image'
								src={Vertical}
								style='width:1.5vw; height:4vh;'
							>
							</Image>
							<View className='main-bottom-title'>
								{Get('languages').detailPage.afterSales}
							</View>
						</View>
						<AtDivider
							className='main-bottom-divider'
						/>
						<View className='main-bottom-content'>
							{afterSalesDetail}
						</View>
						<View className='main-bottom-content'>
							{afterSalesFree}
						</View>
					</View>
					<Bottomdetail 
					id={info[0].id}
					/>
				</View>

		)
	}
};