(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Slahash = function () {
    function Slahash() {
        var __this = this;
        $(document).on('keyup', 'input[class=slahash]', function (e) {
            var address = this.value;
            if (/^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9_.-]+\.[a-z0-9]{3}$/.test(address)) {
                $('.slahash-btn').html('<button class="slahash-btn-style" id="slahash-btn-check">Slahash</button>');
                $('#slahash-btn-check').click(function (e) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'https://slahash.com/address.php?address=' + address + '&format=json');
                    xhr.addEventListener('loadstart', function () {
                        var win = window.open('https://slahash.com/address.php?address=' + address, 'Slahash', "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=600");
                        var timer = setInterval(function () {
                            if (win.closed) {
                                clearInterval(timer);
                                var obj = JSON.parse(xhr.responseText) || {};
                                if (obj.wallet) {
                                    $('input[class=slahash]').val(obj.wallet);
                                    $('.slahash-btn').html('');
                                } else {
                                    $('.slahash-btn').html('');
                                }
                            }
                        }, 300);
                    });
                    xhr.send();
                });
            } else {
                $('.slahash-btn').html('');
            }
        });
    }
    return Slahash;
}();
new Slahash();

},{}]},{},[1])
