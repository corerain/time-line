<div align="center"> <a href="https://github.com/corerain/timeline"> <img alt="Corerain Logo" width="200" height="200" src="./images/Logo_Corerain.png"> </a> <br> <br>

[![license](https://img.shields.io/badge/license-Apache-green.svg)](LICENSE)

<h1>TimeLine (时间轴)</h1>
</div>

**中文** | [English](../README.md)

## 简介

用于记录数据的时间轴

## 预览

https://corerain.github.io/timeline/

<p align="center">
    <img alt="TimeLine demo" width="100%" src="../images/example.png">
</p>

## 使用

### 基础用法:
``` html
<div id="day-line"></div>
<div id="time-line"></div>
```
vue组件文件:
``` js
  import TimeLine from './build/timeline.js'
  ...
    const option = {
      container: document.querySelector('#time-line'),
      dayContainer: document.querySelector('#day-line'),
      pointerColor: 'rgba(255, 58, 51, 1)',
      record: []
    }

    const timeline = new TimeLine(option)
  ...
```

## Props

|名称|说明|类型|是否必填|默认值|可选值|
|---|---|---|---|---|---|
|container|timeline 父元素|`HtmlElement`|`true`|null|-|
|backgroundColor|timeline 背景色|`String`|`false`|rgba(14, 27, 46, .05)|-|
|dayContainer|当天时间轴父元素|`HtmlElement`|`false`|null|-|
|dayBackgroundColor|当天时间轴背景色|`String`|`false`|rgba(245, 249, 255, 1)|-|
|dayBackgroundPadding|当天时间轴线左右内边距|`Number`|`false`|10|-|
|dayBackgroundShape|当天时间轴形状|`String`|`false`|round|-|
|dayRecordLineHeight|当天时间轴线高度|`Number`|`false`|2|-|
|dayRecordlineColor|当天时间轴线颜色|`String`|`false`|rgba(218, 227, 240, 1)|-|
|dayRecordHeight|当天时间轴标记高度|`Number`|`false`|12|-|
|dayRecordColor|当天时间轴线标记颜色|`String`|`false`|rgba(24, 114, 240, 1)|-|
|dayAnimationTimer|当天时间轴动画持续时间|`Number`|`false`|1|-|
|dayAnimationEase|当天时间轴动画运动曲线|`String`|`false`|easeInOutQuart|-|
|secondPixelRatio|刻度线秒/元素比|`Number`|`false`|1|1/2/3/4/5/6/10/12/15/20/30/60|
|pointerColor|中间匹配指针颜色|`String`|`false`|rgba(27, 53, 89, 1)|-|
|pointBlockScope|中间匹配区域一半范围|`Number`|`false`|14.5|-|
|pointBlockBackgroundColor|中间匹配区域背景色|`String`|`false`|rgba(255, 58, 51, .1)|-|
|shortHeight|短刻度高度|`Number`|`false`|8|-|
|shortColor|短刻度颜色|`String`|`false`|rgba(200, 202, 204, 1)|-|
|middleHeight|中刻度高度|`Number`|`false`|12|-|
|middleColor|中刻度颜色|`String`|`false`|rgba(200, 202, 204, 1)|-|
|longHeight|高刻度高度|`Number`|`false`|16|-|
|longColor|高刻度颜色|`String`|`false`|rgba(150, 151, 153, 1)|-|
|zeroBottom|timeline 当天0点时间距离刻度高度|`Number`|`false`|6|-|
|zeroColor|timeline 当天0点三角颜色|`String`|`false`|rgba(14, 27, 46, .65)|-|
|zeroRadian|timeline 当天0点三角角度|`Number`|`false`|60|-|
|fontSize|timeline 当天0点文字fontSize|`Number`|`false`|12|-|
|fontFamily|timeline 当天0点文字fontFamily|`String`|`false`|sans-serif|-|
|fontWeight|timeline 当天0点文字fontWeight|`Number`|`false`|600|-|
|zeroFormat|timeline 当天0点时间格式|`String`|`false`|YYYY/MM/DD|-|
|extent|timeline 鼠标滚动幅度|`Number`|`false`|6|-|
|record|时间轴记录标记数据|`Array`|`false`|[]|-|
|recordTop|记录标记距离顶部距离|`Number`|`false`|4|-|
|recordRadius|记录标记圆角|`Number`|`false`|3|-|
|recordColor|记录标记颜色|`String`|`false`|rgba(156, 191, 240, 1)|-|
|clockHeight|当前时间标记高度|`Number`|`false`|16|-|


## Events

|事件名称|说明|参数|
|---|---|---|
|getPointerTimeInfo|获取指针当前时间信息|-|
|pixelToTime|像素转换成时间|pixel(Number)|
|timeToPixel|时间转换成像素|time(dayjs Object)|
|jumpTime|跳到指定时间|time(dayjs Object | unix)|
|dispose|注销timeline对象|-|


## License

Copyright (C) 2022 Corerain. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
