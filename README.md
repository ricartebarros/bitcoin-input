# bitcoin-input
Basic functions to validate bitcoin input text fields


<input type="text" value="" class="am_btc_input" id="btc_amount" required placeholder="" >
<br />
<input type="button" value="Check BTC input" id="bt_check_input" />


    $(function(){

        setupBitcoinInput();


        $('#bt_check_input').click(function(){

            let btc_amount = $('#btc_amount').val();

            let btcValidationObj = validateBitcoinInputValue(btc_amount);
            if( btcValidationObj.resultCode!=0 ){
                $('#mod-danger').modal('show');
                $('#mod-danger .modal-body p').html(btcValidationObj.resultMsg);
                return false;
            }

        });


    });
