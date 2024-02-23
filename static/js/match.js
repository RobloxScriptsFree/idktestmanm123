(function(_0x5d6ef8, _0x119ed6) {
    var _0x228fbc = _0x339b
      , _0x2ae3c8 = _0x5d6ef8();
    while (!![]) {
        try {
            var _0x75dfd1 = parseInt(_0x228fbc(0x8a)) / 0x1 * (parseInt(_0x228fbc(0xa8)) / 0x2) + -parseInt(_0x228fbc(0x84)) / 0x3 * (-parseInt(_0x228fbc(0xa3)) / 0x4) + -parseInt(_0x228fbc(0xaa)) / 0x5 + -parseInt(_0x228fbc(0x91)) / 0x6 + parseInt(_0x228fbc(0x96)) / 0x7 + -parseInt(_0x228fbc(0x90)) / 0x8 * (-parseInt(_0x228fbc(0x7c)) / 0x9) + -parseInt(_0x228fbc(0x97)) / 0xa * (parseInt(_0x228fbc(0x9d)) / 0xb);
            if (_0x75dfd1 === _0x119ed6)
                break;
            else
                _0x2ae3c8['push'](_0x2ae3c8['shift']());
        } catch (_0x45930a) {
            _0x2ae3c8['push'](_0x2ae3c8['shift']());
        }
    }
}(_0x2f00, 0x779a7),
value = 0x0,
minval = 0x0,
maxval = 0x0,
items = []);
function createMatchOK(_0x2f9495, _0x3ee5ad) {
    var _0x447906 = _0x339b;
    console['log'](_0x447906(0x9c)),
    console['log'](_0x2f9495),
    console['log'](_0x3ee5ad),
    Swal[_0x447906(0x86)]({
        'allowOutsideClick': ![],
        'allowEscapeKey': ![],
        'allowEnterKey': ![]
    }),
    Swal[_0x447906(0xa4)](),
    $[_0x447906(0x98)]({
        'url': _0x447906(0x85),
        'type': _0x447906(0x87),
        'contentType': _0x447906(0x7a),
        'dataType': _0x447906(0x80),
        'data': JSON[_0x447906(0xa5)]({
            'side': _0x2f9495,
            'items': _0x3ee5ad
        }),
        'success': function(_0x50a0ab) {
            var _0x70c664 = _0x447906;
            Swal['close'](),
            _0x50a0ab[_0x70c664(0x9b)] == _0x70c664(0xa7) ? Swal[_0x70c664(0x86)]({
                'title': 'Match\x20Created',
                'text': _0x70c664(0xa1),
                'icon': _0x70c664(0xa7),
                'confirmButtonText': 'OK'
            })[_0x70c664(0x7e)](function() {
                var _0x1707da = _0x70c664;
                window[_0x1707da(0x83)][_0x1707da(0x92)]();
            }) : Swal[_0x70c664(0x86)](_0x70c664(0xad), _0x50a0ab[_0x70c664(0x9b)], _0x70c664(0xa9));
        }
    });
}
function _0x339b(_0x48ca31, _0x296705) {
    var _0x2f00e4 = _0x2f00();
    return _0x339b = function(_0x339b55, _0x2d9504) {
        _0x339b55 = _0x339b55 - 0x7a;
        var _0x1671b0 = _0x2f00e4[_0x339b55];
        return _0x1671b0;
    }
    ,
    _0x339b(_0x48ca31, _0x296705);
}
function createMatchside() {
    closePopup(),
    Swal['fire']({
        'title': 'Heads\x20or\x20Tails?',
        'html': '<div\x20style=\x27display:inline-flex;justify-content:center;flex-wrap:wrap;gap:10px;\x27\x20class=\x22head-tail-outer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x27createMatchOK(0,items)\x27\x20class=\x22btn-primary\x20bg-transparent\x22><img\x20src=\x27static/images/buxcoin\x27\x20width=\x27100px\x27\x20height=\x27100px\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x27createMatchOK(1,items)\x27\x20class=\x22btn-primary\x20bg-transparent\x22><img\x20src=\x27static/images/tixcoin\x27\x20width=\x27100px\x27\x20height=\x27100px\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
        'showCancelButton': !![],
        'showConfirmButton': ![]
    });
}
function createMatchside2(_0x4ef927) {
    var _0x2b858b = _0x339b;
    closePopup(),
    Swal[_0x2b858b(0x86)]({
        'title': _0x2b858b(0x7f),
        'confirmButtonText': _0x2b858b(0x7d),
        'cancelButtonText': 'Cancel',
        'showCancelButton': !![],
        'showConfirmButton': !![],
        'showLoaderOnConfirm': !![],
        'preConfirm': function(_0x5db7a4) {
            return new Promise(function(_0x3f35ec, _0x41eabd) {
                var _0x30d029 = _0x339b;
                $[_0x30d029(0x98)]({
                    'url': '/joingame',
                    'type': 'POST',
                    'contentType': _0x30d029(0x7a),
                    'dataType': _0x30d029(0x80),
                    'data': JSON[_0x30d029(0xa5)]({
                        'mygameid': String(_0x4ef927),
                        'items': items
                    }),
                    'success': function(_0x23eb69) {
                        var _0x1fd8c4 = _0x30d029;
                        console[_0x1fd8c4(0xa6)](_0x23eb69);
                        if (_0x23eb69['message'] == _0x1fd8c4(0xa7))
                            _0x3f35ec();
                        else {
                            Swal[_0x1fd8c4(0x86)]('Error', _0x23eb69[_0x1fd8c4(0x9b)], _0x1fd8c4(0xa9));
                            return;
                        }
                    }
                });
            }
            );
        }
    });
}
function addItem(_0x2a4846, _0x594af8) {
    var _0x549a73 = _0x339b;
    console['log'](_0x549a73(0x95));
    if (items[_0x549a73(0x81)](_0x594af8))
        items[_0x549a73(0x99)](items[_0x549a73(0x8c)](_0x594af8), 0x1),
        value = value - _0x594af8[_0x549a73(0x8f)],
        _0x2a4846[_0x549a73(0x89)](_0x549a73(0x88));
    else {
        if (items[_0x549a73(0x94)] >= 0x64) {
            Swal[_0x549a73(0x86)](_0x549a73(0xad), _0x549a73(0x8b), _0x549a73(0xa9));
            return;
        }
        items[_0x549a73(0x9e)](_0x594af8),
        value = value + _0x594af8[_0x549a73(0x8f)],
        _0x2a4846[_0x549a73(0xa0)](_0x549a73(0x88));
    }
    $(_0x549a73(0xa2))[_0x549a73(0x8d)](_0x549a73(0x9a) + value),
    (value >= minval || minval == 0x0) && (value <= maxval || maxval == 0x0) && items[_0x549a73(0x94)] >= 0x1 ? (console[_0x549a73(0xa6)](_0x549a73(0x8e)),
    $(_0x549a73(0xac))[_0x549a73(0x9f)]('disabled', ![])) : (console[_0x549a73(0xa6)]('enabled'),
    $(_0x549a73(0xac))[_0x549a73(0x9f)](_0x549a73(0x8e), !![])),
    console[_0x549a73(0xa6)](items);
}
function addItem2(_0x40965a, _0x513821) {
    var _0x1ba68c = _0x339b;
    console[_0x1ba68c(0xa6)](_0x1ba68c(0x95));
    if (items[_0x1ba68c(0x81)](_0x513821))
        items[_0x1ba68c(0x99)](items[_0x1ba68c(0x8c)](_0x513821), 0x1),
        value = value - _0x513821['value'],
        _0x40965a[_0x1ba68c(0x89)](_0x1ba68c(0x88));
    else {
        if (items[_0x1ba68c(0x94)] >= 0x64) {
            Swal['fire'](_0x1ba68c(0xad), _0x1ba68c(0x8b), _0x1ba68c(0xa9));
            return;
        }
        items[_0x1ba68c(0x9e)](_0x513821),
        value = value + _0x513821[_0x1ba68c(0x8f)],
        _0x40965a[_0x1ba68c(0xa0)](_0x1ba68c(0x88));
    }
    $(_0x1ba68c(0xa2))[_0x1ba68c(0x8d)](_0x1ba68c(0x9a) + value),
    (value >= minval || minval == 0x0) && (value <= maxval || maxval == 0x0) && items[_0x1ba68c(0x94)] >= 0x1 ? (console[_0x1ba68c(0xa6)](_0x1ba68c(0x8e)),
    $(_0x1ba68c(0x93))[_0x1ba68c(0x9f)](_0x1ba68c(0x8e), ![])) : (console[_0x1ba68c(0xa6)](_0x1ba68c(0x82)),
    $(_0x1ba68c(0x93))[_0x1ba68c(0x9f)]('disabled', !![])),
    console[_0x1ba68c(0xa6)](items);
}
function joinmatch(_0x19752e) {
    openjoiner(_0x19752e);
}
function cancelmatch(_0x1f1d03) {
    var _0x11a0c6 = _0x339b;
    closePopup(),
    Swal['fire']({
        'title': _0x11a0c6(0xab),
        'confirmButtonText': _0x11a0c6(0x7d),
        'cancelButtonText': 'Cancel',
        'showCancelButton': !![],
        'showConfirmButton': !![],
        'showLoaderOnConfirm': !![],
        'preConfirm': function(_0x355399) {
            return new Promise(function(_0x41bc7c, _0x4dac82) {
                var _0x5789e6 = _0x339b;
                $['ajax']({
                    'url': _0x5789e6(0x7b),
                    'type': _0x5789e6(0x87),
                    'contentType': _0x5789e6(0x7a),
                    'dataType': _0x5789e6(0x80),
                    'data': JSON[_0x5789e6(0xa5)]({
                        'mygameid': String(_0x1f1d03)
                    }),
                    'success': function(_0x2e248e) {
                        var _0x39588a = _0x5789e6;
                        console[_0x39588a(0xa6)](_0x2e248e);
                        if (_0x2e248e[_0x39588a(0x9b)] == _0x39588a(0xa7))
                            _0x41bc7c();
                        else {
                            Swal[_0x39588a(0x86)]('Error', _0x2e248e[_0x39588a(0x9b)], _0x39588a(0xa9));
                            return;
                        }
                    }
                });
            }
            );
        }
    });
}
function _0x2f00() {
    var _0x218b02 = ['5613102jZlQxn', 'reload', '#choosebtn1', 'length', 'ADDED\x20NEW\x20ITEMS', '6557173EJADZq', '990bZjHlT', 'ajax', 'splice', 'Value:\x20', 'message', 'MAKING\x20NEW\x20MATCH', '38951gmvNKS', 'push', 'attr', 'addClass', 'Game\x20has\x20been\x20Successfully\x20Created', '#valdiv1', '2588UMuHCW', 'showLoading', 'stringify', 'log', 'success', '4XjzPTt', 'error', '953175JQxxdC', 'Are\x20you\x20sure\x20you\x20want\x20to\x20cancel?', '#choosebtn', 'Error', 'application/json;\x20charset=utf-8', '/cancelgame', '638829cofRxX', 'Yes', 'then', 'Are\x20you\x20sure\x20you\x20want\x20to\x20join?', 'JSON', 'includes', 'enabled', 'location', '2748LYktax', '/creategame', 'fire', 'POST', 'special-border', 'removeClass', '183117nIXEnU', 'You\x20can\x20bet\x20maximum\x20of\x20100\x20items!', 'indexOf', 'text', 'disabled', 'value', '8LvKWbQ'];
    _0x2f00 = function() {
        return _0x218b02;
    }
    ;
    return _0x2f00();
}
