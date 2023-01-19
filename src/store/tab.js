export default{
    state:{
        isCollapse:false, //用于控制菜单展开或收起
        tabsList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
              }//默认数据
        ]//面包屑数据
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑
        selectMenu(state,val){
            console.log('val',val);
            // 判断添加的数据是否为首页
            if(val.name !== 'home'){
                //当数据存在时，会返回该该数据的下标，不存在的话返回-1
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if(index === -1){
                    state.tabsList.push(val)
                }
            }
        },
        // 删除指定tag数据
        closeTag(state,item){
            console.log('log',item);
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        }
    }
}