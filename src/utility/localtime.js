'use strict';

var  date = new Date(),
    _year = date.getFullYear(),
    __month = date.getMonth()+1,
    _month = __month < 10 ? '0' + __month.toString() : __month,
    __day = date.getDate(),
    _day = __day < 10 ? '0' + __day.toString() : __day,
    __hour = date.getHours(),
    _hour = __hour < 10 ? '0' + __hour.toString() : __hour,
    __min = date.getMinutes(),
    _min = __min < 10 ? '0' + __min.toString() : __min,
    __sec = date.getSeconds(),
    _sec = __sec < 10 ? '0' + __sec : __sec,
    _Y_M = _year.toString() + _month.toString(),
    _Y_M_D = _Y_M + _day.toString(),
    _Y_M_D_H = _Y_M_D + _hour.toString(),
    _Y_M_D_H_M = _Y_M_D_H + _min.toString(),
    _Y_M_D_H_M_S = _Y_M_D_H_M + _sec.toString(),
    _H_M_S = _hour.toString() + _min.toString() + _sec.toString();

module.exports = {
	yy: _year,
	mm: _month,
	dd: _day,
	HH: _hour,
	MM: _min,
	SS: _sec,
	yy_mm: _Y_M,
	yy_mm_dd: _Y_M_D,
	yy_mm_dd_hh: _Y_M_D_H,
	yy_mm_dd_hh_mm: _Y_M_D_H_M,
	yy_mm_dd_hh_mm_ss: _Y_M_D_H_M_S,
    hh_mm_ss: _H_M_S
}