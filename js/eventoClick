function checkEventObj(_event_) {
            // --- IE explorer 
            if (window.event)
                return window.event;
            // --- Netscape and other explorers 
            else
                return _event_;
        }

function click(_event_) {
            // --- Retrieve event object from current web explorer 
            var winObj = checkEventObj(_event_);
            
            var intKeyCode = winObj.keyCode;
            var intAltKey = winObj.altKey;
            var intCtrlKey = winObj.ctrlKey;
            
            if(intKeyCode == KEY_UP || intKeyCode == KEY_SPACE){
                personagem.pula();
                // --- Map the keyCode in another keyCode not used 
                winObj.keyCode = intKeyCode = REMAP_KEY_T;
                winObj.returnValue = false;
                return false;
            }

            if (intKeyCode == KEY_RIGHT ) {

                velocidade ++;
                //personagem.andaFrente();

                // --- Map the keyCode in another keyCode not used 
                winObj.keyCode = intKeyCode = REMAP_KEY_T;
                winObj.returnValue = false;
                return false;
            }
            if (intKeyCode == KEY_LEFT ) {

                velocidade --;
                //personagem.andaTras();

                // --- Map the keyCode in another keyCode not used 
                winObj.keyCode = intKeyCode = REMAP_KEY_T;
                winObj.returnValue = false;
                return false;
            }
            if (intKeyCode == KEY_ENTER) {
                if (pausado){
                    pausado = false;
                    return;
                }else{
                    pausado = true;
                    return;
                } 
            }
            if (intKeyCode == KEY_R) {
                pausado=true;
                vida=7,
                pontosJogador=0,
                velocidade=3,
                frames = 0,
                maxPulos=1,
                main();
            }
        }
