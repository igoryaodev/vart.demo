
"use strict";

module.exports = function () {
    return function (value) {
        if (value || value == 0) {
           switch(parseInt(value)){
            	case 0:
            		value = '话题';
            		break; 
        		case 1:
        			value = '小组';
        			break;
    			case 2:
    				value = 'H5';
					break;	
            }
        }

        return  value;
    };
};