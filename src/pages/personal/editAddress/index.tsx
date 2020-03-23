import { View,Input, Picker,Button,Switch } from "@tarojs/components"
import Item from './components/item'
import { useRouter, useState, useEffect } from "@tarojs/taro"
import './index.less'

interface fromList {
  contactName:string,
  contactPhone:string,
  addressDetail:string,
  defaultAddress:boolean
}

const EditAddress =()=>{
  const {
    params: { mode,contactName,contactPhone,addressDetail,defaultAddress }
  } = useRouter()

  const data ={
    contactName: '',
    contactPhone: '',
    addressDetail: '',
    defaultAddress:false
  }
  const [form, setform] = useState<fromList>(data)

  useEffect(() => {
    if(mode === 'add') {
      Taro.setNavigationBarTitle({title: '新增收货地址'})
      setform(data)
    } else if(mode === 'edit') {
      Taro.setNavigationBarTitle({title:'编辑收获地址'})
      setform({contactName,contactPhone,addressDetail,defaultAddress:Boolean(defaultAddress)})
    }
  }, [mode])


  const submit = () => {
    console.log(form, 'submitsubmitsubmit')
  }
  const handleArea = () => {
    console.log('handleArea')
  }
  const editData =(name,value) =>{
    let data = form
    data[name] = value
    setform(data)
  }
  // onInput={handleName}

  return(
    <View className='EditAddress'>
      <View className='top'>
        <Item title='收货人'>
          <Input
            className='input'
            maxLength={6}
            placeholder='收件人姓名'
            onInput={(e)=>{
              editData('contactName', e.detail.value)
            }}
            value={form.contactName}
          />
        </Item>

        <Item title='手机号码'>
          <Input
            className='input'
            type='number'
            placeholder='手机号码'
            onInput={(e)=>{
              editData('contactPhone', e.detail.value)
            }}
            value={form.contactPhone}
          />
        </Item>


        <Picker
          mode='region'
          value={[]}
          onChange={handleArea}>
          <Item title='所在地区'>
            <View className='area df-c'>
              <Input
                className='pickerText'
                placeholder='请选择所在地区'
                disabled
                value=''
              />
            </View>
          </Item>
        </Picker>
        <Item title='详细地址'>
          <Input
            className='input'
            placeholder='例如：道路、楼栋号、门牌号、单'
            maxLength={30}
            onInput={(e)=>{
              editData('addressDetail', e.detail.value)
            }}
            value={form.addressDetail}
          />
        </Item>
      </View>

        <View className='d-a'></View>
        <View className='a-bottom'>
          <Item title='设为默认地址'>
            <View className='default df-c'>
              <Switch color='#FF3B30' checked={form.defaultAddress} onChange={(e)=>{
                editData('defaultAddress', e.detail.value)
              }}></Switch>
            </View>
          </Item>
          <Button className='submit' onClick={submit}>保存</Button>
          {mode==='edit' && <Button className='del' plain>删除地址</Button>}
        </View>

      </View>
  )
}
export default EditAddress
