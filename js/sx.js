(function() {
    'use strict';

    // 创建功能条容器
    var searchSwitchBar = document.createElement('header');
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
    var baiduButton = document.createElement('a');
    baiduButton.textContent = '百度';
    baiduButton.style.fontWeight='bold'
    baiduButton.style.padding = '8px';
    baiduButton.href=`https://m.baidu.com/s?from=0/bd_page_type=1/ssid=0/uid=0/pu=usm@0,sz@1320_2001,ta@zbios_1_17.0_22_5.8/baiduid=9EE4A9514F34EC8945462A0772ED490C/w=0_10_A Thousand Years/t=zbios/l=1/tc?ref=www_zbios&order=2&fm=alop&isAtom=1&is_baidu=0&tj=sg_kg_entity_san_2_0_10_l1&word=${'测试'}&bdver=2_1&tcplug=1&dict=-1&bdenc=1`

    // 添加搜狗搜索按钮
    var sougouButton = document.createElement('a');
    sougouButton.textContent = '搜狗';
    sougouButton.style.padding = '8px';
    sougouButton.onclick = function() {
        var query = prompt('请输入搜索内容：');
        if (query) {
            window.open('https://www.sogou.com/web?query=' + encodeURIComponent(query), '_blank');
        }
    };

    // 将按钮添加到功能条容器中
    searchSwitchBar.appendChild(baiduButton);
    searchSwitchBar.appendChild(sougouButton);

    // 将功能条添加到页面顶部
    document.getElementsByTagName('head')[0].after(searchSwitchBar);
})();
