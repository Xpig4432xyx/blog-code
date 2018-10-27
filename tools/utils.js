// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1,                 //月份
    'd+': this.getDate(),                    //日
    'h+': this.getHours(),                   //小时
    'm+': this.getMinutes(),                 //分
    's+': this.getSeconds(),                 //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds()             //毫秒
    // "W"  : this.weekday()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
};

window.alert = function(name) {
  var iframe = document.createElement('IFRAME');
  iframe.style.display = 'none';
  iframe.setAttribute('src', 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

function getQueryString(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function toQueryString(paramsObject) {
  return Object
    .keys(paramsObject)
    .map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(paramsObject[key]);
    })
    .join('&');
}

function urlEncode(data) {
  var _result = [];
  for (var key in data) {
    var value = data[key];
    for (var childKey in value) {
      var childValue = value[childKey];
      _result.push(key + '[' + childKey + ']' + '=' + childValue);
    }
  }

  return _result.join('&');
}

function getFormData(object) {
  var formData = new FormData();
  Object.keys(object).forEach(function(key) {
    if (typeof object[key] === 'object') {
      return formData.append(key, JSON.stringify(object[key]));
    } else {
      return formData.append(key, object[key]);
    }
  });
  return formData;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


var isMobile = {
  Windows: function() {
    return /IEMobile/i.test(navigator.userAgent);
  },
  Android: function() {
    return /Android/i.test(navigator.userAgent);
  },
  iOS: function() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
};

function inAirPay(callBack) {
  if (navigator.userAgent.indexOf('AlipayClient') > -1) {
    const script = document.createElement('script');
    script.src = 'https://appx/web-view.min.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
    typeof callBack === 'function' && callBack();
  }
}


export default {
  getQueryString: getQueryString,
  toQueryString: toQueryString,
  getFormData: getFormData,
  guid: guid,
  isMobile: isMobile,
  urlEncode: urlEncode,
  inAirPay: inAirPay,


  /**
   * 比较日期时间差
   * @method getDateDiff
   * @param {String} startDate 开始日期.
   * @param {String} endDate 参考版本.
   * @return {number} 返回日期时间差.
   */
  getDateDiff(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, '/'))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, '/'))).getTime();
    var dates = (endTime - startTime) / (1000 * 60 * 60 * 24);
    return dates;
  },

  /**
   * 弹出类似ios提示框一样的提示
   * @method messageBox
   * @param {string} msg 提示信息
   * @param {Integer} delay 提示持续时间 default 3000
   * @param {Integer} show 显示速度 default 0
   * @param {Integer} hide 隐藏速度 default 0
   */
  messageBox(msg, time) {
    time = typeof time !== 'undefined' ? time : 3000;
    var cenetr = document.createElement('div');
    cenetr.innerHTML = msg;
    cenetr.className = 'center-alert';
    document.getElementsByTagName('body')[0].appendChild(cenetr);
    setTimeout(function() {
      document.getElementsByTagName('body')[0].removeChild(cenetr);
    }, time);

  },

  /**
   * 阿里埋点统计
   * @method aliBuried
   * @param {String} pageA 当前页面.
   * @param {String} pageB 前往页面.
   */

  aliBuried(spma = 'a211k0', spmb = '10721446', checksum = '46866782') {
    var q = (window.goldlog_queue || (window.goldlog_queue = []));
    q.push({
      action: 'goldlog.setPageSPM',
      arguments: [spma, spmb]
    });

    q.push({
      action: 'goldlog.sendPV',
      arguments: [{
        is_auto: false,
        checksum: checksum // checksum需要申请
      }, {
        userparam1: 1,
        userparam2: 2
      }]
    });
  },

  saveById(records) {
    let result = {byId: {}};
    let ids = records.map((record) => {
      result.byId[record.id] = record;
      return record.id;
    });

    result.ids = ids;
    result.id = ids[0];
    return result;
  },

  /**
   * 防止重复点击
   * @method preventDoubleClicks
   * @param {DOM} currentElement 点击事件DOM e.target.
   * @param {Array} promises 异步事件数组函数.
   */
  preventDoubleClicks(currentElement, promises) {
    if (currentElement.getAttribute('click-status') === 'processing') {
      return false;
    } else {
      currentElement.setAttribute('click-status', 'processing');

      async function queue(promises) {
        let res = null;
        for (let promise of promises) {
          res = await promise(res);
        }
        return await res;
      }

      queue(promises).then(() => {
        currentElement.setAttribute('click-status', '');
      });
    }
  }

};
