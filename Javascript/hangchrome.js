//example to show that javscript is single threaded
//copy and paste in chorme console
function hang(secs){
    let stopAt=Date.now()+(secs*1000)
    while(Date.now()<stopAt){}
}
hang(10)//pass time as second