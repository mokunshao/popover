$(clickMe).on('click',function(){
    $(popover).show()
    // console.log(1)
    setTimeout(function(){
        // console.log(2)    
        $(document).one('click',function(){
            $(popover).hide()
            // console.log(3)
        })
    },0)
})