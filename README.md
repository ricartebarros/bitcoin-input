# bitcoin-input
Basic functions to validate bitcoin input text fields

```html
<input type="text" value="" class="am_btc_input" id="btc_amount" required placeholder="" >
<br />
<input type="button" value="Check BTC input" id="bt_check_input" />
```

    $(function(){

        setupBitcoinInput(); //adds validation filter on all inputs that "are" btc_amount class


        $('#bt_check_input').click(function(){

            let btc_amount = $('#btc_amount').val();

            let btcValidationObj = validateBitcoinInputValue(btc_amount);

            if( btcValidationObj.resultCode!=0 ){
                console.log( btcValidationObj.resultMsg ); //e.g. show this message on warning alert divs.
                return false;
            }

            let validValue = btcValidationObj.btc_value; //sanitized value

            console.log( validValue );

            //go ahead


        });


    });
