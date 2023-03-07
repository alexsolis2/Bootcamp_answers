import {sum, rest} from "./operations.js";

function importar(n1,n2)
{
  var x = sum(n1,n2);
  var y = rest(n1,n2);
  console.log("la suma de ", n1," y ", n2," es ", x);
  console.log("la resta de ", n1," y ", n2," es ", y);
}

importar(3,4);
