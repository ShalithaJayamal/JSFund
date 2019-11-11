function GoT(name) {
    this.name = name
  }
  
  let name = new GoT('Jon Snow')
  
  GoT.prototype.toString = function() { 
    return ''+this.name;
  }
  
  console.log(name.toString())