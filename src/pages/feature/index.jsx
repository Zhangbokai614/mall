import React, { Component } from 'react'

import { Get } from '../../global-data/index'
import * as homeApi from './service'
import './index.css'
import { View } from '@tarojs/components'

export default class Index extends Component {

    render() {
        return (
            <View>
                {Get('languages').features}
            </View>
        )
    }

};