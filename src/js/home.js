document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


  document.addEventListener('DOMContentLoaded', function() {
    var Modalelem = document.querySelector('.modal');
    var instance = M.Modal.init(Modalelem);
    instance.open();
    
  });

//   

  