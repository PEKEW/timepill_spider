
const ipc = require('electron').ipcRenderer;

ipc.on('data', (e,arg) => {
        console.log(arg)
    // $('input[type=cookie]').val(arg);
    cookie_input = $('input[type=cookie]');
    cookie_input.val(["remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=100780929%7C28lmNdfoCobSxyHTGRMv1wXfxGyOC7RtWiUtgeP9uT9MQnddXy2XPVirqLc2%7C%24P%24BpbnqwDdAT6Qd1n2z5bKhtt7nxUUta%2F; laravel_session=6Pe3ej886qYdcgk28czYOCZTcMS7OspZoL5Lfb6Q;"]);
    cookie_input.attr("disabled","disabled");
});