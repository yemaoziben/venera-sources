/** @type {import('./_venera_.js')} */
// manhuafree.com (G站漫畫) 源
// 首页/搜索为 SSR HTML；详情与章节走 v2.apikk.top JSON；章节图片经站点 decoder 解密。
// ---- 补全局 location，供内置 decoder 做域名校验 ----
(function () {
  var r = (typeof window !== 'undefined' && window) || globalThis;
  if (!r.location) r.location = { hostname: 'manhuafree.com', href: 'https://manhuafree.com/' };
})();
// ---- polyfill：真机 JS 环境可能缺 atob / TextDecoder，解码器需要 ----
function __mfAtob(s) {
  var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  s = String(s == null ? '' : s).replace(/[^A-Za-z0-9+/]/g, '');
  var len = s.length, i = 0, out = '';
  while (i < len) {
    var b1 = CHARS.indexOf(s.charAt(i++)), b2 = CHARS.indexOf(s.charAt(i++));
    var b3 = CHARS.indexOf(s.charAt(i++)), b4 = CHARS.indexOf(s.charAt(i++));
    var c1 = (b1 << 2) | (b2 >> 4);
    var c2 = ((b2 & 15) << 4) | (b3 >> 2);
    var c3 = ((b3 & 3) << 6) | b4;
    out += String.fromCharCode(c1);
    if (b3 !== -1) out += String.fromCharCode(c2);
    if (b4 !== -1) out += String.fromCharCode(c3);
  }
  return out;
}
function __mfUtf8Decode(bytes) {
  var out = '', i = 0, len = bytes.length;
  while (i < len) {
    var c = bytes[i++];
    if (c < 128) { out += String.fromCharCode(c); }
    else if (c >= 192 && c < 224) { out += String.fromCharCode(((c & 31) << 6) | (bytes[i++] & 63)); }
    else if (c >= 224 && c < 240) { out += String.fromCharCode(((c & 15) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63)); }
    else {
      var cp = ((c & 7) << 18) | ((bytes[i++] & 63) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
      cp -= 65536;
      out += String.fromCharCode(0xD800 + (cp >> 10), 0xDC00 + (cp & 1023));
    }
  }
  return out;
}
var __mfRoot = (typeof globalThis !== 'undefined') ? globalThis : (typeof window !== 'undefined' ? window : this);
if (typeof atob === 'undefined') {
  var atob = __mfAtob;
  __mfRoot.atob = __mfAtob;
}
if (typeof TextDecoder === 'undefined') {
  var TextDecoder = function () { this.decode = __mfUtf8Decode; };
  __mfRoot.TextDecoder = TextDecoder;
}
/* ==== manhuafree chapter image decoder (extracted from site decoder.js) ==== */
(function(){
  var _root = (typeof window !== "undefined" && window) || globalThis;
function _0x2ff4(){const _0x5a8658=['r1z4zvq','vwjYC3q','DxjOB3m','yw1OlMnV','zMXVB3i','y29UC3rY','suzWqu0','DhjHy2u','BwfUAhvH','xY05odC2','x19WCM90','ExbL','mtKYntq5vLrxvuTh','B3jNlg0U','v2L0Aa','uwr3uue','Buzcy1a','CMvWzwf0','BgvUz3rO','z3nfsey','uvjtvfvw','C3bSAxq','odK4mJK2BuTevKHA','A2vVANq','y1nZvgW','CgfYC2u','u1P6vMS','D3Hqvxa','u1rvvLDy','vxLIwe0','odG2DhnPr2XM','B19F','BwPfq3C','tML5wxG','zxrmyMy','tvn1CfO','EhvkAxm','zxLIBNy','zw5KC1DP','EffUELe','C1LQC1i','wNrVwgi','B25L','CuLkCfy','BwDQEe4','BwfW','zYXTlMjH','y0Tlsem','AxH6zhO','ExPbqKne','zYXIyw96','ww1VCLu','Dwn0B3i','ruzhseLk','zwzNAgLQ','tw1Ot2O','sJDY','wvPHyMnK','ywjJzgvM','lM9YzYXT','s2D0B2q','yxjdB2rL','vvfjtNe','odKTxW','yMLUza','vKnvv1i','C3rHCNrZ','Aw9U','tMrzEvC','A2XTBM9W','Ag9ZDg5H','Bhvws24','qvHxvu4','C3bqzfy','C3rYAw5N','svDytKO','s0XntK9q','yMfVEMLT','uwf6r08','rNrYD08','uNLXAMe','tM1VBha','Aw1OlM9Y','A2H1AxC','AuXruLC','s0XZuNm','ndvKyMPpAwW','mJmYAvfcEvHm','vuLVsvu','Aw5KzxHp','B1PqCwu','Aw5MBW','zgvbDa','C2vHCMnO','zMLSDgvY','CMXtC0S','BfLXyKu','vZrZ','Bg9N','CfPuthG','CMv0DxjU','lM9YzYXI','DLrdAg4','y3DmuK8','D2fYBG','rNb3z2K','uK1RvvO','ntqZmJeW','t0P6CfO','zeDSqKu','v1HzwG','icHMDw5J','DhjPBq','vwr3vwS','kcGOlISP','tePtChe','kYKRksSK','zgvJB2rL','q0Dtvfq','z2HPAMTS','CMv2zxjZ','zNjLzs5J','u0TMvwy','CKDVr00','Ac5VCMCS','Bw5VChfY','DgfIBgu','BsXNlw1O','DgLVBIGP','ywnKzvG','D3H5EJaX','ANLlwuq','AgLZiIKO','CxjZDhv2','Bs5IEM1O','y2HHCKnV','zhzUyMu','A0TXwvu','mJaXotyYmhb5rgfSBa','CfPZqNi','EM1OlM9Y','EuXdtem','tKfbsNC','ugjbq0e','q0fpCM4','DvPrC3G','svnts3K','y29UC29S','zxjYB3i','tePVAeW','nZeXm0viwvzetG','C2XPy2u','E30Uy29U','Aw5JBhvK','yxbWBhK','r0HjsKTm','B3iOiNjL','D0Pgq00','seDwu2W','Bg9JyxrP','CMvWBgfJ','tu5puffs','B05ewhG','Dg9tDhjP','mJu1mtaWohvVB0viEa','zNjVBunO','DhvYBIb0','mJm0nty3','mtG5odyZmgHUsxHYBG','AM9PBG','ndqWotCZtgLKvKng','C3rYDwn0','lMCTBwGU','zxHJzxb0'];_0x2ff4=function(){return _0x5a8658;};return _0x2ff4();}

function _0x54d3(_0x4629b3,_0x144dc3){_0x4629b3=_0x4629b3-(0x26*0x61+0x1213*0x1+-0x1f2b);const _0x245258=_0x2ff4();let _0x278d28=_0x245258[_0x4629b3];if(_0x54d3['bwpEkz']===undefined){var _0x28c634=function(_0x1ab090){const _0xceb04f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x183d19='',_0x3cbdc3='',_0x45d664=_0x183d19+_0x28c634;for(let _0x460758=0x713*0x1+-0x472*0x2+0x1d1,_0x3eb878,_0x16ff66,_0x68fc13=0x29*-0x4a+0x6d*0x2c+0x2*-0x371;_0x16ff66=_0x1ab090['charAt'](_0x68fc13++);~_0x16ff66&&(_0x3eb878=_0x460758%(0x3*-0x98b+-0x174*-0x1+-0x1*-0x1b31)?_0x3eb878*(0x1c09+-0x8ca+-0x12ff)+_0x16ff66:_0x16ff66,_0x460758++%(0x1703+0x1c6*-0xa+-0x1c1*0x3))?_0x183d19+=_0x45d664['charCodeAt'](_0x68fc13+(-0xb*0x301+0x6*-0x373+0x35c7))-(-0x36*0x70+0x15e4+0x1c6)!==0xa*-0x5+0x1664+-0x1632?String['fromCharCode'](0xe78+-0x353*0x1+0x362*-0x3&_0x3eb878>>(-(0x1*0x2047+-0x6ba+-0x198b)*_0x460758&-0xdaa+-0x269*0xf+0x31d7*0x1)):_0x460758:0x1d3*0xa+-0x44e+-0xdf0){_0x16ff66=_0xceb04f['indexOf'](_0x16ff66);}for(let _0x416e04=-0x1f7*0x7+-0x1*-0x2f+0xd92,_0x537608=_0x183d19['length'];_0x416e04<_0x537608;_0x416e04++){_0x3cbdc3+='%'+('00'+_0x183d19['charCodeAt'](_0x416e04)['toString'](0x2*-0x703+-0x18db+0x26f1))['slice'](-(-0x34+-0x210e+0x2144));}return decodeURIComponent(_0x3cbdc3);};_0x54d3['eOJTwI']=_0x28c634,_0x54d3['JqfqKg']={},_0x54d3['bwpEkz']=!![];}const _0x302ac6=_0x245258[0x1019*-0x1+-0x8a4+0x18bd],_0x3e7e6e=_0x4629b3+_0x302ac6,_0x4cf778=_0x54d3['JqfqKg'][_0x3e7e6e];if(!_0x4cf778){const _0x1657cf=function(_0x439964){this['ncPrQG']=_0x439964,this['zuDWbL']=[0x1ac8+0x13b8+-0x2e7f*0x1,-0x2267+0x2*-0x25c+0x271f,0x26b0+-0xf96+-0x171a],this['gnBHRe']=function(){return'newState';},this['vBDdeu']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['gSEqbG']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1657cf['prototype']['SOIBfv']=function(){const _0x368789=new RegExp(this['vBDdeu']+this['gSEqbG']),_0x12fc50=_0x368789['test'](this['gnBHRe']['toString']())?--this['zuDWbL'][0x1*0x1b59+0x58*0x8+-0x1e18]:--this['zuDWbL'][0x15ff+0x90c+-0x1*0x1f0b];return this['iYWerx'](_0x12fc50);},_0x1657cf['prototype']['iYWerx']=function(_0x872c94){if(!Boolean(~_0x872c94))return _0x872c94;return this['kqkomx'](this['ncPrQG']);},_0x1657cf['prototype']['kqkomx']=function(_0x21188b){for(let _0x228f2c=0x910+0x1*0x11f1+0xdf*-0x1f,_0x283200=this['zuDWbL']['length'];_0x228f2c<_0x283200;_0x228f2c++){this['zuDWbL']['push'](Math['round'](Math['random']())),_0x283200=this['zuDWbL']['length'];}return _0x21188b(this['zuDWbL'][0x1*-0x71+-0x1123*0x1+0x1194]);},new _0x1657cf(_0x54d3)['SOIBfv'](),_0x278d28=_0x54d3['eOJTwI'](_0x278d28),_0x54d3['JqfqKg'][_0x3e7e6e]=_0x278d28;}else _0x278d28=_0x4cf778;return _0x278d28;}
(function(_0xf1ea95,_0x4ceddb){const _0x30e339={_0x5eb998:0x193,_0x3a71af:0x1b5,_0x331c42:0x18d,_0x20248f:0x173,_0x5837a6:0x1a3,_0x4abd4:0x1ee,_0x5d8b5e:0x1ed,_0x39ea9d:0x191},_0xdb6153=_0x54d3,_0x302402=_0xf1ea95();while(!![]){try{const _0x56043b=-parseInt(_0xdb6153(_0x30e339._0x5eb998))/(-0x2c1*0x3+0x1981+-0x113d)+parseInt(_0xdb6153(_0x30e339._0x3a71af))/(0x45*-0x3+-0x7f2+0x8c3)*(parseInt(_0xdb6153(0x17f))/(-0x30b*-0x7+0x5cc*0x3+-0x26ae))+-parseInt(_0xdb6153(_0x30e339._0x331c42))/(-0x4c*-0x19+-0x23ec+0x92*0x32)+parseInt(_0xdb6153(_0x30e339._0x20248f))/(0x263d+0x86f*0x1+0x9*-0x52f)+parseInt(_0xdb6153(0x1ad))/(0xbd0+-0x6d*-0x31+-0x20a7)+-parseInt(_0xdb6153(_0x30e339._0x5837a6))/(-0xf95+-0x2*0xb5a+-0x994*-0x4)*(parseInt(_0xdb6153(_0x30e339._0x4abd4))/(-0x5ac+0x129+0x48b))+parseInt(_0xdb6153(_0x30e339._0x5d8b5e))/(0x3*-0x899+0x65*-0x4+-0x1*-0x1b68)*(parseInt(_0xdb6153(_0x30e339._0x39ea9d))/(0x1f1b+0xa61+-0x2972));if(_0x56043b===_0x4ceddb)break;else _0x302402['push'](_0x302402['shift']());}catch(_0x353e1d){_0x302402['push'](_0x302402['shift']());}}}(_0x2ff4,-0x17ec*-0x8b+-0x14f24*-0x7+-0x9d4*0x134));
;((()=>{const _0x566292={_0x43c235:0x187,_0x28b912:0x19f,_0x1ad12f:0x162,_0x3a7f74:0x195,_0x7840e8:0x1a4,_0x5a41e0:0x1e4,_0x58ae13:0x175,_0x291b97:0x1e9,_0x1de650:0x1c5,_0x3cd248:0x18a,_0x1d1239:0x1b3,_0x5963bc:0x1cd,_0x3c6b07:0x1dc,_0x1fe5f2:0x16b,_0x433ac6:0x1a0,_0x53befb:0x154,_0x52eb52:0x1d1,_0x1e0218:0x160,_0x4a812f:0x1c8,_0x19d438:0x1cc,_0x403426:0x1ab,_0x3ab5e2:0x157,_0x5e73a8:0x1cf,_0x2bb523:0x1c7,_0x26ec92:0x1e7,_0x5ea74c:0x1e6,_0x54fdbb:0x199,_0x83d6f0:0x192},_0x1a3efc={_0x58b929:0x1a6,_0x5b2af0:0x1a5,_0xcc6cb4:0x1a9,_0x2f581a:0x1a9,_0x1cb05d:0x17b,_0x1f7edd:0x19b,_0x235d23:0x176,_0x45f588:0x178,_0x4a7b10:0x180,_0xf7ddb3:0x1a9,_0x38227b:0x1aa,_0x398cd5:0x1a9,_0x4f5b61:0x180,_0x495769:0x164,_0x218d6a:0x1a9,_0x45aeb5:0x180,_0x45e12f:0x1a9,_0x25176d:0x15a,_0x45ed2f:0x179,_0x48d497:0x1a9,_0x37ea70:0x1bc,_0x3ce0d9:0x1c0},_0x16172a={_0x1591f5:0x1a9,_0x37dcf2:0x1a8,_0x374d26:0x176,_0x168c23:0x18b,_0x30b3c8:0x1ea,_0x5dc8de:0x189,_0x30efd2:0x170},_0x5e5ed4={_0x575a05:0x1a9,_0x299cf0:0x161},_0x4d82fa={_0x2d1484:0x1dd,_0xf4338d:0x1ac,_0xb11243:0x1c4,_0xd1c548:0x1a9,_0x405785:0x182},_0x2d9228=_0x54d3,_0x5d1904={'UQINq':function(_0x4c4521,_0x21902f){return _0x4c4521<_0x21902f;},'luVKn':function(_0x57732c,_0x4e9fb7){return _0x57732c<_0x4e9fb7;},'gsEHF':function(_0x2dc5a8,_0x33ead3){return _0x2dc5a8+_0x33ead3;},'IWXNJ':function(_0xe76570,_0x2769ed){return _0xe76570%_0x2769ed;},'yLCLC':function(_0x5b85bd,_0x59df68){return _0x5b85bd-_0x59df68;},'oNDXx':function(_0x1fec0a,_0x5df924){return _0x1fec0a%_0x5df924;},'khuiw':function(_0x18c756,_0x3ff301){return _0x18c756(_0x3ff301);},'QdwQA':_0x2d9228(_0x566292._0x43c235),'etLbf':function(_0x3430e6,_0x569a2d){return _0x3430e6!==_0x569a2d;},'OJzpZ':_0x2d9228(0x1e1),'ISSKy':function(_0x219870,_0x2790b6){return _0x219870<=_0x2790b6;},'PbACA':function(_0x536c41,_0x2dc5b6){return _0x536c41-_0x2dc5b6;},'RMkUZ':function(_0x3ba606,_0x142c0a){return _0x3ba606+_0x142c0a;},'ZtoXb':function(_0x27bdaf,_0x265d86){return _0x27bdaf+_0x265d86;},'rGoGM':function(_0x20f348,_0x5bdeef){return _0x20f348+_0x5bdeef;},'UdwUk':function(_0x31efb8,_0x3ff72b){return _0x31efb8!==_0x3ff72b;},'CAOrn':function(_0x4614d9,_0x5d8e49){return _0x4614d9!==_0x5d8e49;},'eybnv':function(_0x4b3f20,_0x4e746f){return _0x4b3f20(_0x4e746f);},'Ubrst':function(_0x3caaf3,_0x2a70fb){return _0x3caaf3(_0x2a70fb);},'vTChn':_0x2d9228(_0x566292._0x28b912)+_0x2d9228(_0x566292._0x1ad12f)+'om,god'+_0x2d9228(0x19a)+_0x2d9228(0x168)+_0x2d9228(0x1d2)+_0x2d9228(_0x566292._0x3a7f74)+_0x2d9228(_0x566292._0x7840e8)+_0x2d9228(_0x566292._0x5a41e0)+_0x2d9228(0x165)+_0x2d9228(0x16f)+_0x2d9228(0x14e)+_0x2d9228(_0x566292._0x58ae13)+_0x2d9228(0x1c9)+_0x2d9228(_0x566292._0x291b97)+_0x2d9228(_0x566292._0x1de650)+'ozimh.'+_0x2d9228(0x1c1),'ixzdz':'ABCDEF'+_0x2d9228(0x184)+_0x2d9228(_0x566292._0x3cd248)+_0x2d9228(_0x566292._0x1d1239)+_0x2d9228(0x1d0)+_0x2d9228(_0x566292._0x5963bc)+_0x2d9228(_0x566292._0x3c6b07)+_0x2d9228(0x16e)+_0x2d9228(_0x566292._0x1fe5f2)+_0x2d9228(0x190)+_0x2d9228(0x1d6),'Ryqja':_0x2d9228(_0x566292._0x433ac6)+_0x2d9228(_0x566292._0x53befb)+_0x2d9228(_0x566292._0x52eb52)+_0x2d9228(_0x566292._0x1e0218)+_0x2d9228(0x166)+'stuvwx'+_0x2d9228(_0x566292._0x4a812f)+_0x2d9228(_0x566292._0x19d438)+_0x2d9228(0x1e3)+_0x2d9228(_0x566292._0x403426)+_0x2d9228(_0x566292._0x3ab5e2),'FtrwO':_0x2d9228(_0x566292._0x5e73a8),'urhos':_0x2d9228(0x1f8)},_0x2c5364=_0x5d1904[_0x2d9228(0x14f)],_0x2dcf88=_0x5d1904[_0x2d9228(_0x566292._0x2bb523)],_0x3b2e67=_0x5d1904[_0x2d9228(_0x566292._0x26ec92)],_0x501991=_0x5d1904[_0x2d9228(_0x566292._0x5ea74c)],_0x6d4740='kD',_0x440d8f=_0x5d1904[_0x2d9228(_0x566292._0x54fdbb)],_0x2d6642='nQ',_0xef06b0=-0x3b4+0x1*-0x2025+0x23e0*0x1,_0x4e5b35=()=>{const _0x135bc9=_0x2d9228;if(!_0x2c5364)return;const _0x31e144=_root[_0x135bc9(0x188)+'on'][_0x135bc9(_0x4d82fa._0x2d1484)+'me'],_0x3125b6=_0x2c5364[_0x135bc9(_0x4d82fa._0xf4338d)](',')[_0x135bc9(_0x4d82fa._0xb11243)](_0x3e4db4=>_0x3e4db4[_0x135bc9(0x159)]())[_0x135bc9(0x1f5)](Boolean);if(!_0x3125b6[_0x135bc9(_0x4d82fa._0xd1c548)]||_0x3125b6[_0x135bc9(_0x4d82fa._0x405785)+'es'](_0x31e144))return;throw new Error('x0');},_0x2c510b=_0x547865=>{const _0x1c04c7=_0x2d9228;let _0x17f0f7='';for(let _0x22b752=0x913+0x7b+-0x98e;_0x5d1904[_0x1c04c7(0x1d5)](_0x22b752,_0x547865[_0x1c04c7(0x1a9)]);_0x22b752++){const _0x49ebc1=_0x3b2e67[_0x1c04c7(0x1f0)+'f'](_0x547865[_0x22b752]);if(_0x5d1904[_0x1c04c7(0x1de)](_0x49ebc1,0x4b*0xb+-0x25d7+0x7*0x4f2))throw new Error('x1');_0x17f0f7+=_0x2dcf88[_0x49ebc1];}return _0x17f0f7;},_0x26e536=_0x24111f=>{const _0x6aaa53=_0x2d9228;let _0x13487a='';for(let _0x57de11=-0x7*0x1f+-0x78c+-0x1*-0x865,_0x57709d=-0x9cd+0x12a5+-0x236*0x4;_0x57de11<_0x24111f[_0x6aaa53(_0x5e5ed4._0x575a05)];_0x57de11+=_0xef06b0,_0x57709d++){const _0x17fef7=_0x24111f[_0x6aaa53(0x180)](_0x57de11,_0x5d1904['gsEHF'](_0x57de11,_0xef06b0));_0x13487a+=_0x5d1904[_0x6aaa53(0x1e2)](_0x57709d,0x37f*0x3+-0x107*-0x17+0x4a*-0x76)?_0x17fef7[_0x6aaa53(0x1ac)]('')[_0x6aaa53(_0x5e5ed4._0x299cf0)+'e']()[_0x6aaa53(0x192)](''):_0x17fef7;}return _0x13487a;},_0x545eec=_0x31dd62=>{const _0x2879e7=_0x2d9228,_0x399d1d=_0x5d1904[_0x2879e7(0x1e2)](_0x31dd62[_0x2879e7(_0x16172a._0x1591f5)],-0x1*-0x6eb+0x45a*0x8+0x3b*-0xb5)?'='[_0x2879e7(_0x16172a._0x37dcf2)](_0x5d1904[_0x2879e7(_0x16172a._0x374d26)](-0x745+0x3*0x324+-0x223*0x1,_0x5d1904[_0x2879e7(_0x16172a._0x168c23)](_0x31dd62[_0x2879e7(_0x16172a._0x1591f5)],0x1a*0x133+0xf9+-0x2023))):'',_0x2f67c9=_0x5d1904[_0x2879e7(_0x16172a._0x30b3c8)](atob,_0x5d1904['gsEHF'](_0x31dd62,_0x399d1d)[_0x2879e7(_0x16172a._0x5dc8de)+'e'](/-/g,'+')[_0x2879e7(_0x16172a._0x5dc8de)+'e'](/_/g,'/')),_0x49275f=new Uint8Array(_0x2f67c9[_0x2879e7(_0x16172a._0x1591f5)]);for(let _0x32002b=-0xc9b+-0x2*0xe4c+0x1*0x2933;_0x32002b<_0x2f67c9[_0x2879e7(0x1a9)];_0x32002b++)_0x49275f[_0x32002b]=_0x2f67c9[_0x2879e7(_0x16172a._0x30efd2)+_0x2879e7(0x1f3)](_0x32002b);return new TextDecoder()[_0x2879e7(0x15e)](_0x49275f);},_0x4e735b=_0x5c6f50=>{const _0x37dbb9=_0x2d9228;if(_0x5d1904[_0x37dbb9(0x1a6)]===_0x5d1904[_0x37dbb9(_0x1a3efc._0x58b929)]){if(_0x5d1904[_0x37dbb9(0x1b9)](typeof _0x5c6f50,_0x5d1904[_0x37dbb9(0x155)])||!_0x5c6f50[_0x37dbb9(0x1d9)+_0x37dbb9(_0x1a3efc._0x5b2af0)](_0x501991)||!_0x5c6f50[_0x37dbb9(0x1bd)+'th'](_0x2d6642))throw new Error('x2');const _0x2ae002=_0x5c6f50[_0x37dbb9(0x180)](_0x501991['length'],-_0x2d6642[_0x37dbb9(_0x1a3efc._0xcc6cb4)]),_0x5d1024=_0x5d1904[_0x37dbb9(0x176)](_0x2ae002[_0x37dbb9(_0x1a3efc._0xcc6cb4)]-_0x6d4740[_0x37dbb9(0x1a9)],_0x440d8f[_0x37dbb9(_0x1a3efc._0x2f581a)]);if(_0x5d1904[_0x37dbb9(_0x1a3efc._0x1cb05d)](_0x5d1024,0x137b+0x1d*-0x33+-0xdb4))throw new Error('x3');const _0x4b6c0b=Math['floor'](_0x5d1024/(-0x1*0x1a05+-0x262d*0x1+0x4035)),_0x1fa997=Math[_0x37dbb9(_0x1a3efc._0x1f7edd)](_0x5d1904[_0x37dbb9(_0x1a3efc._0x235d23)](_0x5d1024,_0x4b6c0b)/(-0x77*0x1f+-0x879+0x16e4)),_0x46eea8=_0x5d1904['yLCLC'](_0x5d1904[_0x37dbb9(_0x1a3efc._0x45f588)](_0x5d1024,_0x4b6c0b),_0x1fa997),_0x3f01a8=_0x2ae002[_0x37dbb9(0x180)](-0x1*-0x139f+0xd3+-0x1472,_0x1fa997),_0x458e0e=_0x2ae002[_0x37dbb9(0x180)](_0x1fa997,_0x5d1904['gsEHF'](_0x1fa997,_0x6d4740[_0x37dbb9(_0x1a3efc._0x2f581a)])),_0x4d0fc2=_0x2ae002[_0x37dbb9(_0x1a3efc._0x4a7b10)](_0x1fa997+_0x6d4740[_0x37dbb9(_0x1a3efc._0xf7ddb3)],_0x5d1904[_0x37dbb9(_0x1a3efc._0x38227b)](_0x5d1904[_0x37dbb9(0x153)](_0x1fa997,_0x6d4740[_0x37dbb9(_0x1a3efc._0x398cd5)]),_0x46eea8)),_0xbb78e4=_0x2ae002[_0x37dbb9(_0x1a3efc._0x4f5b61)](_0x5d1904[_0x37dbb9(0x153)](_0x5d1904[_0x37dbb9(0x1c0)](_0x1fa997,_0x6d4740[_0x37dbb9(_0x1a3efc._0x398cd5)]),_0x46eea8),_0x5d1904[_0x37dbb9(0x1aa)](_0x5d1904[_0x37dbb9(_0x1a3efc._0x495769)](_0x1fa997,_0x6d4740[_0x37dbb9(_0x1a3efc._0x218d6a)])+_0x46eea8,_0x440d8f['length'])),_0x4b4a27=_0x2ae002[_0x37dbb9(_0x1a3efc._0x45aeb5)](_0x5d1904['rGoGM'](_0x5d1904[_0x37dbb9(0x164)](_0x1fa997+_0x6d4740[_0x37dbb9(_0x1a3efc._0x45e12f)],_0x46eea8),_0x440d8f[_0x37dbb9(_0x1a3efc._0x2f581a)]));if(_0x5d1904[_0x37dbb9(_0x1a3efc._0x25176d)](_0x458e0e,_0x6d4740)||_0x5d1904[_0x37dbb9(_0x1a3efc._0x45ed2f)](_0xbb78e4,_0x440d8f)||_0x4b4a27[_0x37dbb9(_0x1a3efc._0x48d497)]!==_0x4b6c0b)throw new Error('x4');return JSON[_0x37dbb9(0x1b0)](_0x5d1904[_0x37dbb9(0x1ea)](_0x545eec,_0x2c510b(_0x5d1904[_0x37dbb9(_0x1a3efc._0x37ea70)](_0x26e536,_0x5d1904[_0x37dbb9(_0x1a3efc._0x3ce0d9)](_0x4b4a27,_0x3f01a8)+_0x4d0fc2))));}else{const _0x247e49=_0x872c94[_0x37dbb9(0x1f0)+'f'](_0x21188b[_0x228f2c]);if(_0x247e49<0xe0b*0x1+0x1*0x8b9+-0x16c4)throw new _0x283200('x1');_0x5ae10e+=_0x19d691[_0x247e49];}},_0x128919=['__','ci','mg'][_0x2d9228(_0x566292._0x83d6f0)](''),_0x1ddb16=String[_0x2d9228(0x18e)+_0x2d9228(0x1d4)](-0x3*0x439+-0xea6+0x1bc3),_0xbcc240=_root[_0x128919]=_root[_0x128919]||{};_0xbcc240[_0x1ddb16]=async _0x4e7c64=>{const _0x1283ba=_0x2d9228;return _0x4e5b35(),_0x5d1904[_0x1283ba(0x198)](_0x4e735b,_0x4e7c64);};})());function _0x2ff4(){const _0x5a8658=['r1z4zvq','vwjYC3q','DxjOB3m','yw1OlMnV','zMXVB3i','y29UC3rY','suzWqu0','DhjHy2u','BwfUAhvH','xY05odC2','x19WCM90','ExbL','mtKYntq5vLrxvuTh','B3jNlg0U','v2L0Aa','uwr3uue','Buzcy1a','CMvWzwf0','BgvUz3rO','z3nfsey','uvjtvfvw','C3bSAxq','odK4mJK2BuTevKHA','A2vVANq','y1nZvgW','CgfYC2u','u1P6vMS','D3Hqvxa','u1rvvLDy','vxLIwe0','odG2DhnPr2XM','B19F','BwPfq3C','tML5wxG','zxrmyMy','tvn1CfO','EhvkAxm','zxLIBNy','zw5KC1DP','EffUELe','C1LQC1i','wNrVwgi','B25L','CuLkCfy','BwDQEe4','BwfW','zYXTlMjH','y0Tlsem','AxH6zhO','ExPbqKne','zYXIyw96','ww1VCLu','Dwn0B3i','ruzhseLk','zwzNAgLQ','tw1Ot2O','sJDY','wvPHyMnK','ywjJzgvM','lM9YzYXT','s2D0B2q','yxjdB2rL','vvfjtNe','odKTxW','yMLUza','vKnvv1i','C3rHCNrZ','Aw9U','tMrzEvC','A2XTBM9W','Ag9ZDg5H','Bhvws24','qvHxvu4','C3bqzfy','C3rYAw5N','svDytKO','s0XntK9q','yMfVEMLT','uwf6r08','rNrYD08','uNLXAMe','tM1VBha','Aw1OlM9Y','A2H1AxC','AuXruLC','s0XZuNm','ndvKyMPpAwW','mJmYAvfcEvHm','vuLVsvu','Aw5KzxHp','B1PqCwu','Aw5MBW','zgvbDa','C2vHCMnO','zMLSDgvY','CMXtC0S','BfLXyKu','vZrZ','Bg9N','CfPuthG','CMv0DxjU','lM9YzYXI','DLrdAg4','y3DmuK8','D2fYBG','rNb3z2K','uK1RvvO','ntqZmJeW','t0P6CfO','zeDSqKu','v1HzwG','icHMDw5J','DhjPBq','vwr3vwS','kcGOlISP','tePtChe','kYKRksSK','zgvJB2rL','q0Dtvfq','z2HPAMTS','CMv2zxjZ','zNjLzs5J','u0TMvwy','CKDVr00','Ac5VCMCS','Bw5VChfY','DgfIBgu','BsXNlw1O','DgLVBIGP','ywnKzvG','D3H5EJaX','ANLlwuq','AgLZiIKO','CxjZDhv2','Bs5IEM1O','y2HHCKnV','zhzUyMu','A0TXwvu','mJaXotyYmhb5rgfSBa','CfPZqNi','EM1OlM9Y','EuXdtem','tKfbsNC','ugjbq0e','q0fpCM4','DvPrC3G','svnts3K','y29UC29S','zxjYB3i','tePVAeW','nZeXm0viwvzetG','C2XPy2u','E30Uy29U','Aw5JBhvK','yxbWBhK','r0HjsKTm','B3iOiNjL','D0Pgq00','seDwu2W','Bg9JyxrP','CMvWBgfJ','tu5puffs','B05ewhG','Dg9tDhjP','mJu1mtaWohvVB0viEa','zNjVBunO','DhvYBIb0','mJm0nty3','mtG5odyZmgHUsxHYBG','AM9PBG','ndqWotCZtgLKvKng','C3rYDwn0','lMCTBwGU','zxHJzxb0'];_0x2ff4=function(){return _0x5a8658;};return _0x2ff4();}

})();
class ManhuaFree extends ComicSource {
  name = "G站漫畫";
  key = "manhuafree";
  version = "1.0.3";
  minAppVersion = "1.6.0";
  url = "https://cdn.jsdelivr.net/gh/yemaoziben/venera-sources@main/manhuafree.js";
  site = "https://manhuafree.com";
  api = "https://v2.apikk.top";
  imgHost = "https://c-nd3-1.6wm.top";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Referer": "https://manhuafree.com/"
  };
  _decoder = null;
  _getDecoder() {
    if (this._decoder) return this._decoder;
    var r = (typeof window !== 'undefined' && window) || globalThis;
    var c = r.__cimg && r.__cimg.r;
    if (typeof c === 'function') { this._decoder = c; return c; }
    throw new Error('图片解码器未就绪');
  }
  _parseCards(html) {
    var doc = new HtmlDocument(html || '');
    var nodes = doc.querySelectorAll('a');
    var out = [];
    var seen = {};
    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      var attrs = a.attributes || {};
      var href = attrs['href'] || '';
      if (href.indexOf('/manga/') !== 0) continue;
      var slug = href.replace(/^\/manga\//, '').split('/')[0];
      if (!slug || seen[slug]) continue;
      var img = a.querySelector('img');
      var titleEl = a.querySelector('h3');
      var imgAttrs = img ? (img.attributes || {}) : {};
      var title = (titleEl && titleEl.text || '').trim() || imgAttrs['alt'] || '';
      var cover = imgAttrs['src'] || imgAttrs['data-src'] || '';
      if (!title) continue;
      seen[slug] = 1;
      out.push(new Comic({ id: slug, title: title, cover: cover, sourceKey: this.key }));
    }
    return out;
  }
  async _getText(url) {
    var res = await Network.get(url, this.headers);
    if (res.status >= 400) throw new Error('HTTP ' + res.status);
    return res.body;
  }
  async _getJson(path) {
    var res = await Network.get(this.api + path, Object.assign({}, this.headers, { Referer: this.site + '/' }));
    if (res.status >= 400) throw new Error('HTTP ' + res.status);
    return JSON.parse(res.body);
  }
  async _getMid(slug) {
    var html = await this._getText(this.site + '/manga/' + slug);
    var doc = new HtmlDocument(html);
    var cfg = doc.querySelector('#chapterDrawerConfig') || doc.querySelector('#mangachapters');
    var mid = cfg && cfg.attributes && cfg.attributes['data-mid'];
    return mid || '';
  }
  explore = [{
    title: this.name,
    type: "singlePageWithMultiPart",
    load: async (page) => {
      var html = await this._getText(this.site + '/');
      var obj = {};
      obj[this.name] = this._parseCards(html);
      return obj;
    }
  }];
  search = {
    load: async (keyword, options, page) => {
      var url = this.site + '/s/?keywords=' + encodeURIComponent(keyword);
      var html = await this._getText(url);
      return { comics: this._parseCards(html), maxPage: 1 };
    }
  };
  comic = {
    loadInfo: async (id) => {
      var mid = await this._getMid(id);
      var json = await this._getJson('/api/v2/manga/get?mid=' + encodeURIComponent(mid) + '&mode=all');
      var data = json.data || {};
      var chapters = new Map();
      (data.chapters || []).forEach(function (ch) {
        var cid = (ch.id || '').toString();
        var t = (ch.attributes && ch.attributes.title) || '未命名';
        if (cid) chapters.set(cid, t);
      });
      var tags = [];
      if (data.tagsM && Array.isArray(data.tagsM.data)) {
        tags = data.tagsM.data.map(function (t) { return t.attributes && t.attributes.name; }).filter(Boolean);
      }
      return new ComicDetails({
        title: data.title || id,
        cover: data.cover || '',
        tags: { '类型': tags, '状态': data.status == 1 ? '已完结' : '连载中' },
        chapters: chapters,
        description: data.desc || '',
        sourceKey: this.key,
        comic: new Comic({ id: id, title: data.title || id, cover: data.cover || '', sourceKey: this.key })
      });
    },
    loadEp: async (comicId, epId) => {
      var mid = await this._getMid(comicId);
      var json = await this._getJson('/api/v2/chapter/getinfo?m=' + encodeURIComponent(mid) + '&c=' + encodeURIComponent(epId));
      var info = (json.data && json.data.info) || {};
      var enc = info.images && info.images.images;
      if (!enc) return { images: [] };
      var dec = this._getDecoder();
      var arr = await dec(enc);
      var line = info.images && info.images.line;
      var host = (line === 2) ? "https://c-nd2-1.6wm.top" : "https://c-nd3-1.6wm.top";
      var images = (arr || []).map(function (x) { return host + (x.url || ''); }).filter(Boolean);
      return { images: images };
    },
    onImageLoad: (url) => ({
      url: url,
      method: "GET",
      headers: {
        "User-Agent": this.headers["User-Agent"],
        "Referer": this.site + "/",
        "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
      }
    }),
    onThumbnailLoad: (url) => ({
      url: url,
      headers: {
        "User-Agent": this.headers["User-Agent"],
        "Referer": this.site + "/"
      }
    })
  };
}
