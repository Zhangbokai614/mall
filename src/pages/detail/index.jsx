import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import { AtDivider, AtCountdown, AtButton, AtInputNumber } from 'taro-ui'

import { SwiperPosters } from '../../components/detail_swiper'
import { GoodsSelection } from '../../components/at_radio/index'
import { Bottomdetail } from '../../components/detail_bottom/index'
import { Introduction } from '../../components/detail_introduction/index'

import * as homeApi from './service'
import { Get } from '../../global-data/index'

import Vertical from '../../asset/images/icon/vertical.png'
import Share from '../../asset/images/icon/share-select.png'

import './index.css'

export default class Index extends Component {

	constructor(props) {
		super(props)
		this.state = {
			goodsInfo: {},
			afterSales: [],
			loading: true,
			showElem: true,
			value: 1,
			displaySelect: 'mask none',
			classstyleSelect: 'box moveFromBottom',
			displayDistribution: 'mask none',
			classstyleDistribution: 'box moveFromBottom',
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

	offSelect() {
		this.setState({
			displaySelect: 'mask none',
			classstyleSelect: 'box moveFromBottom',
		})
	};

	openSelect() {
		this.setState({
			displaySelect: 'mask block',
			classstyleSelect: 'box moveFromBottom showMove block'
		})
	};

	changeSelect() {
		this.state.displaySelect
	}

	offDistribution() {
		this.setState({
			displayDistribution: 'mask none',
			classstyleDistribution: 'box moveFromBottom',
		})
	};

	openDistribution() {
		this.setState({
			displayDistribution: 'mask block',
			classstyleDistribution: 'box moveFromBottom showMove'
		})
	};

	update(id, value) {
		homeApi.goodscar(id, value)
		console.log(id, value)
	}

	handleChangeNumber(value) {
		this.setState({
			value
		})
	};

	goHref = (type) => {
		switch (type) {
			case '01':
				Taro.navigateTo({
					url: '/pages/home/index',
				});
				break;
			case '02':
				Taro.navigateTo({
					url: '/pages/category/index',
				});
				break;
			case '03':
				Taro.navigateTo({
					url: '/pages/cart/index'
				});
				break;
			case '04':
				Taro.navigateTo({
					url: '/pages/order/index',
				});
				break;
			default:
				Taro.navigateTo({
					url: '/pages/home/index',
				});
		}
	};

	async loading() {
		Taro.showLoading({
			title: Get('languages').loading,
		})

		const { id } = getCurrentInstance().router.params
		const goodsInfo = await homeApi.goodsInfo(+id)
		const afterSales = await homeApi.afterSales()
		const activity = await homeApi.activity()
		this.setState({
			id: id,
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

		const id = this.state.id

		const info = this.state.goodsInfo
		const afterSalesDetail = this.state.afterSales
		const afterSalesFree = this.state.afterSalesFree
		const activityName = this.state.activityName
		const time = this.state.endTime

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
				: <View className='main-page'>
					<SwiperPosters
						images={info[0].images}
					/>
					<View className='top-banner'>
						<View className='top-banner-price'>
						{Get('languages').cny}
						{info[0].price}
						</View>
						{
							this.state.showElem ? (
								<View className='top-show'>
									<View className='top-show-ctivity'>
										<View className='top-show-title'>
											{activityName}
										</View>
									</View>
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
						value={this.state.value}
						specs={info[0].specs}
						openSelect={this.openSelect.bind(this)}
						offDistribution={this.offDistribution}
						openDistribution={this.openDistribution}
					/>
					<View
						onClick={this.offSelect.bind(this)}
						className={this.state.displaySelect}
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
							{Get('languages').detailPage.freeMoney}
							{afterSalesFree}
						</View>
					</View>
					<Bottomdetail />
					<View
						className={this.state.classstyleSelect}>
						<View className='show-content'>
							<View className='show-images'>
								<Image
									src={info[0].images[0]}
									style="height: 16vh; width: 16vh"
								/>
							</View>
							<View className='show-price'>
								{Get('languages').cny}
								{info[0].price}
							</View>
						</View>
						<View className='show-detail'>
							<View className='show-title'>
								{Get('languages').detailPage.inventory}
							</View>
							<View className='show-number'>
								{info[0].inventory}
							</View>
						</View>
						<View className='show-detail'>
							<View className='show-title'>
								{Get('languages').detailPage.specifications}
							</View>
							<AtButton
								size='small'
								className='show-specs'>
								{info[0].specs}
							</AtButton>
						</View>
						<View className='show-detail'>
							<View className='show-title'>
								{Get('languages').detailPage.number}
							</View>
							<View className='show-input-number'>
								<AtInputNumber
									type='digit'
									min={1}
									max={99}
									step={1}
									width={100}
									value={this.state.value}
									onChange={this.handleChangeNumber.bind(this)}
								/>
							</View>
						</View>
						<AtButton
							className='show-addcar'
							onClick={this.update.bind(this, id, this.state.value)}
						>
							{Get('languages').detailPage.addcar}
						</AtButton>
						<AtButton
							className='show-gobuy'
							onClick={this.goHref.bind(this, '04')}
						>
							{Get('languages').detailPage.tobuy}
						</AtButton>
					</View>
				</View>
		)
	}
};