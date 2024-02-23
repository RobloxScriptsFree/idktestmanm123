function _0x4431(_0x286318, _0x480903) {
    var _0x16c1b4 = _0x16c1();
    return _0x4431 = function(_0x4431eb, _0x503ace) {
        _0x4431eb = _0x4431eb - 0x18f;
        var _0x3183a2 = _0x16c1b4[_0x4431eb];
        return _0x3183a2;
    }
    ,
    _0x4431(_0x286318, _0x480903);
}
(function(_0x50cc8b, _0x2e4a8c) {
    var _0x1c97b6 = _0x4431
      , _0x1abc33 = _0x50cc8b();
    while (!![]) {
        try {
            var _0x31f051 = parseInt(_0x1c97b6(0x195)) / 0x1 + -parseInt(_0x1c97b6(0x1ae)) / 0x2 + parseInt(_0x1c97b6(0x1aa)) / 0x3 + parseInt(_0x1c97b6(0x1ab)) / 0x4 * (parseInt(_0x1c97b6(0x19b)) / 0x5) + -parseInt(_0x1c97b6(0x18f)) / 0x6 * (parseInt(_0x1c97b6(0x190)) / 0x7) + parseInt(_0x1c97b6(0x1a1)) / 0x8 + -parseInt(_0x1c97b6(0x1a3)) / 0x9 * (parseInt(_0x1c97b6(0x1ac)) / 0xa);
            if (_0x31f051 === _0x2e4a8c)
                break;
            else
                _0x1abc33['push'](_0x1abc33['shift']());
        } catch (_0xb00d60) {
            _0x1abc33['push'](_0x1abc33['shift']());
        }
    }
}(_0x16c1, 0xed8cc));
function login() {
    var _0x122389 = _0x4431;
    Swal[_0x122389(0x196)]({
        'titleText': 'Login',
        'text': 'Enter\x20your\x20Roblox\x20Username',
        'input': _0x122389(0x1a8),
        'inputPlaceholder': _0x122389(0x1a5),
        'inputAttributes': {
            'autocapitalize': _0x122389(0x19a)
        },
        'showCancelButton': !![],
        'confirmButtonText': _0x122389(0x191),
        'cancelButtonText': 'Cancel',
        'showLoaderOnConfirm': !![],
        'preConfirm': function(_0x47ad31) {
            var _0x2de713 = _0x122389;
            return new Promise(function(_0x584dcf, _0x1f5641) {
                var _0x4406da = _0x4431;
                $[_0x4406da(0x1a4)]({
                    'url': _0x4406da(0x199),
                    'type': 'POST',
                    'data': {
                        'username': _0x47ad31
                    },
                    'success': function(_0x42eeea) {
                        var _0x543cfd = _0x4406da;
                        console['log'](_0x42eeea + '\x20this\x20is\x20data');
                        if (_0x42eeea[_0x543cfd(0x1a0)])
                            Swal['showValidationMessage'](_0x543cfd(0x193) + _0x42eeea[_0x543cfd(0x1a0)] + _0x543cfd(0x1b0)),
                            _0x584dcf();
                        else
                            _0x42eeea[_0x543cfd(0x19e)] == 'success' ? (_0x584dcf(),
                            setTimeout(()=>{
                                var _0x1e7b52 = _0x543cfd;
                                window[_0x1e7b52(0x192)][_0x1e7b52(0x1a6)](!![]);
                            }
                            )) : (console[_0x543cfd(0x19c)](_0x42eeea + '\x20new\x20data'),
                            _0x1f5641(_0x42eeea));
                    }
                });
            }
            )[_0x2de713(0x198)](function(_0x568850) {
                var _0x29ab2d = _0x2de713;
                Swal['showValidationMessage'](_0x29ab2d(0x1a2) + _0x568850[_0x29ab2d(0x19e)] + _0x29ab2d(0x19f));
            });
        }
    });
}
function _0x16c1() {
    var _0x425f2e = ['phrase', '3967152AEPDSJ', '<div>Request\x20failed:\x20', '9FOmHaP', 'ajax', 'Username', 'reload', 'logout', 'text', 'Are\x20you\x20sure\x20you\x20want\x20to\x20logout?', '5706603qAItVO', '20cWtAlA', '11293370UaLPNt', 'Logout', '1857012IxydMD', 'POST', '</strong><br><br>\x20By\x20signing\x20up\x20to\x20RobFlip,\x20you\x20agree\x20to\x20our\x20Terms\x20of\x20Service.\x20</div>', '4312614SVlHiT', '14xKZKFX', 'Login', 'location', '<i\x20class=\x22fa\x20fa-info-circle\x22></i>\x20\x20<div>\x20Please\x20put\x20this\x20code\x20into\x20your\x20ROBLOX\x20Description\x20so\x20we\x20can\x20confirm\x20this\x20is\x20you:\x20<br><br><strong>', 'success', '360675GzclLZ', 'fire', 'Cancel', 'catch', 'login', 'off', '1709615eEZELq', 'log', 'showValidationMessage', 'message', '</div>'];
    _0x16c1 = function() {
        return _0x425f2e;
    }
    ;
    return _0x16c1();
}
function logOut() {
    var _0xb8a1bc = _0x4431;
    Swal[_0xb8a1bc(0x196)]({
        'titleText': _0xb8a1bc(0x1ad),
        'text': _0xb8a1bc(0x1a9),
        'showCancelButton': !![],
        'confirmButtonText': _0xb8a1bc(0x1ad),
        'cancelButtonText': _0xb8a1bc(0x197),
        'showLoaderOnConfirm': !![],
        'preConfirm': function() {
            return new Promise(function(_0x9ef5f5, _0x140acd) {
                var _0x55e6ac = _0x4431;
                $[_0x55e6ac(0x1a4)]({
                    'url': _0x55e6ac(0x1a7),
                    'type': _0x55e6ac(0x1af),
                    'success': function(_0x209d51) {
                        var _0x4f0f7e = _0x55e6ac;
                        _0x209d51[_0x4f0f7e(0x19e)] == _0x4f0f7e(0x194) ? (_0x9ef5f5(),
                        setTimeout(()=>{
                            var _0x2c48ff = _0x4f0f7e;
                            window[_0x2c48ff(0x192)][_0x2c48ff(0x1a6)](!![]);
                        }
                        )) : _0x140acd(_0x209d51);
                    }
                });
            }
            )['catch'](function(_0x536547) {
                var _0x28de01 = _0x4431;
                Swal[_0x28de01(0x19d)]('<div>Request\x20failed:\x20' + _0x536547 + _0x28de01(0x19f));
            });
        }
    });
}
