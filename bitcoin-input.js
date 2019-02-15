
//https://github.com/ricartebarros/bitcoin-input

function bitcoinInputFilter(event,input){ //allow only numbers and one dot
    let key = event.which || event.keyCode || 0;
    if (( (key != 46 || (key == 46 && $(input).val() == '')) || $(input).val().indexOf('.') != -1) && (key < 48 || key > 57)) {
        event.preventDefault();
    }
}

function setupBitcoinInput(){ //apply restrictions to inputs with btc_input class

    let input = $('.am_btc_input');

    $(input).each(function(index,obj){
        (function(index2,obj2){
            $(obj2).bind('keypress', function (event) {
                return bitcoinInputFilter(event, obj2);
            });
        })(index,obj);
    });

    $(input).on('paste', function(event) {
        event.preventDefault();
    });

}

function validateBitcoinInputValue(value){
    const MAX_BTC_VALUE = 21000000.00000000;

    let result = {
        resultCode: 0, // when 0, input is ok
        resultMsg: "", // you may use this message in error message displays
        btc_value: 0.00000000
    };

    if( (typeof value !== 'string') && !(value instanceof String) ){
        value = value.toString();
    }

    if( (value=='') || (value==null) || (value==undefined) ){
        result = {
            resultCode: 5,
            resultMsg: "Empty value!",
            btc_value: 0.00000000
        };
        return result;
    }

    let pieces = value.split('.');
    if( pieces.length==2 ){

        if( pieces[1].length<=8 ){

            let amount = parseFloat(value);
            if( amount <= MAX_BTC_VALUE ){
                result = {
                    resultCode: 0,
                    resultMsg: "",
                    btc_value: amount
                };
            }else{
                result = {
                    resultCode: 3,
                    resultMsg: "Invalid input. Value exceeds the maximum BTC value of "+MAX_BTC_VALUE,
                    btc_value: 0.00000000
                };
            }

        }else{
            result = {
                resultCode: 2,
                resultMsg: "Invalid input. More then eight decimal places!",
                btc_value: 0.00000000
            };
        }

    }else{
        result = {
            resultCode: 1,
            resultMsg: "Invalid input. Check for dot character!",
            btc_value: 0.00000000
        };
    }
    return result;
}
