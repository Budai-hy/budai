Page({
  data: {
    src: '../images/c.png',
    btncss:{
    c: 'active',
    d: 'inactive',
    e: 'inactive',
    f: 'inactive',
    g: 'inactive',
    a: 'inactive',
    b: 'inactive'
  }
  },
  change:function(event){
    console.log(event)
    var btnid = event.target.id
    var srcfile = '../../images/'+btnid+'.png'
    var cssobj = this.data.btncss
    for (var index in cssobj){
      cssobj[index] = index==btnid?'active':'inactive'
    }
    this.setData({
      src:srcfile,
      btncss:cssobj
    })
  },
})