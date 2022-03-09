

const ipc = require('electron').ipcRenderer;

$(function(){
    // 按钮点击事件监听器
    $("#btn").on('click',function(){
        
        var cookie = $("input[name = 'cookie']").val()
        
        var options = {
            name:'新新新新窗口',
            title:'新窗口',
            data:cookie
        }

        // alert(options)
        ipc.send('new_win',options);
    })
})
