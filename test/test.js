(function () {

    setTimeout(function () {
        var downBtn = document.querySelectorAll('.syno-dl-a_bt_add')[0];
        if(downBtn) {
            console.log('初始化自动下载电影功能，成功，请按下Shift点击地球加号按钮！！！')
            downBtn.onclick = function (e) {
                e.preventDefault();
                if (e.shiftKey) {
                    setTimeout(function () {
                        var txt = document.getElementsByTagName('textarea')[0];
                        var okBtn = document.querySelectorAll('.syno-ux-button-blue')[1];
                        var dc = window.localStorage.getItem('dc');
                        if (!dc) {
                            dc = "0";
                        }
                        dc = parseInt(dc);
                        alert('自动添加电影,序号：' + dc)
                        txt.value = arr[dc++];
                        window.localStorage.setItem('dc', dc);

                        setTimeout(function () {
                            okBtn.click();
                        }, 1000 * 1);

                    }, 1000 * 3);
                }
            }
        }

    }, 1000 * 20);

})();
