(function() {
    'use strict';

    // 创建功能条容器
    const searchSwitchBar = document.createElement('header');
    searchSwitchBar.style.display = 'flex';
    searchSwitchBar.style.fontSize = '15px';
    searchSwitchBar.style.left = '0px';
    searchSwitchBar.style.top = '0px';
    searchSwitchBar.style.width = '100%';
    searchSwitchBar.style.height = '35px';
    searchSwitchBar.style.backgroundColor = '#f9f9f9';
    searchSwitchBar.style.zIndex = '999999999';
    searchSwitchBar.style.position = 'fixed'
    searchSwitchBar.style.padding='0 10px'
    searchSwitchBar.style.borderBottom='#ddd 1px solid'
    searchSwitchBar.style.boxShadow='#eee 0 5px 5px 0'
    document.getElementsByTagName('body')[0].style = "margin-top: 35px !important;";

    // 添加百度搜索按钮
    const baidu = document.createElement('a');
    baidu.textContent = '百度';
    baidu.style.fontWeight='bold'
    baidu.style.padding = '8px';
    baidu.href=`https://m.baidu.com/s?from=0/bd_page_type=1/ssid=0/uid=0/pu=usm@0,sz@1320_2001,ta@zbios_1_17.0_22_5.8/baiduid=9EE4A9514F34EC8945462A0772ED490C/w=0_10_A Thousand Years/t=zbios/l=1/tc?ref=www_zbios&order=2&fm=alop&isAtom=1&is_baidu=0&tj=sg_kg_entity_san_2_0_10_l1&word=${'测试'}&bdver=2_1&tcplug=1&dict=-1&bdenc=1`

    const ai360 = document.createElement('a');
    ai360.textContent = '360';
    ai360.style.fontWeight='bold'
    ai360.style.padding = '8px';
    ai360.href=`https://www.sou.com/?q=${'测试'}`

    const 秘塔 = document.createElement('a');
    秘塔.textContent = '秘塔';
    秘塔.style.fontWeight='bold'
    秘塔.style.padding = '8px';
    秘塔.href=`https://metaso.cn/?q=${'测试'}`

    const 十号 = document.createElement('a');
    十号.textContent = '十号';
    十号.style.fontWeight='bold'
    十号.style.padding = '8px';
    十号.href=`https://retardphobia.moebh.org/ui/search.html?q=${'测试'}`

    const phind = document.createElement('a');
    phind.textContent = 'Phind';
    phind.style.fontWeight='bold'
    phind.style.padding = '8px';
    phind.href=`https://phind-ai.com/zh/search?q=${'测试'}`

    const andi = document.createElement('a');
    andi.textContent = 'Andi';
    andi.style.fontWeight='bold'
    andi.style.padding = '8px';
    andi.href=`https://andisearch.com/?q=${'测试'}`

    // 将按钮添加到功能条容器中
    searchSwitchBar.appendChild(baidu);
    searchSwitchBar.appendChild(ai360);
    searchSwitchBar.appendChild(秘塔)
    searchSwitchBar.appendChild(十号)
    searchSwitchBar.appendChild(phind)
    searchSwitchBar.appendChild(andi)

    // 将功能条添加到页面顶部
    document.getElementsByTagName('head')[0].after(searchSwitchBar);
})();
