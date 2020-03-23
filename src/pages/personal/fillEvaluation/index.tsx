import Taro, { useEffect, useState } from '@tarojs/taro'
import { View,Image, Button, Textarea,Text } from "@tarojs/components"

import { AtImagePicker, AtRate } from 'taro-ui'

import List from '../components/evaluateList'


import './index.less'

const FillEvaluation = () =>{

  useEffect(() => {
    Taro.setNavigationBarTitle({title:'评价'})
  }, [])

  const [fillText, setfillText] = useState<string>('')
  const dataImage = [{
    url: 'https://img.tebiemiao.cn/1582617226824.jpg',
  },{
    url: 'https://img.tebiemiao.cn/1582617226824.jpg',
  }]
  const [files, setfiles] = useState(dataImage)

  const onChangeFiles = async (files,operationType,index) =>{
    /**
     * files 值发生变化触发的回调函数,
     * operationType 操作类型有添加，移除，如果是移除操作
     * 则第三个参数代表的是移除图片的索引
     */
    if(operationType === 'add') {
      // 添加操作
      try {
        const a = await fileUpload(files[files.length-1].url)
        console.log(a,'aaaa')

        setfiles([...files])
      } catch (error) {
        console.log(error,'errorerrorerror')
      }


    } else if(operationType === 'remove') {
      // 移除操作
      console.log('--')
      files.splice(index,1)
      setfiles([...files])
    }
    console.log(files,'files','operationType',operationType)
  }
  const onImageClick = (index, file) => {
    console.log(index, file)
  }

  const fileUpload= (tempFilePath) =>{

    return new Promise<string>((rs, rj) => {

      Taro.uploadFile({
        url: 'url地址', //app.ai_api.File.file
        filePath: tempFilePath,  //文件路径  这里是mp3文件
        name: 'file',  //随意
        header: {
          'Content-Type': 'multipart/form-data',
          'Authorization': Taro.getStorageSync("access_token"),  //如果需要token的话要传
        },
        formData: {
          method: 'POST'   //请求方式
        },
        success: res => {
          console.log(res)
          rs('res')
        },
        fail: err => {
          console.log('报错了', err)
          rj(err)
        }
      })
    })

  }

  return (
    <View className='fillEvaluation'>
      {/* <View className='evaluate-list'>
        <View className='evaluate-list-top'>
          <View className='evaluate-list-top-image'>
            <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image' />
          </View>
          <View className='evaluate-list-top-content'>
            <View className='title wes-2'>金龙鱼最多展示2行金龙鱼食用植物调和油，黄金比例，商品名称最多展示2行最多展示2行</View>
          </View>
        </View>
      </View> */}
      <List imageSrc='https://img.tebiemiao.cn/1582617226824.jpg' goodsName='金龙鱼最多展示2行金龙鱼食用植物调和油，黄金比例，商' />
      <View className='input-content'>
        <View className='textarea-a'>
          <Textarea
            value={fillText}
            placeholder='请输入商品评价描述'
            onInput={(e)=>{setfillText(e.detail.value)}}
            className='textarea'
            style=''
            autoHeight />
          <View className='number'>{fillText.length}/200</View>
        </View>


          <View className='input-content-image'>
            <AtImagePicker
              files={files}
              onChange={onChangeFiles}
              onImageClick={onImageClick}
            />
          </View>
          <View className='goods-wares'>
            <Text className='text'>商品评价</Text>
            <AtRate
              size={25}
              value={4}
              margin={10}
            />
          </View>
      </View>
      <View className='bottom'>
        <Button className='theme-submit'>提交评价</Button>
      </View>
    </View>
  )
}
FillEvaluation.options = {
  addGlobalClass: true,

}
export default FillEvaluation
