(function() {
    'use strict';

    // 创建功能条容器
    var searchSwitchBar = document.createElement('div');
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

    // 添加百度搜索按钮
    var baiduButton = document.createElement('a');
    baiduButton.textContent = '百度';
    baiduButton.style.fontWeight='bold'
    baiduButton.style.padding = '8px';
    baiduButton.href=''

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
    document.body.insertBefore(searchSwitchBar, document.body.firstChild);
})();
