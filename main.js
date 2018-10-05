$(clickMe).on('click',function(){
    $(popover).toggle()
    $(document).one('click',function(){
        $(popover).toggle()    
    })
})

$(wrapper).on('click',function(e){
    e.stopPropagation()
})